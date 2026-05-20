'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Account created:', formData);
      alert('Account created successfully!');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          {/* WHITE FORM CONTAINER */}
          <div className="w-full bg-white pt-6 px-8 pb-10 shadow-sm min-h-[500px]">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px]">
              <Link href="/" className="text-[#2f78c4] hover:underline">Home</Link>
              <span className="text-black mx-[2px]">»</span>
              <span className="text-black">Register</span>
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-bold text-gray-800 mb-4 tracking-tight pl-[2px]">
              Create New Account
            </h2>

            {/* Gray inner box */}
            <div className="bg-[#f3f3f3] py-6 px-6 sm:px-10 border-t border-[#e2e2e2]">
              {/* Sub Title */}
              <h3 className="text-[13px] font-bold text-gray-800 mb-4 pb-2 border-b border-[#e2e2e2]">
                User Account Details
              </h3>

              <div className="mb-5">
                <p className="text-[11px] text-black mb-3 tracking-normal">
                  To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long.
                </p>
                <p className="text-[11px] text-black tracking-normal">
                  <span className="text-[#eb1b23]">*</span>Required Fields
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full max-w-[500px] ml-0 md:ml-4">
                <div className="flex flex-col gap-[12px]">
                  {/* Email Address */}
                  <div className="flex items-center">
                    <label className="w-[130px] text-[11px] font-normal text-black text-right pr-4">
                      Email Address <span className="text-[#eb1b23]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-[280px] border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="flex items-center">
                    <label className="w-[130px] text-[11px] font-normal text-black text-right pr-4">
                      Password <span className="text-[#eb1b23]">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-[280px] border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      required
                    />
                  </div>

                  {/* Re-enter Password */}
                  <div className="flex items-center">
                    <label className="w-[130px] text-[11px] font-normal text-black text-right pr-4">
                      Re-enter Password <span className="text-[#eb1b23]">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-[280px] border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      required
                    />
                  </div>

                  {/* First Name */}
                  <div className="flex items-center">
                    <label className="w-[130px] text-[11px] font-normal text-black text-right pr-4">
                      First Name <span className="text-[#eb1b23]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-[280px] border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex items-center">
                    <label className="w-[130px] text-[11px] font-normal text-black text-right pr-4">
                      Last Name <span className="text-[#eb1b23]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-[280px] border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      required
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2 mt-6 ml-[134px]">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-[1px] cursor-pointer accent-[#eb1b23]"
                  />
                  <label htmlFor="newsletter" className="text-[11px] text-black cursor-pointer pt-[1px]">
                    Yes, I want to receive email about new products and specials!
                  </label>
                </div>

                {/* Buttons Group */}
                <div className="flex items-center gap-4 mt-5 ml-[134px]">
                  <button
                    type="submit"
                    className="bg-[#eb1b23] text-white font-bold px-[18px] py-[7px] text-[11px] hover:bg-red-700 transition-colors"
                  >
                    CREATE ACCOUNT
                  </button>
                  <Link href="/forgot-password" className="text-[11px] text-[#2f78c4] hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* BRANDS SECTION */}
          <div className="w-full bg-white border border-[#e2e2e2] mt-8 py-4 px-8 flex justify-center gap-12 items-center shadow-sm flex-wrap">
            <img
              src="/huge discounts.PNG"
              alt="Huge Discounts"
              className="h-24 md:h-28 object-contain mix-blend-multiply"
            />
            <img
              src="/ocieanic spa.PNG"
              alt="Oceanic Spa"
              className="h-16 md:h-20 object-contain mix-blend-multiply"
            />
            <img
              src="/caldera spas.PNG"
              alt="Caldera Spas"
              className="h-14 md:h-16 object-contain mix-blend-multiply"
            />
            <img
              src="/Island spas.PNG"
              alt="Island Spas"
              className="h-16 md:h-20 object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
