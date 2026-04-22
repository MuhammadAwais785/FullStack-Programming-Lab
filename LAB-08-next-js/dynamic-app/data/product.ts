export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
};

export const products: Product[] = [
  { id: '1', title: 'Laptop', description: 'High performance gaming laptop', price: '150,000' },
  { id: '2', title: 'Smartphone', description: 'Latest model with AI camera', price: '80,000' },
  { id: '3', title: 'Headphones', description: 'Noise cancelling wireless headphones', price: '15,000' },
];