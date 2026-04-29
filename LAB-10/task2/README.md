# Task 2: Simple Message Routes System

## Project Description
This Express.js application demonstrates a simple message routes system with multiple routes that display different messages in the browser.

## Requirements Met ✓
- ✅ Uses Node.js + Express
- ✅ No database
- ✅ No Postman required
- ✅ Output shown in browser
- ✅ Multiple GET routes: /home, /about, /contact
- ✅ Each route displays a unique message
- ✅ Styled HTML output

## Routes

| Route | Message | Color Theme |
|-------|---------|-------------|
| `/` | Redirects to /home | - |
| `/home` | Welcome Home | Purple |
| `/about` | About Us | Pink/Red |
| `/contact` | Contact Us | Cyan |

## Installation

1. Navigate to task2 folder:
```bash
cd LAB-10/task2
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

The server will start on `http://localhost:3001`

## Testing the Routes

Open your browser and visit:

- **Home:** `http://localhost:3001/home` - Shows "Welcome Home"
- **About:** `http://localhost:3001/about` - Shows "About Us"
- **Contact:** `http://localhost:3001/contact` - Shows "Contact Us"
- **Root:** `http://localhost:3001/` - Redirects to /home

## Features

- ✨ Four different message routes
- 🎨 Each route has unique gradient background color
- 🔗 Navigation links on each page
- 📱 Responsive design
- 🚀 Clean, modern UI
- 404 error handling for invalid routes

## Technologies Used
- Node.js
- Express.js
- HTML/CSS

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the server.

## Notes
- Port: 3001 (different from task1 which uses port 3000)
- All routes are GET requests
- HTML is generated server-side using template strings
