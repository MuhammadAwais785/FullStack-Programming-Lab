'use client';

import Link from 'next/link';

export default function Dashboard() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2024-01-15',
  };

  const recentOrders = [
    { id: 1, date: '2024-05-10', total: '£369.98', status: 'Delivered' },
    { id: 2, date: '2024-04-20', total: '£189.99', status: 'Delivered' },
    { id: 3, date: '2024-03-15', total: '£499.99', status: 'Processing' },
  ];

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Menu */}
        <div className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <Link href="/dashboard">
              <button className="w-full text-left px-4 py-2 rounded bg-orange-500 text-white font-semibold">
                Dashboard
              </button>
            </Link>
            <Link href="/dashboard/orders">
              <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition">
                My Orders
              </button>
            </Link>
            <Link href="/dashboard/products">
              <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition">
                Wishlist
              </button>
            </Link>
            <Link href="#account-settings">
              <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition">
                Account Settings
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="w-full text-left px-4 py-2 rounded hover:bg-red-50 text-red-600 transition">
                Logout
              </button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, {user.name}!</h2>
            <p className="text-gray-600">Member since {new Date(user.joinDate).toLocaleDateString()}</p>
          </div>

          {/* Account Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Account Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm">Full Name</label>
                <p className="font-semibold text-gray-800">{user.name}</p>
              </div>
              <div>
                <label className="text-gray-600 text-sm">Email Address</label>
                <p className="font-semibold text-gray-800">{user.email}</p>
              </div>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Recent Orders</h3>
            {recentOrders.length === 0 ? (
              <p className="text-gray-600">No orders yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Order ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Total</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">#{order.id}</td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4 font-semibold">{order.total}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded text-sm font-semibold ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
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

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/shop">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded transition">
                  Continue Shopping
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full border border-gray-300 text-gray-800 hover:border-orange-500 py-3 rounded transition">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
