'use client';

export default function About() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Rustik Plank</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p>
              Welcome to Rustik Plank, your premier destination for handcrafted, high-quality furniture. For over a decade, we've been
              dedicated to bringing authentic, rustic elegance into homes across the country. Each piece in our collection tells a story
              of craftsmanship and tradition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p>
              Our mission is to provide our customers with furniture that combines timeless design, exceptional quality, and
              environmental responsibility. We believe that furniture should be an investment in comfort and style that lasts a lifetime.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">✓</span>
                <span>Handcrafted furniture made with premium materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">✓</span>
                <span>Sustainable and eco-friendly production practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">✓</span>
                <span>Expert customer service and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">✓</span>
                <span>Competitive pricing without compromising quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">✓</span>
                <span>Reliable delivery and installation services</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">✓</span>
                <span>Lifetime warranty on select pieces</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
            <p>
              We're committed to sustainable practices, ethical sourcing, and creating furniture that stands the test of time. Every
              piece is designed with you in mind, combining functionality with aesthetic beauty.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
