const express = require('express');
const app = express();
const port = 3002;

// Dynamic User Route with parameter
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  
  // Capitalize first letter
  const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User - ${displayName}</title>
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
          padding: 20px;
        }
        
        .container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          padding: 80px 50px;
          text-align: center;
          max-width: 700px;
        }
        
        h1 {
          color: #667eea;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        
        .greeting {
          font-size: 3.5rem;
          color: #764ba2;
          font-weight: 700;
          margin-bottom: 30px;
        }
        
        .user-info {
          background: #f5f7fa;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
        }
        
        .info-item {
          margin: 15px 0;
          font-size: 1.1rem;
          color: #555;
        }
        
        .label {
          font-weight: 600;
          color: #667eea;
        }
        
        .user-name {
          font-size: 1.5rem;
          color: #764ba2;
          font-weight: 700;
        }
        
        .action-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
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
        
        .url-info {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          color: #999;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>👋 User Profile</h1>
        <div class="greeting">Hello ${displayName}!</div>
        
        <div class="user-info">
          <div class="info-item">
            <span class="label">Username:</span>
            <div class="user-name">${displayName}</div>
          </div>
          <div class="info-item">
            <span class="label">User ID:</span>
            <span>user_${userName.toLowerCase()}</span>
          </div>
          <div class="info-item">
            <span class="label">Status:</span>
            <span>✅ Active</span>
          </div>
        </div>
        
        <div class="action-links">
          <a href="/user/Ali">Try Ali</a>
          <a href="/user/Fatima">Try Fatima</a>
          <a href="/user/Muhammad">Try Muhammad</a>
          <a href="/user/Ayesha">Try Ayesha</a>
        </div>
        
        <div class="url-info">
          <p>📍 URL: /user/${userName}</p>
          <p>Try changing the name in the URL to see different greetings!</p>
          <p>Example: /user/yourname</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

// Root route
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dynamic User Page</title>
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
          padding: 20px;
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
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        
        p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .examples {
          background: #f5f7fa;
          padding: 20px;
          border-radius: 10px;
          margin: 30px 0;
          text-align: left;
        }
        
        .example-title {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 10px;
        }
        
        .example-item {
          color: #555;
          margin: 10px 0;
          font-family: monospace;
          background: white;
          padding: 10px;
          border-radius: 5px;
        }
        
        .action-links {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
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
        <h1>🔗 Dynamic User Page</h1>
        <p>This page demonstrates dynamic route parameters in Express.js</p>
        
        <div class="examples">
          <div class="example-title">📝 Available Routes:</div>
          <div class="example-item">/user/Ali</div>
          <div class="example-item">/user/Fatima</div>
          <div class="example-item">/user/Muhammad</div>
          <div class="example-item">/user/[any-name]</div>
        </div>
        
        <div class="action-links">
          <a href="/user/Ali">Visit Ali</a>
          <a href="/user/Fatima">Visit Fatima</a>
          <a href="/user/Muhammad">Visit Muhammad</a>
          <a href="/user/Ayesha">Visit Ayesha</a>
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
      <title>404</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
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
          font-size: 1.1rem;
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
        <p>Use <code>/user/[name]</code> route instead</p>
        <a href="/">Go to Home</a>
      </div>
    </body>
    </html>
  `;
  res.status(404).send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`\n📍 Dynamic User Page Server running at http://localhost:${port}`);
  console.log(`\n📂 Available Routes:`);
  console.log(`   ✓ /              - Home page with instructions`);
  console.log(`   ✓ /user/:name    - Dynamic user page`);
  console.log(`\n📋 Examples:`);
  console.log(`   • http://localhost:${port}/user/Ali`);
  console.log(`   • http://localhost:${port}/user/Fatima`);
  console.log(`   • http://localhost:${port}/user/Muhammad`);
  console.log(`   • http://localhost:${port}/user/[your-name]\n`);
});
