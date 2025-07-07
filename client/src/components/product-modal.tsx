import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Product } from "@shared/schema";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: Omit<Product, 'id'>) => void;
  editingProduct?: Product | null;
}

const categoryOptions = [
  { value: 'bread', label: 'Хлебобулочные изделия', icon: '🍞' },
  { value: 'dairy', label: 'Молочные продукты', icon: '🥛' },
  { value: 'eggs', label: 'Яйца', icon: '🥚' },
  { value: 'meat', label: 'Мясо', icon: '🥩' },
  { value: 'vegetables', label: 'Овощи', icon: '🥬' },
  { value: 'fruits', label: 'Фрукты', icon: '🍇' },
  { value: 'basics', label: 'Основные продукты', icon: '🛢️' },
  { value: 'spices', label: 'Приправы', icon: '🧂' }
];

export default function ProductModal({ isOpen, onClose, onSubmit, editingProduct }: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    icon: ''
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        category: editingProduct.category,
        description: editingProduct.description,
        price: editingProduct.price.toString(),
        icon: editingProduct.icon
      });
    } else {
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        icon: ''
      });
    }
  }, [editingProduct, isOpen]);

  const handleCategoryChange = (value: string) => {
    const category = categoryOptions.find(cat => cat.value === value);
    setFormData(prev => ({
      ...prev,
      category: value,
      icon: category?.icon || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.description || !formData.price) {
      return;
    }

    onSubmit({
      name: formData.name,
      category: formData.category,
      description: formData.description,
      price: parseFloat(formData.price),
      icon: formData.icon
    });

    setFormData({
      name: '',
      category: '',
      description: '',
      price: '',
      icon: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {editingProduct ? 'Редактировать товар' : 'Добавить товар'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Название товара</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Введите название товара"
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Категория</Label>
            <Select value={formData.category} onValueChange={handleCategoryChange} required>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Описание</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Введите описание (вес, количество)"
              required
            />
          </div>

          <div>
            <Label htmlFor="price">Цена (₽)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              placeholder="0.00"
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
              {editingProduct ? 'Сохранить' : 'Добавить'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
