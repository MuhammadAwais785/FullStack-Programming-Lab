'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    console.log('Registration attempted:', formData);
    alert('Registration feature coming soon!');
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Create New Account</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg">
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
              placeholder="John"
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
              placeholder="Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
              placeholder="••••••••"
            />
            <p className="text-xs text-gray-600 mt-1">Minimum 6 characters</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
              placeholder="••••••••"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
              className="w-4 h-4 text-orange-500 rounded mt-1"
            />
            <label htmlFor="agreeTerms" className="ml-2 text-gray-700 text-sm">
              I agree to the{' '}
              <Link href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-orange-500 hover:text-orange-600 font-semibold">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
