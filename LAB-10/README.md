# Task 1: Student List Display (GET Only)

## Project Description
This is a simple Express.js server that displays a list of students in the browser using HTML `<li>` elements.

## Requirements Met ✓
- ✅ Uses only Node.js + Express
- ✅ No database used
- ✅ No Postman required
- ✅ Output shown in browser
- ✅ GET endpoint only
- ✅ Student data stored in array
- ✅ Students displayed using HTML `<li>` tags

## File Structure
```
LAB-10/
├── package.json       # npm dependencies and scripts
├── server.js          # Express server with student data
└── README.md           # This file
```

## Installation

1. Navigate to the LAB-10 directory:
```bash
cd LAB-10
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

Or:
```bash
node server.js
```

The server will start on `http://localhost:3000`

## Features

- **GET Route (/)**: Returns an HTML page displaying all students
- **Student Data**: 8 sample students with ID, Name, Email, and Grade information
- **Responsive Design**: Clean, modern UI with gradient background
- **Hover Effects**: Interactive student list items with smooth animations
- **Console Output**: Shows server running confirmation and student count

## Sample Student Data

The server includes 8 students with the following information:
- Student ID
- Name
- Email
- Grade (A+, A, B+, B)

## Accessing the Application

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

You will see a styled list of all students with their information displayed as HTML list items (`<li>`).

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running.

## Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **HTML/CSS**: Frontend rendering

## Notes
- This project uses only GET requests
- No database is used; data is stored in a JavaScript array
- The HTML is generated on the server side using a template string
- The page includes CSS styling for an enhanced user experience
