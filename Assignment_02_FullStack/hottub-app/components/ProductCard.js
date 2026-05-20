'use client';

export default function ProductCard({ image, title, description, price, id }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="bg-white p-4 flex items-center justify-center min-h-56">
        <img src={image} alt={title} className="w-full h-56 object-cover object-top" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-xs text-gray-600 mb-3">{description}</p>
        <div className="mb-3">
          <span className="text-lg font-bold text-red-600">${price}</span>
        </div>
        <button className="w-full bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-red-700 transition mb-2">
          ADD TO CART
        </button>
        <div className="flex gap-3 text-xs">
          <a href="#" className="text-gray-600 hover:text-red-600">
            ADD TO WISH LIST
          </a>
          <a href={`/product/${id}`} className="text-red-600 hover:text-red-700 font-semibold">
            MORE DETAILS
          </a>
        </div>
      </div>
    </div>
  );
}
