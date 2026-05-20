'use client';

import Link from 'next/link';

export default function CategoryCollections() {
  const categories = [
    {
      name: 'CHAIRS',
      label: 'COLLECTION',
      image: '🪑',
      color: 'bg-gradient-to-br from-amber-50 to-orange-50',
    },
    {
      name: 'BEDS',
      label: 'COLLECTION',
      image: '🛏️',
      color: 'bg-gradient-to-br from-yellow-50 to-amber-50',
    },
    {
      name: 'TABLES',
      label: 'COLLECTION',
      image: '📦',
      color: 'bg-gradient-to-br from-orange-50 to-red-50',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={`/shop?category=${category.name.toLowerCase()}`}>
            <div className={`${category.color} rounded-2xl p-12 flex flex-col items-center justify-center min-h-56 cursor-pointer hover:shadow-2xl transition transform hover:scale-105 border border-gray-200`}>
              <div className="text-7xl mb-6 drop-shadow-lg">{category.image}</div>
              <h3 className="font-bold text-2xl text-center text-gray-800">{category.name}</h3>
              <p className="text-orange-500 text-sm font-bold tracking-wider mt-2">{category.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
