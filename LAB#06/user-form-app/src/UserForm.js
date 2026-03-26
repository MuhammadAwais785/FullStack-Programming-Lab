import React, { useState } from 'react';
import './UserForm.css';

function UserForm(){
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: '', email: '' });
  };

  return (
    <div className="userform card">
      <form onSubmit={handleSubmit} className="form">
        <label className="full">
          Name
          <input name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} required />
        </label>

        <label className="full">
          Email
          <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
        </label>

        <div className="actions full">
          <button type="button" className="btn secondary" onClick={() => setForm({ name: '', email: '' })}>Clear</button>
          <button type="submit" className="btn primary">Submit</button>
        </div>
      </form>

      {submitted && (
        <div className="result">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
