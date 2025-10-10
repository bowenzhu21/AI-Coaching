// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const contactHighlights = [
  'Hybrid training + nutrition support',
  'Flexible check-ins that fit busy schedules',
  'Actionable programming within 48 hours'
];

const contactEngineeringHighlights = [
  'Software Infrastructure Design',
  'Full-Stack Development',
  'Product Mangement',
  'Machine Learning/AI Developer'
];

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero2">
        <div className="contact-hero__content">
          <span className="contact-eyebrow">Bowen Zhu • Contact/Inquiry</span>
          <h1>Inquire about my Engineering/PM Skills</h1>
          <p>
            Want to learn more about my projects, experiences, or how I can contribute to your team. 
            Shoot me an email and let's chat.
          </p>
          <ul className="contact-highlights">
            {contactEngineeringHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="contact-hero__cta">
            <a className="contact-hero__link" href="mailto:bowenzhu66@gmail.com">
              Email Bowen
            </a>
          </div>
        </div>
      </section>
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="contact-eyebrow">Bowen Zhu • Coaching</span>
          <h1>Let&apos;s build the plan that fits your season.</h1>
          <p>
            Whether you&apos;re balancing a heavy course load, a travel-heavy job, or student-athlete
            demands, together we can craft a sustainable training and nutrition flow that keeps momentum high.
          </p>
          <ul className="contact-highlights">
            {contactHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="contact-hero__cta">
            <a className="contact-hero__link" href="mailto:bowenzhu66@gmail.com">
              Email Bowen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
