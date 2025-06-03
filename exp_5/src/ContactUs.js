import React, { useState } from 'react';

const ContactUs = ({ onLogout }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message Sent!\n' + JSON.stringify(form, null, 2));
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br /><br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Send</button>
      </form>
      <br />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default ContactUs;
