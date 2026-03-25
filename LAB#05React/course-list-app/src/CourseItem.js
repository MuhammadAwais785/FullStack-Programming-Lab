import React from 'react';
import './CourseItem.css';

function CourseItem({ courseName, instructor, duration, type }) {
  return (
    <div className={`course-item ${type === 'Online' ? 'online' : 'offline'}`}>
      <h2 className="course-name">{courseName}</h2>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration}</p>
      {type && <p className="course-type"><strong>Type:</strong> {type}</p>}
    </div>
  );
}

export default CourseItem;
