# Task 3: Dynamic User Page

## Project Description
This Express.js application demonstrates dynamic route parameters using `/user/:name` route. The server displays personalized greetings based on the URL parameter.

## Requirements Met ✓
- ✅ Uses Node.js + Express
- ✅ No database
- ✅ No Postman required
- ✅ Output shown in browser
- ✅ Dynamic route with parameter: /user/:name
- ✅ Displays name from URL parameter
- ✅ Example: /user/Ali → "Hello Ali"

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with instructions |
| `/user/:name` | Dynamic user page with personalized greeting |
| `/user/Ali` | Example: Shows "Hello Ali" |
| `/user/Fatima` | Example: Shows "Hello Fatima" |
| Any other `/user/[name]` | Shows personalized greeting for that name |

## Installation

1. Navigate to task3 folder:
```bash
cd LAB-10/task3
```

2. Install dependencies:
```bash
npm install
```

## Running the Server

Start the server:
```bash
npm start
```

The server will start on `http://localhost:3002`

## Testing the Routes

Open your browser and visit:

**Examples:**
- `http://localhost:3002/user/Ali` - Shows "Hello Ali!"
- `http://localhost:3002/user/Fatima` - Shows "Hello Fatima!"
- `http://localhost:3002/user/Muhammad` - Shows "Hello Muhammad!"
- `http://localhost:3002/user/Ayesha` - Shows "Hello Ayesha!"
- `http://localhost:3002/user/[your-name]` - Shows personalized greeting

**Try visiting:**
- `http://localhost:3002/` - Home page with links to examples
- `http://localhost:3002/user/Ahmed` - Any name works!

## Features

- 🎯 Dynamic route parameters using `:name`
- 📝 Personalized greetings based on URL
- 🎨 Beautiful gradient UI design
- 🔗 Quick links to test different names
- 📱 Responsive design
- 404 error handling
- Name capitalization

## How Route Parameters Work

```javascript
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  // userName contains the value from URL
  // /user/Ali → userName = "Ali"
  // /user/Fatima → userName = "Fatima"
});
```

## Technologies Used
- Node.js
- Express.js
- HTML/CSS
- Route Parameters (Dynamic Routing)

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the server.

## Notes
- Port: 3002 (different from Task 1 and Task 2)
- Route parameter `:name` captures the name from the URL
- Names are automatically capitalized for display
- Any name can be passed as a URL parameter

## Learning Concepts

This task demonstrates:
- Dynamic route parameters in Express
- Accessing URL parameters with `req.params`
- String manipulation (name capitalization)
- HTTP GET requests
- Server-side HTML generation based on parameters
