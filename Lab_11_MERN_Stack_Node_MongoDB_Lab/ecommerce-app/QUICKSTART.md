# Quick Start Guide

## Commands to Run the Application

### Prerequisites Check
```bash
# Verify Node.js installation
node --version
npm --version

# Verify MongoDB is running
# On Linux/Mac:
brew services list | grep mongodb
# Or check if MongoDB process is running:
ps aux | grep mongod
```

## Backend Setup & Start

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Seed the database (optional, adds sample data)
node seed.js

# Start development server with auto-reload
npm run dev

# Or start production server
npm start
```

Backend will be available at: `http://localhost:5000`

## Frontend Setup & Start

```bash
# Navigate to frontend (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at: `http://localhost:3000`

## Testing the API

### Using curl or Postman

```bash
# Get all products
curl http://localhost:5000/api/products

# Get products by category
curl http://localhost:5000/api/products/category/hot-tubs

# Get single product
curl http://localhost:5000/api/products/{productId}

# Check server health
curl http://localhost:5000/api/health
```

## Database Management

```bash
# Connect to MongoDB CLI
mongosh

# Show all databases
show dbs

# Use ecommerce database
use ecommerce

# Show collections
show collections

# View all products
db.products.find()

# View product count
db.products.countDocuments()

# Clear all products
db.products.deleteMany({})
```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Common Issues & Solutions

1. **MongoDB Connection Refused**
   - Start MongoDB: `brew services start mongodb-community` (on Mac)
   - Or: `sudo systemctl start mongodb` (on Linux)

2. **Port Already in Use**
   - Backend: `lsof -i :5000` and kill process
   - Frontend: `lsof -i :3000` and kill process

3. **CORS Error**
   - Check CORS_ORIGIN in backend .env matches frontend URL
   - Ensure backend is running

4. **Module Not Found**
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`
   - Clear npm cache: `npm cache clean --force`

## Project Structure Quick Reference

```
backend/
├── models/
│   └── Product.js      # MongoDB Product schema
├── routes/
│   └── products.js     # API endpoints
├── server.js           # Express app
├── seed.js             # Database seeding
├── package.json
├── .env
└── .gitignore

frontend/
├── src/
│   ├── app/
│   │   ├── page.js     # Home page
│   │   ├── layout.js   # Root layout
│   │   └── globals.css # Global styles
│   └── components/
│       ├── ProductCard.js    # Product display card
│       └── ProductList.js    # Products grid
├── package.json
├── .env.local
└── tailwind.config.js
```
