const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: 'Hot Tub Premium Deluxe',
    description: 'Luxury hot tub with 8 massage jets, LED lighting, and temperature control',
    price: 2499.99,
    category: 'hot-tubs',
    image: '/images/hot-tub-deluxe.jpg',
    stock: 5,
    rating: 4.8,
    reviews: 12
  },
  {
    name: 'Hot Tub Standard Series',
    description: 'Affordable hot tub with 4 massage jets and heating system',
    price: 1299.99,
    category: 'hot-tubs',
    image: '/images/hot-tub-standard.jpg',
    stock: 8,
    rating: 4.5,
    reviews: 8
  },
  {
    name: 'Spa Cover Pro',
    description: 'Durable cover to protect your hot tub from weather elements',
    price: 199.99,
    category: 'accessories',
    image: '/images/spa-cover.jpg',
    stock: 15,
    rating: 4.7,
    reviews: 5
  },
  {
    name: 'Water Treatment Kit',
    description: 'Complete chemical treatment kit for hot tub maintenance',
    price: 49.99,
    category: 'maintenance',
    image: '/images/water-treatment.jpg',
    stock: 20,
    rating: 4.6,
    reviews: 10
  },
  {
    name: 'Hot Tub Steps',
    description: 'Sturdy non-slip steps for easy hot tub access',
    price: 129.99,
    category: 'accessories',
    image: '/images/hot-tub-steps.jpg',
    stock: 12,
    rating: 4.4,
    reviews: 6
  },
  {
    name: 'Underwater Mood Lights',
    description: 'RGB LED lights to create ambiance in your hot tub',
    price: 79.99,
    category: 'accessories',
    image: '/images/mood-lights.jpg',
    stock: 18,
    rating: 4.9,
    reviews: 14
  },
  {
    name: 'Hot Tub Inflatable Pillow',
    description: 'Comfortable waterproof pillow for ultimate relaxation',
    price: 39.99,
    category: 'accessories',
    image: '/images/inflatable-pillow.jpg',
    stock: 25,
    rating: 4.6,
    reviews: 9
  },
  {
    name: 'Filter Cartridge Replacement',
    description: 'High-quality filter cartridge for all hot tub models',
    price: 59.99,
    category: 'maintenance',
    image: '/images/filter-cartridge.jpg',
    stock: 30,
    rating: 4.5,
    reviews: 7
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
    console.log('MongoDB connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`${createdProducts.length} products seeded successfully`);

    await mongoose.disconnect();
    console.log('Database disconnected');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
