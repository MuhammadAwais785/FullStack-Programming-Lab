'use client';

import Link from 'next/link';

export default function ProductCard({ id, name, price, image, category = 'Product' }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Product Image */}
      <div className="w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden hover:bg-gray-100 transition">
        <div className="w-full h-full flex items-center justify-center text-6xl">
          {image || '🪑'}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">{category}</p>
        <h3 className="font-bold text-gray-800 mb-3 h-12 overflow-hidden text-sm leading-tight">
          {name}
        </h3>
        <p className="text-orange-500 font-bold text-xl mb-5">£{price}</p>

        {/* Detail Button - Minimal */}
        <Link href={`/products/${id}`}>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2.5 rounded text-sm transition duration-200">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
