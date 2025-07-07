import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, ShoppingCart, Apple } from "lucide-react";
import { Link } from "wouter";
import { type Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import StatisticsCard from "@/components/statistics-card";
import ProductCategory from "@/components/product-category";
import ProductModal from "@/components/product-modal";
import PriceAnalysis from "@/components/price-analysis";
import { useToast } from "@/hooks/use-toast";
import { localStorageService } from "@/lib/localStorage";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [hasEdited, setHasEdited] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => Promise.resolve(localStorageService.getAllProducts()),
  });

  const createProductMutation = useMutation({
    mutationFn: async (product: Omit<Product, 'id'>) => {
      return localStorageService.createProduct(product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setHasEdited(true);
      toast({
        title: "Товар добавлен",
        description: "Новый товар успешно добавлен в список",
      });
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось добавить товар",
        variant: "destructive",
      });
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: async ({ id, ...product }: Partial<Product> & { id: number }) => {
      const result = localStorageService.updateProduct(id, product);
      if (!result) throw new Error('Product not found');
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setHasEdited(true);
      toast({
        title: "Товар обновлен",
        description: "Товар успешно обновлен",
      });
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить товар",
        variant: "destructive",
      });
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: async (id: number) => {
      const success = localStorageService.deleteProduct(id);
      if (!success) throw new Error('Product not found');
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setHasEdited(true);
      toast({
        title: "Товар удален",
        description: "Товар успешно удален из списка",
      });
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить товар",
        variant: "destructive",
      });
    },
  });

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('Удалить этот товар?')) {
      deleteProductMutation.mutate(id);
    }
  };

  const handleModalSubmit = (productData: Omit<Product, 'id'>) => {
    if (editingProduct) {
      updateProductMutation.mutate({
        id: editingProduct.id,
        ...productData
      });
    } else {
      createProductMutation.mutate(productData);
    }
  };

  const totalCost = products.reduce((sum, product) => sum + product.price, 0);
  const uniqueCategories = new Set(products.map(p => p.category)).size;

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
              <ShoppingCart className="text-white" size={20} />
            </div>
            <h2 className="text-3xl font-bold text-teal-600">
              Анализ цен на продукты и рекомендации для семьи
            </h2>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatisticsCard value={products.length} label="Товаров в анализе" />
          <StatisticsCard value={uniqueCategories} label="Магазинов" />
          <StatisticsCard value={`~${Math.round(totalCost / 100) * 100}₽`} label="Недельный бюджет" />
          <StatisticsCard value={5} label="Членов семьи" />
        </div>

        {/* Add Product Button */}
        <div className="flex justify-center">
          <Button 
            onClick={handleAddProduct}
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
          >
            <Plus className="mr-2" size={16} />
            Добавить товар
          </Button>
        </div>

        {/* Products List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Оптимальный список покупок на неделю
          </h3>
          <div className="text-sm text-gray-600 mb-6">
            Для семьи: 4 взрослых + 1 ребенок (2,5 года)
          </div>
          
          <div className="space-y-6">
            {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
              <ProductCategory
                key={category}
                category={category}
                products={categoryProducts}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            ))}
          </div>
        </div>

        {/* Price Analysis */}
        <PriceAnalysis products={products} isEdited={hasEdited} />

        {/* Savings Recommendations */}
        <div className="gradient-purple-blue rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-3">💡</span>
            <h3 className="text-xl font-bold">Рекомендации по экономии</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🏪</span>
                <div>
                  <h4 className="font-semibold mb-2">Выбор магазинов</h4>
                  <p className="text-purple-100 text-sm mb-2">Самые выгодные магазины:</p>
                  <ul className="text-purple-100 text-sm space-y-1">
                    <li>• <strong>Пятёрочка</strong> - лучшие цены на молочные продукты и хлеб</li>
                    <li>• <strong>Дикси</strong> - хорошие цены на хлеб и молоко</li>
                    <li>• <strong>Ярче</strong> - отличные цены на яйца и некоторые виды хлеба</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🗺️</span>
                <div>
                  <h4 className="font-semibold mb-2">Стратегия покупок</h4>
                  <p className="text-purple-100 text-sm mb-2">Оптимальный маршрут:</p>
                  <ul className="text-purple-100 text-sm space-y-1">
                    <li>• Основные покупки в <strong>Пятёрочке</strong> (молоко, хлеб, мясо)</li>
                    <li>• Яйца в <strong>Ярче</strong> (экономия 30-50₽)</li>
                    <li>• Хлеб "Красная цена" в <strong>Ашане</strong> (самая низкая цена)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🐷</span>
                <div>
                  <h4 className="font-semibold mb-2">Потенциальная экономия</h4>
                  <p className="text-purple-100 text-sm">
                    При правильном выборе магазинов можно сэкономить <strong>400-700₽ в неделю</strong> или до <strong>2,800₽ в месяц!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Recommendations Button */}
        <div className="flex justify-center">
          <Link href="/recommendations">
            <Button className="gradient-pink-orange text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-all duration-200 shadow-lg transform hover:scale-105">
              <Apple className="mr-3" size={20} />
              Рекомендации по питанию
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        editingProduct={editingProduct}
      />
    </div>
  );
}