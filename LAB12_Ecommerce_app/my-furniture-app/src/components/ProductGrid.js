'use client';

import ProductCard from './ProductCard';

const PRODUCTS = [
  // Featured Products
  { id: 1, name: 'Wooden Chair', price: '134.99', image: '🪑', category: 'Featured' },
  { id: 2, name: 'Modern Table', price: '234.99', image: '📦', category: 'Featured' },
  { id: 3, name: 'Coffee Table', price: '154.99', image: '🪑', category: 'Featured' },
  { id: 4, name: 'Dining Set', price: '434.99', image: '📦', category: 'Featured' },

  // Special Products
  { id: 5, name: 'Accent Chair', price: '189.99', image: '🪑', category: 'Special' },
  { id: 6, name: 'Side Table', price: '99.99', image: '📦', category: 'Special' },
  { id: 7, name: 'Console Table', price: '179.99', image: '🪑', category: 'Special' },
  { id: 8, name: 'Shelf Unit', price: '279.99', image: '📦', category: 'Special' },

  // Popular Products
  { id: 9, name: 'Wardrobe', price: '534.99', image: '🪑', category: 'Popular' },
  { id: 10, name: 'Bed Frame', price: '899.99', image: '📦', category: 'Popular' },
  { id: 11, name: 'Dresser', price: '349.99', image: '🪑', category: 'Popular' },
  { id: 12, name: 'Night Stand', price: '129.99', image: '📦', category: 'Popular' },
];

export default function ProductGrid() {
  const featured = PRODUCTS.filter((p) => p.category === 'Featured');
  const special = PRODUCTS.filter((p) => p.category === 'Special');
  const popular = PRODUCTS.filter((p) => p.category === 'Popular');

  const Section = ({ title, products }) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-orange-500 font-bold text-sm uppercase tracking-widest">COLLECTION</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      <div className="text-center">
        <button className="border-2 border-gray-400 hover:border-orange-500 text-gray-800 hover:text-orange-500 px-10 py-2.5 rounded font-semibold uppercase text-sm tracking-wider transition duration-300">
          See All {title}
        </button>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Section title="FEATURED" products={featured} />
      <Section title="SPECIAL" products={special} />
      <Section title="POPULAR" products={popular} />
    </section>
  );
}
