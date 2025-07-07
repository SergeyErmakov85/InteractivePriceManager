import { type Product } from "@shared/schema";
import { Edit2, Trash2 } from "lucide-react";

interface ProductCategoryProps {
  category: string;
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

const categoryConfig = {
  bread: { name: 'Хлебобулочные изделия', color: 'orange' },
  dairy: { name: 'Молочные продукты', color: 'blue' },
  eggs: { name: 'Яйца', color: 'yellow' },
  meat: { name: 'Мясо', color: 'red' },
  vegetables: { name: 'Овощи', color: 'green' },
  fruits: { name: 'Фрукты', color: 'purple' },
  basics: { name: 'Основные продукты', color: 'gray' },
  spices: { name: 'Приправы', color: 'pink' }
};

export default function ProductCategory({ category, products, onEdit, onDelete }: ProductCategoryProps) {
  const config = categoryConfig[category as keyof typeof categoryConfig];
  
  if (!config || products.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-3">{products[0]?.icon}</span>
        <h4 className="font-semibold text-gray-900">{config.name}</h4>
      </div>
      <div className="space-y-2">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{product.name}</div>
              <div className="text-sm text-gray-600">{product.description}</div>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`font-bold text-${config.color}-600`}>
                {product.price.toFixed(2)}₽
              </span>
              <button
                onClick={() => onEdit(product)}
                className="text-blue-600 hover:text-blue-800 p-1 rounded"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="text-red-600 hover:text-red-800 p-1 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
