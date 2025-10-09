// src/pages/Contact.js
import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="page-title">Let's Chat</h1>
      <section className="contact-support-top">
        <AppointmentForm />
      </section>
    </div>
  );
};

export default Contact;
