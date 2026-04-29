const express = require('express');
const app = express();
const port = 3000;

// Student data stored in an array
const students = [
  { id: 1, name: 'Ali Ahmed', email: 'ali@example.com', grade: 'A' },
  { id: 2, name: 'Fatima Khan', email: 'fatima@example.com', grade: 'A+' },
  { id: 3, name: 'Hassan Muhammad', email: 'hassan@example.com', grade: 'B' },
  { id: 4, name: 'Ayesha Malik', email: 'ayesha@example.com', grade: 'A' },
  { id: 5, name: 'Usman Raza', email: 'usman@example.com', grade: 'B+' },
  { id: 6, name: 'Zainab Ahmed', email: 'zainab@example.com', grade: 'A+' },
  { id: 7, name: 'Muhammad Bilal', email: 'bilal@example.com', grade: 'B' },
  { id: 8, name: 'Sarah Connor', email: 'sarah@example.com', grade: 'A' }
];

// GET route to display students
app.get('/', (req, res) => {
  const studentListHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student List</title>
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
          padding: 20px;
        }
        
        .container {
          max-width: 800px;
          margin: 40px auto;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          padding: 40px;
        }
        
        h1 {
          color: #333;
          text-align: center;
          margin-bottom: 10px;
          font-size: 2.5rem;
        }
        
        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }
        
        .student-count {
          background: #f0f0f0;
          padding: 10px 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          color: #555;
          font-weight: 600;
        }
        
        ul {
          list-style: none;
        }
        
        li {
          background: #f9f9f9;
          padding: 15px;
          margin-bottom: 12px;
          border-left: 4px solid #667eea;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        
        li:hover {
          background: #f0f4ff;
          transform: translateX(5px);
          box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
        }
        
        .student-name {
          font-weight: 700;
          color: #333;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .student-details {
          display: flex;
          gap: 20px;
          font-size: 0.95rem;
          color: #666;
        }
        
        .detail-item {
          display: flex;
          gap: 5px;
        }
        
        .detail-label {
          font-weight: 600;
          color: #667eea;
        }
        
        .grade {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: 600;
          font-size: 0.85rem;
        }
        
        .footer {
          text-align: center;
          margin-top: 30px;
          color: #999;
          font-size: 0.9rem;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📚 Student List</h1>
        <p class="subtitle">Complete Student Information</p>
        
        <div class="student-count">
          Total Students: ${students.length}
        </div>
        
        <ul>
          ${students.map(student => `
            <li>
              <div class="student-name">${student.id}. ${student.name}</div>
              <div class="student-details">
                <div class="detail-item">
                  <span class="detail-label">Email:</span>
                  <span>${student.email}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Grade:</span>
                  <span class="grade">${student.grade}</span>
                </div>
              </div>
            </li>
          `).join('')}
        </ul>
        
        <div class="footer">
          <p>Powered by Express.js | Node.js Server</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(studentListHTML);
});

// Start the server
app.listen(port, () => {
  console.log(`🎓 Student List Server running at http://localhost:${port}`);
  console.log(`Total students: ${students.length}`);
});
