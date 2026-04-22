import { products } from '../../../data/product';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  // URL se ID nikaal kar sahi product dhoondna
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-10 text-red-500 font-bold">Product Not Found!</div>;
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Products</Link>
      <div className="bg-white p-8 border rounded-xl shadow-sm">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-gray-700 mb-6">{product.description}</p>
        <div className="text-2xl font-black text-green-600">Price: Rs. {product.price}</div>
        <button className="mt-8 w-full bg-black text-white py-3 rounded-lg font-bold">Buy Now</button>
      </div>
    </div>
  );
}