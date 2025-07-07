import { type Product } from "@shared/schema";

interface PriceAnalysisProps {
  products: Product[];
  isEdited: boolean;
}

export default function PriceAnalysis({ products, isEdited }: PriceAnalysisProps) {
  const totalCost = products.reduce((sum, product) => sum + product.price, 0);
  const minPrice = Math.round(totalCost * 0.85);
  const avgPrice = Math.round(totalCost);
  const maxPrice = Math.round(totalCost * 1.15);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-3">💰</span>
        <h3 className="text-xl font-bold text-gray-900">Итоговая стоимость</h3>
      </div>
      
      <div className={`grid grid-cols-1 ${isEdited ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">Минимальная стоимость</h4>
          <div className="text-2xl font-bold text-green-600">{minPrice.toLocaleString()}₽</div>
          <div className="text-sm text-gray-600">При покупке в самых дешевых магазинах</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">Средняя стоимость</h4>
          <div className="text-2xl font-bold text-blue-600">{avgPrice.toLocaleString()}₽</div>
          <div className="text-sm text-gray-600">При покупке по средним ценам</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">Максимальная стоимость</h4>
          <div className="text-2xl font-bold text-red-600">{maxPrice.toLocaleString()}₽</div>
          <div className="text-sm text-gray-600">При покупке в дорогих магазинах</div>
        </div>
        
        {isEdited && (
          <div className="gradient-teal-blue rounded-lg p-4 text-white shadow-sm">
            <h4 className="font-semibold mb-2">Текущая стоимость</h4>
            <div className="text-2xl font-bold">{totalCost.toLocaleString()}₽</div>
            <div className="text-sm opacity-90">Актуальная стоимость списка</div>
          </div>
        )}
      </div>
    </div>
  );
}
