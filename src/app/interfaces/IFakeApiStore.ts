export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export type Category = string;
