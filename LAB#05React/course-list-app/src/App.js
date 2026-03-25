import React from 'react';
import './App.css';
import CourseItem from './CourseItem';

function App() {
  const courses = [
    { courseName: 'Introduction to Programming', instructor: 'Dr. Sana', duration: '8 weeks', type: 'Online' },
    { courseName: 'Data Structures', instructor: 'Prof. Kamran', duration: '10 weeks', type: 'Offline' },
    { courseName: 'Web Development', instructor: 'Ms. Nida', duration: '6 weeks', type: 'Online' },
    { courseName: 'Database Systems', instructor: 'Dr. Asad', duration: '9 weeks', type: 'Offline' },
    { courseName: 'Software Engineering', instructor: 'Mr. Bilal', duration: '12 weeks', type: 'Online' }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Course List</h1>
      </header>

      <main className="course-list">
        {courses.map((c, i) => (
          <CourseItem key={i} {...c} />
        ))}
      </main>
    </div>
  );
}

export default App;
