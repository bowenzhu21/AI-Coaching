// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., send to an API or email service)
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      className="contact-container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.74), rgba(255,255,255,0.78)), url('/bowen/images/software_bg.webp')",
      }}
    >
      <h1 className="page-title">Contact Me</h1>
      <div className="contact-hero" style={{ backgroundImage: "url('/bowen/images/software_bg.webp')" }}>
        <div className="contact-hero-overlay">
          <h2 className="contact-hero-title">Let’s connect</h2>
          <p className="contact-hero-sub">Open to projects, collaborations, and coaching.</p>
        </div>
      </div>
      <section className="section">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
