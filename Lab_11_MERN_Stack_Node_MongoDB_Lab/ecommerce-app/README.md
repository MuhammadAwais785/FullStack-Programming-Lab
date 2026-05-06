# Spa Oasis - MERN Stack Ecommerce Application

A full-stack ecommerce application built with Next.js, Node.js, Express.js, and MongoDB.

## Project Structure

```
ecommerce-app/
├── backend/          # Express.js server and MongoDB models
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   ├── server.js     # Main server file
│   ├── seed.js       # Database seeding script
│   ├── package.json
│   └── .env
└── frontend/         # Next.js application
    ├── src/
    │   ├── app/      # App router pages
    │   └── components/
    ├── package.json
    └── .env.local
```

## Features

### Backend (Express.js + MongoDB)
- RESTful API for product management
- MongoDB integration with Mongoose
- Product CRUD operations (Create, Read, Update, Delete)
- Category filtering
- Seed script for sample data

### Frontend (Next.js + Tailwind CSS)
- Responsive product catalog
- Category filtering
- Product cards with ratings and reviews
- Stock availability tracking
- Client-side data fetching

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Installation & Setup

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create `.env` file with MongoDB connection:
```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

Seed the database with sample products:
```bash
npm run seed
```

Or directly execute:
```bash
node seed.js
```

Start the backend server:
```bash
npm run dev
# or
npm start
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

Navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Products

#### Get all products
```
GET /api/products
```

#### Get product by ID
```
GET /api/products/:id
```

#### Get products by category
```
GET /api/products/category/:category
```

#### Create product (POST)
```
POST /api/products
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "hot-tubs",
  "image": "/images/product.jpg",
  "stock": 10,
  "rating": 4.5,
  "reviews": 5
}
```

#### Update product (PUT)
```
PUT /api/products/:id
Content-Type: application/json

{
  "price": 89.99,
  "stock": 8
}
```

#### Delete product (DELETE)
```
DELETE /api/products/:id
```

## Database Schema

### Product Schema
```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String (required),
  price: Number (required, min: 0),
  category: String (required),
  image: String (default: '/images/default-product.jpg'),
  stock: Number (default: 0, min: 0),
  rating: Number (default: 0, max: 5),
  reviews: Number (default: 0),
  createdAt: Date (default: now),
  updatedAt: Date (default: now)
}
```

## Product Categories

- `hot-tubs` - Main hot tub products
- `accessories` - Hot tub accessories (covers, steps, pillows, lights)
- `maintenance` - Maintenance and treatment products

## Technology Stack

### Backend
- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **Nodemon** - Development auto-reload

### Frontend
- **Next.js 16** - React framework
- **Tailwind CSS** - Utility-first CSS
- **React 19** - UI library

## Running the Full Application

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open browser:** Visit `http://localhost:3000`

## Development Tips

- Backend runs on port 5000 (configurable via `.env`)
- Frontend runs on port 3000 (default Next.js port)
- Make sure MongoDB is running before starting the backend
- Use sample data from `seed.js` to populate the database
- CORS is enabled for localhost:3000 by default
- API endpoint can be configured via `NEXT_PUBLIC_API_URL` in frontend

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- Verify database name in URI

### API Not Responding
- Check if backend is running on port 5000
- Verify CORS settings in backend
- Check `NEXT_PUBLIC_API_URL` in frontend `.env.local`

### Frontend Can't Connect to Backend
- Ensure backend is running first
- Check if both using correct ports
- Verify no firewall blocking localhost connections

## Future Enhancements

- User authentication and authorization
- Shopping cart functionality
- Order management
- Payment integration
- Product search and filters
- User reviews and ratings
- Admin dashboard
- Email notifications
