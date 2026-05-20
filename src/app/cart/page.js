'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wooden Chair',
      price: 134.99,
      quantity: 2,
      image: '🪑',
    },
    {
      id: 2,
      name: 'Modern Table',
      price: 234.99,
      quantity: 1,
      image: '📦',
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.2; // 20% tax
  const total = subtotal + tax;

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
          <Link href="/shop">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-6 bg-gray-100 font-bold text-gray-800">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Action</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-5 gap-4 p-6 border-t border-gray-200 items-center">
                  {/* Product */}
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{item.image}</div>
                    <span className="font-semibold">{item.name}</span>
                  </div>

                  {/* Price */}
                  <div>£{item.price.toFixed(2)}</div>

                  {/* Quantity */}
                  <div className="flex items-center border border-gray-300 rounded w-fit">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-12 text-center py-1 border-l border-r border-gray-300"
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <div className="font-semibold">£{(item.price * item.quantity).toFixed(2)}</div>

                  {/* Action */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link href="/shop">
                <button className="text-orange-500 hover:text-orange-600 font-semibold">
                  ← Continue Shopping
                </button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (20%):</span>
                <span>£{tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-orange-500">£{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition">
                Proceed to Checkout
              </button>
            </Link>

            {/* Additional Info */}
            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <p>✓ Free shipping on orders over £50</p>
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Secure checkout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
