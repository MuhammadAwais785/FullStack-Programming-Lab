'use client';

export default function HotDeal() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Hot Deal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Elite Collection - Left */}
        <div className="relative bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-50 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-80 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/20"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 w-full">
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-2">Elite Collection</p>
            <h3 className="text-white text-3xl font-bold mb-4">Living Room Furniture</h3>
            <div className="text-white">
              <p className="text-7xl font-bold text-orange-400 leading-none">35%</p>
              <p className="text-sm font-semibold mt-2">OFF</p>
            </div>
          </div>

          {/* Furniture icon */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            🛋️
          </div>
        </div>

        {/* Reclaimed Collection - Right */}
        <div className="relative bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-80 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 w-full">
            <h3 className="text-gray-800 text-4xl font-bold mb-2">Reclaimed and Hand Crafted</h3>
            <p className="text-gray-700 text-sm font-semibold mb-6">Premium collection</p>
            
            <div className="flex items-end gap-6">
              <div>
                <p className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">Sale OFF</p>
                <p className="text-6xl font-bold text-gray-800 leading-none">50%</p>
              </div>
              <div className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 mb-4">
                🪑
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
