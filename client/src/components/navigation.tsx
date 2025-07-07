import { Link, useLocation } from "wouter";
import { BarChart3 } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BarChart3 className="text-teal-500 text-xl mr-3" />
            <h1 className="text-xl font-bold text-gray-900">Семейный бюджет</h1>
          </div>
          <div className="flex space-x-4">
            <Link href="/">
              <button className={`font-medium transition-colors ${
                location === "/" 
                  ? "text-teal-600 hover:text-teal-700" 
                  : "text-gray-600 hover:text-gray-700"
              }`}>
                Главная
              </button>
            </Link>
            <Link href="/recommendations">
              <button className={`font-medium transition-colors ${
                location === "/recommendations" 
                  ? "text-teal-600 hover:text-teal-700" 
                  : "text-gray-600 hover:text-gray-700"
              }`}>
                Рекомендации
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
