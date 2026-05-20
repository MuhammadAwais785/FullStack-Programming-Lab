'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const INITIAL_ITEMS = [
  {
    id: 1,
    name: 'The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version',
    image: 'carbaret 1.jpg',
    specs: '220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater',
    price: 9.00,
    quantity: 1,
    delivery: 'Standard (7-10 business days)',
  },
  {
    id: 2,
    name: 'The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version',
    image: 'carbaret 2.jpg',
    specs: '220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater',
    price: 12.00,
    quantity: 1,
    delivery: 'Standard (7-10 business days)',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_ITEMS);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          {/* WHITE CONTAINER */}
          <div className="w-full bg-white border border-[#e5e5e5] p-6 lg:p-8 shadow-sm">
            {/* Breadcrumb */}
            <div className="text-[12px] font-medium text-[#444] mb-6 pl-[2px] flex items-center">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="mx-1 text-[#666] font-normal leading-none mb-1 text-[13px]">»</span>
              <span className="font-bold text-black">Shopping Cart</span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-bold text-black mb-4 tracking-tight -ml-1">Shopping Cart</h2>

            {/* Gray inner box */}
            <div className="bg-[#f2f2f2] p-6 sm:p-8">
              <h3 className="text-[17px] font-bold text-[#204060] mb-3">Your Shopping Cart</h3>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-[14px] text-gray-600 mb-4">Your cart is empty</p>
                  <Link href="/" className="text-[#2b6eb5] hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  {/* Success Alert */}
                  <div className="bg-[#f4efe8] border border-[#8cc63f] p-[6px] pl-[8px] flex items-center mb-6">
                    <div className="bg-[#8cc63f] text-white text-[10px] font-bold px-1.5 py-[1px] flex items-center justify-center mr-2 rounded-[1px]">
                      ✓
                    </div>
                    <div className="text-[12px]">
                      <span className="text-black">Items in cart</span>
                    </div>
                  </div>

                  {/* Header Row */}
                  <div className="flex justify-between items-end border-b border-[#dddddd] pb-2 mb-2 text-[11px] text-[#4d4d4d]">
                    <div>Items total: {cartItems.length}</div>
                    <div className="font-bold">${totalPrice.toFixed(2)}</div>
                  </div>

                  {/* CART ITEMS */}
                  {cartItems.map(item => (
                    <div key={item.id} className="flex flex-col sm:flex-row justify-between border-b border-[#dddddd] py-5">
                      {/* Left: Image + Details */}
                      <div className="flex gap-4 sm:gap-6 flex-1 pr-4">
                        {/* Thumbnail */}
                        <div className="w-[90px] h-[90px] bg-white border border-[#e2e2e2] flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                          <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col">
                          <a href={`/product/${item.id}`} className="text-[14px] text-[#2b6eb5] font-semibold hover:underline leading-snug mb-1">
                            {item.name}
                          </a>
                          <p className="text-[11px] text-[#111] font-medium leading-relaxed max-w-[360px] pt-1">
                            {item.specs}
                          </p>
                        </div>
                      </div>

                      {/* Right: Quantity, Delivery, Price, Links */}
                      <div className="flex flex-col items-end w-[280px] shrink-0 mt-4 sm:mt-0">
                        <div className="flex justify-between w-full items-start">
                          <div className="flex flex-col items-end pr-8 flex-1">
                            <div className="flex items-center gap-1 mb-1 text-[11px] text-[#222]">
                              <span>Quantity:</span>
                              <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                className="border border-[#a9a9a9] h-[20px] px-1 text-[11px] bg-gradient-to-b from-white to-[#f0f0f0] shadow-sm outline-none cursor-pointer"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                  <option key={n} value={n}>{n}</option>
                                ))}
                              </select>
                            </div>
                            <div className="text-[10px] text-[#555]">{item.delivery}</div>
                          </div>
                          <div className="text-[14px] font-bold text-black min-w-[50px] text-right mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>

                        <div className="mt-auto pt-10 text-[10px] items-center flex tracking-tight">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#2b6eb5] hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                          <span className="text-[#2b6eb5] mx-1.5">|</span>
                          <a href="#" className="text-[#2b6eb5] hover:underline">Edit Your Order</a>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* SUMMARY SECTION */}
                  <div className="mt-8 pt-8 border-t border-[#dddddd]">
                    <div className="flex justify-end mb-4">
                      <div className="w-full sm:w-[350px]">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#dddddd]">
                          <span className="text-[12px] font-bold text-black">SUBTOTAL:</span>
                          <span className="text-[14px] font-bold text-black">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[11px] text-gray-600">Shipping & Handling:</span>
                          <span className="text-[11px] text-gray-600">FREE</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t-2 border-[#dddddd]">
                          <span className="text-[14px] font-bold text-black">TOTAL:</span>
                          <span className="text-[18px] font-bold text-[#eb1b23]">${totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-end gap-4 mt-6">
                      <Link href="/" className="bg-gray-400 text-white px-6 py-2 rounded font-semibold text-[12px] hover:bg-gray-500 transition">
                        CONTINUE SHOPPING
                      </Link>
                      <Link href="/checkout" className="bg-[#eb1b23] text-white px-6 py-2 rounded font-semibold text-[12px] hover:bg-red-700 transition">
                        CHECKOUT
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
