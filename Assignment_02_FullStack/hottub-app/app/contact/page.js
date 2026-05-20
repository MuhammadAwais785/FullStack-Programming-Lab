'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          <div className="w-full bg-white pt-7 px-8 pb-10 shadow-sm">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px] flex items-center gap-1 font-semibold text-gray-500">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="text-black text-[9px] mb-[1px] font-bold">&gt;</span>
              <span className="text-black font-semibold">Contact Us</span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-bold text-black mb-4 tracking-tight">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-[18px] font-bold text-gray-800 mb-4">Get in Touch</h3>
                
                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-gray-700 mb-2">Phone</h4>
                  <p className="text-[14px] text-gray-600">Call us 24/7: 020 38080565</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-gray-700 mb-2">Email</h4>
                  <p className="text-[14px] text-gray-600">serviceemail@hottubsuperstore.com</p>
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-gray-700 mb-2">Address</h4>
                  <p className="text-[14px] text-gray-600">
                    HotSpring Superstore<br />
                    123 Spa Street<br />
                    Wellness City, WC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-[18px] font-bold text-gray-800 mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-3 py-2 text-[12px] focus:outline-none focus:border-[#eb1b23]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-3 py-2 text-[12px] focus:outline-none focus:border-[#eb1b23]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-3 py-2 text-[12px] focus:outline-none focus:border-[#eb1b23]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full border border-gray-300 px-3 py-2 text-[12px] focus:outline-none focus:border-[#eb1b23]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#eb1b23] text-white px-6 py-2 rounded font-bold text-[12px] hover:bg-red-700 transition"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
