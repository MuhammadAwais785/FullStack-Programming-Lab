const express = require('express');
const app = express();
const port = 3001;

// Home Route
app.get('/home', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
        }
        
        h1 {
          color: #667eea;
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        p {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 40px;
        }
        
        .nav-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        a {
          display: inline-block;
          padding: 12px 30px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        a:hover {
          background: #764ba2;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🏠 Welcome Home</h1>
        <p>This is the Home Page</p>
        <div class="nav-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

// About Route
app.get('/about', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
        }
        
        h1 {
          color: #f5576c;
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        p {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        
        .nav-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        a {
          display: inline-block;
          padding: 12px 30px;
          background: #f5576c;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        a:hover {
          background: #f093fb;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>ℹ️ About Us</h1>
        <p>This is the About Page. Learn more about our services and what we do.</p>
        <div class="nav-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

// Contact Route
app.get('/contact', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
        }
        
        h1 {
          color: #00f2fe;
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        p {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        
        .contact-info {
          margin-top: 30px;
          margin-bottom: 40px;
        }
        
        .info-item {
          margin: 10px 0;
          color: #555;
        }
        
        .nav-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        a {
          display: inline-block;
          padding: 12px 30px;
          background: #00f2fe;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        a:hover {
          background: #4facfe;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📞 Contact Us</h1>
        <p>This is the Contact Page. Get in touch with us!</p>
        <div class="contact-info">
          <div class="info-item">📧 Email: info@example.com</div>
          <div class="info-item">📱 Phone: +92 300 1234567</div>
          <div class="info-item">📍 Address: Karachi, Pakistan</div>
        </div>
        <div class="nav-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

// Root route - redirect to home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// 404 Handler
app.get('*', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 - Not Found</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
        }
        
        h1 {
          color: #ff6b6b;
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        p {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        
        a {
          display: inline-block;
          padding: 12px 30px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        a:hover {
          background: #764ba2;
          transform: translateY(-2px);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>❌ 404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/home">Go to Home</a>
      </div>
    </body>
    </html>
  `;
  res.status(404).send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`📍 Message Routes Server running at http://localhost:${port}`);
  console.log(`\n📂 Available Routes:`);
  console.log(`   ✓ /home    - Go to http://localhost:${port}/home`);
  console.log(`   ✓ /about   - Go to http://localhost:${port}/about`);
  console.log(`   ✓ /contact - Go to http://localhost:${port}/contact`);
  console.log(`   ✓ /        - Redirects to /home\n`);
});
