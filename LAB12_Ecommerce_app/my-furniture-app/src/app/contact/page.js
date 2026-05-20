'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-700">📞 07504 031469</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-700">📧 info@rustikplank.com</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-gray-700">
              123 Furniture Street
              <br />
              London, UK
              <br />
              SW1A 1AA
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">Email</label>
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

            <div>
              <label className="block font-semibold text-gray-800 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Message Subject"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-800 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
