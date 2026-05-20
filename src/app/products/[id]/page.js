'use client';

import { useState, use } from 'react'; // 1. 'use' hook import kiya

export default function ProductDetail({ params }) {
  // 2. params Promise ko unwrap kiya takay id mil sake
  const unwrappedParams = use(params);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: unwrappedParams.id, // Ab bina kisi error ke chalega
    name: 'Premium Wooden Furniture',
    price: '299.99',
    rating: 4.5,
    reviews: 120,
    image: '🪑',
    description:
      'This is a high-quality wooden furniture piece crafted with premium materials. Each item is handmade by skilled artisans to ensure the highest quality. The design combines functionality with aesthetic beauty, making it a perfect addition to any home.',
    features: [
      'Premium solid wood construction',
      'Handcrafted by skilled artisans',
      'Durable and long-lasting',
      'Easy to maintain',
      'Eco-friendly materials',
      'Lifetime warranty',
    ],
    inStock: true,
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    // container-custom ki jagah standard Tailwind classes use ki hain
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center text-9xl mb-6 border border-gray-200">
            {product.image}
          </div>
          <div className="flex space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center text-3xl cursor-pointer hover:border-orange-500 border-2 border-gray-200 transition-colors">
                {product.image}
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="text-yellow-400 text-lg">★★★★☆</div>
            <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-4xl font-bold text-orange-500 mb-2">£{product.price}</p>
            <p className="text-sm text-gray-600">VAT included</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-orange-500 mr-3">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            <span
              className={`inline-block px-4 py-2 rounded font-semibold ${
                product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-bold"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center py-2 border-l border-r border-gray-300 focus:outline-none"
                min="1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-bold"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Additional Actions */}
          <div className="flex space-x-4">
            <button className="flex-1 border border-gray-300 text-gray-800 hover:border-orange-500 font-semibold py-2 rounded transition-colors bg-white">
              ❤️ Add to Wishlist
            </button>
            <button className="flex-1 border border-gray-300 text-gray-800 hover:border-orange-500 font-semibold py-2 rounded transition-colors bg-white">
              📧 Share
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition bg-white">
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-5xl border-b border-gray-100">🪑</div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-gray-800">Similar Furniture Item</h3>
                <p className="text-orange-500 font-bold">£249.99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}