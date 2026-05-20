'use client';

import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const PRODUCTS = [
  {
    id: 1,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 1.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 2,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 2.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 3,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 3.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 4,
    title: 'XS SCYBA X SET+B8 119',
    image: 'carbaret 4.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 5,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 5.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 6,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 1.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 7,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 2.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
  {
    id: 8,
    title: 'XS SCYBA X SERIES 119',
    image: 'carbaret 3.jpg',
    description: 'The goods of our stores are very reliable and the we care about the customer',
    price: 500,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      {/* LAYER 1: HEADER */}
      <Header />

      {/* LAYER 2: LOGO & CART */}
      <Logo />

      {/* LAYER 3: NAVIGATION */}
      <Navigation />

      {/* LAYER 4: MAIN PRODUCT SHOWCASE */}
      <div className="w-full bg-transparent py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <img
              src="/hottub-showcase.jpg"
              alt="Hot Tub Product Showcase"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* LAYER 5: NEW PRODUCTS SECTION */}
      <div className="w-full bg-transparent py-10 md:py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Title */}
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-8">NEW PRODUCTS</h2>

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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
