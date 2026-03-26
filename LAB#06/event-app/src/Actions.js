import React, { useState } from 'react';
import './Actions.css';

function Actions(){
  const [message, setMessage] = useState('');
  const [bg, setBg] = useState('#ffffff');

  const showMessage = () => setMessage('Hello! This is a message from the Actions component.');
  const changeBg = () => setBg(prev => prev === '#ffffff' ? '#f0f8ff' : '#ffffff');
  const showAlert = () => alert('This is an alert!');

  return (
    <div className="actions card" style={{ background: bg }}>
      <div className="buttons">
        <button className="btn" onClick={showMessage} onMouseOver={e => e.currentTarget.style.color = '#0b63ff'} onMouseOut={e => e.currentTarget.style.color = ''}>Show message</button>
        <button className="btn" onClick={changeBg} onMouseOver={e => e.currentTarget.style.color = '#0b63ff'} onMouseOut={e => e.currentTarget.style.color = ''}>Change background</button>
        <button className="btn" onClick={showAlert} onMouseOver={e => e.currentTarget.style.color = '#0b63ff'} onMouseOut={e => e.currentTarget.style.color = ''}>Show alert</button>
      </div>

      <div className="output">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Actions;
