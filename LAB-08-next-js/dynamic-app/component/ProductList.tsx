import Link from 'next/link';
import { products } from '../data/product';

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-gray-600 my-2">{product.description}</p>
          <p className="text-blue-600 font-semibold">Rs. {product.price}</p>
          <Link href={`/product/${product.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}