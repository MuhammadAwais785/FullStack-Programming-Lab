'use client';

import Link from 'next/link';

export default function WishlistPage() {
  const wishlistItems = [
    { id: 1, name: 'Wooden Chair', price: '134.99', image: '🪑', addedDate: '2024-05-10' },
    { id: 2, name: 'Modern Table', price: '234.99', image: '📦', addedDate: '2024-05-08' },
    { id: 3, name: 'Coffee Table', price: '154.99', image: '🪑', addedDate: '2024-05-05' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">Your wishlist is empty.</p>
          <Link href="/shop">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition">
              Explore Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
                {item.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">Added: {item.addedDate}</p>
                <p className="text-orange-500 font-bold text-2xl mb-6">£{item.price}</p>

                <div className="flex gap-3">
                  <Link href={`/products/${item.id}`} className="flex-1">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded transition">
                      View
                    </button>
                  </Link>
                  <button className="flex-1 border border-red-300 text-red-600 hover:bg-red-50 font-bold py-2 rounded transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
