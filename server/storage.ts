import { products, type Product, type InsertProduct, type UpdateProduct } from "@shared/schema";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: UpdateProduct): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private currentId: number;

  constructor() {
    this.products = new Map();
    this.currentId = 1;
    this.initializeDefaultProducts();
  }

  private initializeDefaultProducts() {
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
      const id = this.currentId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: number, updateProduct: UpdateProduct): Promise<Product | undefined> {
    const existingProduct = this.products.get(id);
    if (!existingProduct) {
      return undefined;
    }
    
    const updatedProduct: Product = { ...existingProduct, ...updateProduct };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }
}

export const storage = new MemStorage();
