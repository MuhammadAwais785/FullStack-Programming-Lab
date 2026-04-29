const express = require('express');
const app = express();
const port = 3002;

// Root route - returns full HTML page
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple HTML Page</title>
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
          padding: 40px 20px;
        }
        
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          padding: 50px;
        }
        
        h1 {
          color: #667eea;
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .divider {
          height: 3px;
          background: linear-gradient(to right, #667eea, #764ba2);
          margin: 20px 0 30px 0;
          border-radius: 2px;
        }
        
        p {
          color: #555;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
          text-align: justify;
        }
        
        h2 {
          color: #764ba2;
          font-size: 1.5rem;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        
        ul {
          list-style: none;
          margin-left: 0;
        }
        
        li {
          padding: 12px 15px;
          margin-bottom: 10px;
          background: #f8f9fa;
          border-left: 4px solid #667eea;
          border-radius: 5px;
          transition: all 0.3s ease;
          color: #555;
          font-size: 1rem;
        }
        
        li:hover {
          background: #f0f4ff;
          padding-left: 20px;
          box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
        }
        
        li:before {
          content: "✓ ";
          color: #667eea;
          font-weight: bold;
          margin-right: 8px;
        }
        
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #eee;
          color: #999;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📄 Welcome to Our Page</h1>
        <div class="divider"></div>
        
        <p>
          This is a simple HTML page rendered using Express.js. The page includes a title, 
          a descriptive paragraph, and a list of items. You can extend this template to 
          add more content, styles, and interactivity as needed. This demonstrates how 
          Express can serve complete HTML pages to the browser.
        </p>
        
        <h2>📋 Features List</h2>
        <ul>
          <li>Simple and Clean Design</li>
          <li>Responsive Layout</li>
          <li>Beautiful Gradient Background</li>
          <li>Smooth Hover Effects</li>
          <li>Server-Side HTML Rendering</li>
          <li>Easy to Customize</li>
          <li>Works on All Browsers</li>
          <li>Cross-Platform Compatible</li>
        </ul>
        
        <div class="footer">
          <p>✨ Powered by Express.js | Node.js Server ✨</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
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
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
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
        <a href="/">Go to Home</a>
      </div>
    </body>
    </html>
  `;
  res.status(404).send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`🌐 HTML Page Renderer Server running at http://localhost:${port}`);
  console.log(`\n📂 Available Routes:`);
  console.log(`   ✓ /  - Go to http://localhost:${port}/\n`);
});
