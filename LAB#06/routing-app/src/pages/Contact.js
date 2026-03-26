import React, { useState } from 'react';

export default function Contact(){
  const [sent, setSent] = useState(false);
  return (
    <div className="page-container">
      <div className="card">
        <h3>Contact</h3>
        {sent ? (
          <div className="result">Thanks — message received.</div>
        ) : (
          <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
            <label>Name</label>
            <input required />
            <label>Message</label>
            <textarea required />
            <div className="form-actions">
              <button className="btn primary" type="submit">Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}