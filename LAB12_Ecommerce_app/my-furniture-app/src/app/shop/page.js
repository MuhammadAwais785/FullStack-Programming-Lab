'use client';

import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

const ALL_PRODUCTS = [
  { id: 1, name: 'Wooden Chair', price: '134.99', image: '🪑', category: 'chairs' },
  { id: 2, name: 'Modern Chair', price: '189.99', image: '🪑', category: 'chairs' },
  { id: 3, name: 'Accent Chair', price: '154.99', image: '🪑', category: 'chairs' },
  { id: 4, name: 'Office Chair', price: '199.99', image: '🪑', category: 'chairs' },
  { id: 5, name: 'Queen Bed', price: '899.99', image: '🛏️', category: 'beds' },
  { id: 6, name: 'King Bed', price: '1099.99', image: '🛏️', category: 'beds' },
  { id: 7, name: 'Twin Bed', price: '599.99', image: '🛏️', category: 'beds' },
  { id: 8, name: 'Bunk Bed', price: '799.99', image: '🛏️', category: 'beds' },
  { id: 9, name: 'Dining Table', price: '499.99', image: '📦', category: 'tables' },
  { id: 10, name: 'Coffee Table', price: '199.99', image: '📦', category: 'tables' },
  { id: 11, name: 'Side Table', price: '99.99', image: '📦', category: 'tables' },
  { id: 12, name: 'Desk', price: '349.99', image: '📦', category: 'tables' },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = selectedCategory
    ? ALL_PRODUCTS.filter((p) => p.category === selectedCategory)
    : ALL_PRODUCTS;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>

      {/* Category Filter */}
      <div className="flex space-x-4 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-6 py-2 rounded transition ${
            !selectedCategory
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All Products
        </button>
        <button
          onClick={() => setSelectedCategory('chairs')}
          className={`px-6 py-2 rounded transition ${
            selectedCategory === 'chairs'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Chairs
        </button>
        <button
          onClick={() => setSelectedCategory('beds')}
          className={`px-6 py-2 rounded transition ${
            selectedCategory === 'beds'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Beds
        </button>
        <button
          onClick={() => setSelectedCategory('tables')}
          className={`px-6 py-2 rounded transition ${
            selectedCategory === 'tables'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Tables
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
