'use client';

import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
    alert('Order placed successfully! Thank you for your purchase.');
  };

  const subtotal = 369.98;
  const tax = 73.99;
  const shipping = 9.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">Secure Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Billing Address Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Billing Address</h2>

              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-4">
                <label className="block font-semibold text-gray-800 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Phone */}
              <div className="mt-4">
                <label className="block font-semibold text-gray-800 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Address */}
              <div className="mt-4">
                <label className="block font-semibold text-gray-800 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Payment Information</h2>

              {/* Card Number */}
              <div>
                <label className="block font-semibold text-gray-800 mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  maxLength="19"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                    maxLength="5"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-800 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cardCVV"
                    value={formData.cardCVV}
                    onChange={handleChange}
                    placeholder="123"
                    required
                    maxLength="4"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded text-lg transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          {/* Products */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Wooden Chair × 2</span>
              <span>£269.98</span>
            </div>
            <div className="flex justify-between">
              <span>Modern Table × 1</span>
              <span>£100.00</span>
            </div>
          </div>

          {/* Totals */}
          <div className="border-t border-gray-300 pt-4 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>£{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>£{shipping.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-300 pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-orange-500">£{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Security Info */}
          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="text-xs text-gray-600 text-center">🔒 Your payment is secure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
