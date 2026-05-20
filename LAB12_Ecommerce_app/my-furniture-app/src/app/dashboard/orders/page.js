'use client';

import Link from 'next/link';

export default function OrdersPage() {
  const orders = [
    { id: 1, date: '2024-05-10', total: '£369.98', status: 'Delivered', items: 3 },
    { id: 2, date: '2024-04-20', total: '£189.99', status: 'Delivered', items: 1 },
    { id: 3, date: '2024-03-15', total: '£499.99', status: 'Processing', items: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">You haven&apos;t placed any orders yet.</p>
          <Link href="/shop">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 font-bold text-gray-800">Order ID</th>
                <th className="text-left py-4 px-6 font-bold text-gray-800">Date</th>
                <th className="text-left py-4 px-6 font-bold text-gray-800">Items</th>
                <th className="text-left py-4 px-6 font-bold text-gray-800">Total</th>
                <th className="text-left py-4 px-6 font-bold text-gray-800">Status</th>
                <th className="text-left py-4 px-6 font-bold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">#{order.id}</td>
                  <td className="py-4 px-6">{order.date}</td>
                  <td className="py-4 px-6">{order.items}</td>
                  <td className="py-4 px-6 font-semibold text-orange-500">{order.total}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-4 py-2 rounded text-sm font-semibold ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link href={`/dashboard/orders/${order.id}`}>
                      <button className="text-orange-500 hover:text-orange-600 font-semibold">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
