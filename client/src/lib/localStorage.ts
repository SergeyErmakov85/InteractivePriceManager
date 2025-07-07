import { type Product, type InsertProduct } from "@shared/schema";

export class LocalStorageService {
  private readonly STORAGE_KEY = 'family-budget-products';
  private currentId: number;

  constructor() {
    this.currentId = this.getNextId();
    this.initializeDefaultProducts();
  }

  private getNextId(): number {
    const products = this.getAllProducts();
    return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  }

  private initializeDefaultProducts() {
    const existingProducts = this.getAllProducts();
    if (existingProducts.length > 0) return;

    const defaultProducts: Omit<Product, 'id'>[] = [
      { name: 'Хлеб Красная Цена Белый', category: 'bread', description: '380г × 3 шт', price: 62.97, icon: '🍞' },
      { name: 'Хлеб Жуковский Дарницкий', category: 'bread', description: '700г × 2 шт', price: 65.98, icon: '🍞' },
      { name: 'Молоко Простоквашино', category: 'dairy', description: '2% 930мл × 3 шт', price: 239.96, icon: '🥛' },
      { name: 'Сметана Саратовская', category: 'dairy', description: 'для питания детей 450г × 2 шт', price: 179.98, icon: '🥛' },
      { name: 'Сметана Искренне Ваш', category: 'dairy', description: '10% 300г × 2 шт', price: 159.98, icon: '🥛' },
      { name: 'Яйца куриные Вкуснам', category: 'eggs', description: 'С1 10шт × 3 упаковки', price: 239.97, icon: '🥚' },
      { name: 'Лопатка свиная бескостная', category: 'meat', description: '2.4кг × 1 шт', price: 290.00, icon: '🥩' },
      { name: 'Лук репчатый', category: 'vegetables', description: '500г × 2 шт', price: 60.00, icon: '🧅' },
      { name: 'Салат листовой', category: 'vegetables', description: 'в горшочке × 2 шт', price: 119.98, icon: '🥬' },
      { name: 'Виноград Ред Глоб', category: 'fruits', description: '500г × 1 шт', price: 349.99, icon: '🍇' },
      { name: 'Манго спелое', category: 'fruits', description: '500г × 1 шт', price: 160.00, icon: '🥭' },
      { name: 'Масло подсолнечное', category: 'basics', description: '1л × 2 шт', price: 263.98, icon: '🛢️' },
      { name: 'Сахар песок', category: 'basics', description: '1кг × 2 шт', price: 112.00, icon: '🍚' },
      { name: 'Мука пшеничная', category: 'basics', description: '2кг × 1 шт', price: 119.99, icon: '🌾' },
      { name: 'Приправа Красная цена', category: 'spices', description: 'для курицы 15г × 3 шт', price: 22.47, icon: '🧂' },
      { name: 'Приправа Kotanyi', category: 'spices', description: 'для курицы 30г × 1 шт', price: 69.99, icon: '🧂' }
    ];

    defaultProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  getAllProducts(): Product[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  getProduct(id: number): Product | undefined {
    const products = this.getAllProducts();
    return products.find(p => p.id === id);
  }

  createProduct(insertProduct: InsertProduct): Product {
    const products = this.getAllProducts();
    const newProduct: Product = {
      ...insertProduct,
      id: this.currentId++
    };
    
    products.push(newProduct);
    this.saveProducts(products);
    return newProduct;
  }

  updateProduct(id: number, updateData: Partial<InsertProduct>): Product | undefined {
    const products = this.getAllProducts();
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) return undefined;
    
    products[index] = { ...products[index], ...updateData };
    this.saveProducts(products);
    return products[index];
  }

  deleteProduct(id: number): boolean {
    const products = this.getAllProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    
    if (filteredProducts.length === products.length) return false;
    
    this.saveProducts(filteredProducts);
    return true;
  }

  private saveProducts(products: Product[]) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
}

export const localStorageService = new LocalStorageService();