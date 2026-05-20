'use client';

export default function BuyOnline() {
  return (
    <section className="bg-yellow-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h3 className="text-5xl font-bold text-green-600 mb-3 uppercase tracking-wide">BUY ONLINE</h3>
            <p className="text-gray-800 font-bold text-2xl uppercase tracking-wider">PICK UP IN STORE</p>
          </div>

          {/* Right side */}
          <div className="text-right">
            <p className="text-gray-800 font-semibold mb-3 uppercase">NOW AVAILABLE IN OUR STORE SYSTEM</p>
            <p className="text-sm text-gray-700 mb-6 uppercase font-semibold">AVAILABLE ON SELECT PRODUCTS</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wide transition duration-300 shadow-lg">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
