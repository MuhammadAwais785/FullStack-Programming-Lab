'use client';

export default function LatestUpdates() {
  const updates = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      image: '🛋️',
      description: 'This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      image: '🛏️',
      description: 'This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      image: '🪑',
      description: 'This is Photoshop version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Latest Updates</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {updates.map((update) => (
          <div
            key={update.id}
            className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-7xl">
              {update.image}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-3">{update.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{update.description}</p>
              <button className="text-gray-800 hover:text-orange-500 font-bold text-sm uppercase tracking-wider transition duration-300">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
