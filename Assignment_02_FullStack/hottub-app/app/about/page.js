'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          <div className="w-full bg-white pt-7 px-8 pb-10 shadow-sm">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px] flex items-center gap-1 font-semibold text-gray-500">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="text-black text-[9px] mb-[1px] font-bold">&gt;</span>
              <span className="text-black font-semibold">About Us</span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-bold text-black mb-4 tracking-tight">About Us</h2>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-[14px] text-gray-700 mb-4 leading-relaxed">
                Welcome to HotSpring, your premier destination for premium hot tubs and portable spas. With over two decades of experience in the wellness industry, we are committed to providing you with the highest quality products and exceptional customer service.
              </p>

              <h3 className="text-[18px] font-bold text-gray-800 mt-6 mb-3">Our Mission</h3>
              <p className="text-[14px] text-gray-700 mb-4 leading-relaxed">
                Our mission is to enhance your quality of life by providing affordable, high-quality hot tubs and spas that bring relaxation, health benefits, and joy to your home and family.
              </p>

              <h3 className="text-[18px] font-bold text-gray-800 mt-6 mb-3">Why Choose Us?</h3>
              <ul className="list-disc pl-6 text-[14px] text-gray-700 mb-4 space-y-2">
                <li>Premium Quality Products</li>
                <li>Expert Customer Support 24/7</li>
                <li>Fast and Reliable Delivery</li>
                <li>Competitive Pricing</li>
                <li>Wide Selection of Models</li>
                <li>Warranty and After-Sales Support</li>
              </ul>

              <p className="text-[14px] text-gray-700 mt-6">
                Thank you for choosing HotSpring. We look forward to helping you find the perfect spa for your needs!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
