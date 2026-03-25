import React from 'react';
import './Greeting.css';

function Greeting({ name, timeOfDay, bgColor }) {
  const msg = timeOfDay === 'morning'
    ? `Good morning, ${name}!`
    : timeOfDay === 'afternoon'
      ? `Good afternoon, ${name}!`
      : timeOfDay === 'evening'
        ? `Good evening, ${name}!`
        : `Hello, ${name}!`;

  return (
    <div className="greeting" style={{ backgroundColor: bgColor || '#ffffff' }}>
      <h2 className="greeting-msg">{msg}</h2>
      <p className="greeting-info">Time of day: {timeOfDay}</p>
    </div>
  );
}

export default Greeting;
