'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const PRODUCTS = [
  {
    id: 1,
    title: 'Cabaret 3 Person Spa',
    image: 'carbaret 1.jpg',
    description: 'Premium 3-person hot tub with 41 jets',
    price: 500,
  },
  {
    id: 2,
    title: 'Cabaret 4 Person Spa',
    image: 'carbaret 2.jpg',
    description: 'Spacious 4-person hot tub with luxury jets',
    price: 650,
  },
  {
    id: 3,
    title: 'Cabaret 5 Person Spa',
    image: 'carbaret 3.jpg',
    description: 'Family-size 5-person hot tub',
    price: 750,
  },
  {
    id: 4,
    title: 'Premium Series Spa',
    image: 'carbaret 4.jpg',
    description: 'High-end spa with advanced features',
    price: 900,
  },
];

export default function CategoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1000px]">
          <div className="w-full bg-white pt-7 px-8 pb-10 shadow-sm">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px] flex items-center gap-1 font-semibold text-gray-500">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="text-black text-[9px] mb-[1px] font-bold">&gt;</span>
              <span className="text-black font-semibold">Category</span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-bold text-black mb-8 tracking-tight">Hot Tubs & Spas</h2>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
