'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const [orderData, setOrderData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', orderData);
    alert('Order placed successfully!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          {/* WHITE CONTAINER */}
          <div className="w-full bg-white pt-7 px-8 pb-10 shadow-sm">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px] flex items-center gap-1 font-semibold text-gray-500">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="text-black text-[9px] mb-[1px] font-bold">&gt;</span>
              <span className="text-black font-semibold">Checkout</span>
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-bold text-black mb-4 tracking-tight pl-[2px]">Secure Checkout</h2>

            {/* Form Container */}
            <div className="bg-[#f0f0f0] pt-8 px-6 sm:px-10 pb-8">
              <form onSubmit={handleSubmit}>
                {/* STEP 1: BILLING ADDRESS */}
                <div className="mb-8">
                  <h3 className="text-[14px] font-bold text-[#eb1b23] mb-4 flex items-center">
                    <span className="text-[16px] mr-3">1</span>
                    <span>Billing Address</span>
                  </h3>

                  <div className="flex flex-col gap-4 max-w-[600px]">
                    <div className="flex items-center">
                      <label className="w-[120px] text-[11px] font-bold text-right pr-4">
                        Email <span className="text-[#eb1b23]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={orderData.email}
                        onChange={handleChange}
                        required
                        className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="w-[120px] text-[11px] font-bold text-right pr-4">
                        First Name <span className="text-[#eb1b23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={orderData.firstName}
                        onChange={handleChange}
                        required
                        className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="w-[120px] text-[11px] font-bold text-right pr-4">
                        Last Name <span className="text-[#eb1b23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={orderData.lastName}
                        onChange={handleChange}
                        required
                        className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="w-[120px] text-[11px] font-bold text-right pr-4">
                        Address <span className="text-[#eb1b23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={orderData.address}
                        onChange={handleChange}
                        required
                        className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex items-center flex-1">
                        <label className="w-[120px] text-[11px] font-bold text-right pr-4">
                          City <span className="text-[#eb1b23]">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={orderData.city}
                          onChange={handleChange}
                          required
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>

                      <div className="flex items-center w-[120px]">
                        <label className="text-[11px] font-bold text-right pr-2">State <span className="text-[#eb1b23]">*</span></label>
                        <input
                          type="text"
                          name="state"
                          value={orderData.state}
                          onChange={handleChange}
                          required
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>

                      <div className="flex items-center w-[140px]">
                        <label className="text-[11px] font-bold text-right pr-2">ZIP <span className="text-[#eb1b23]">*</span></label>
                        <input
                          type="text"
                          name="zipCode"
                          value={orderData.zipCode}
                          onChange={handleChange}
                          required
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* STEP 2: PAYMENT INFORMATION */}
                <div className="mb-8">
                  <h3 className="text-[14px] font-bold text-[#eb1b23] mb-4 flex items-center">
                    <span className="text-[16px] mr-3">2</span>
                    <span>Payment Information</span>
                  </h3>

                  <div className="flex flex-col gap-4 max-w-[600px]">
                    <div className="flex items-center">
                      <label className="w-[120px] text-[11px] font-bold text-right pr-4">
                        Card Number <span className="text-[#eb1b23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={orderData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex items-center flex-1">
                        <label className="text-[11px] font-bold text-right pr-4">
                          Expiry <span className="text-[#eb1b23]">*</span>
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={orderData.expiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>

                      <div className="flex items-center w-[120px]">
                        <label className="text-[11px] font-bold text-right pr-2">CVV <span className="text-[#eb1b23]">*</span></label>
                        <input
                          type="text"
                          name="cvv"
                          value={orderData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ORDER SUMMARY */}
                <div className="mb-8 border-t border-[#e2e2e2] pt-6">
                  <h3 className="text-[14px] font-bold text-[#204060] mb-4">Order Summary</h3>
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#e2e2e2]">
                    <span className="text-[12px] font-bold">Subtotal:</span>
                    <span className="text-[12px] font-bold">$21.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px]">Shipping:</span>
                    <span className="text-[11px]">FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t-2 border-[#e2e2e2]">
                    <span className="text-[14px] font-bold text-black">Total:</span>
                    <span className="text-[18px] font-bold text-[#eb1b23]">$21.00</span>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <Link href="/cart" className="bg-gray-400 text-white px-6 py-2 rounded font-semibold text-[12px] hover:bg-gray-500 transition">
                    BACK TO CART
                  </Link>
                  <button
                    type="submit"
                    className="bg-[#8cc63f] text-white px-8 py-2 rounded font-bold text-[12px] hover:bg-[#7ab530] transition"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
