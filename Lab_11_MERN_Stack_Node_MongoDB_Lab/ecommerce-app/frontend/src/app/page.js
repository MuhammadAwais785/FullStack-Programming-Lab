'use client';

import { useState, useEffect } from 'react';
import ProductList from '@/components/ProductList';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', value: null },
    { id: 'hot-tubs', name: 'Hot Tubs', value: 'hot-tubs' },
    { id: 'accessories', name: 'Accessories', value: 'accessories' },
    { id: 'maintenance', name: 'Maintenance', value: 'maintenance' }
  ];

  if (!mounted) {
    return null; // Return null during SSR
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🛁 Spa Oasis</h1>
              <p className="text-gray-600 mt-1">Premium Hot Tubs & Accessories</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">🛒 Cart</span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Account
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory
              ? categories.find(c => c.value === selectedCategory)?.name
              : 'All Products'}
          </h2>
          <ProductList category={selectedCategory} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Spa Oasis</h3>
              <p className="text-gray-400">
                Your premier destination for high-quality hot tubs and spa accessories.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@spaoasis.com<br />
                Phone: 1-800-SPA-OASIS
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spa Oasis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
