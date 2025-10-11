// src/pages/Contact.js
import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
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
  useRevealOnScroll('.contact-container .reveal-on-scroll');

  return (
    <div className="contact-container">
      <section className="contact-hero2 reveal-on-scroll reveal-from-left">
        <div className="contact-hero__content reveal-on-scroll reveal-delay-1">
          <span className="contact-eyebrow">Bowen Zhu • Contact/Inquiry</span>
          <h1>Inquire about my Engineering/PM Skills</h1>
          <ul className="contact-highlights">
            {contactEngineeringHighlights.map((item, index) => (
              <li
                key={item}
                className={`reveal-on-scroll reveal-delay-${Math.min(index + 2, 6)}`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="contact-hero__cta reveal-on-scroll reveal-delay-3 reveal-scale">
            <a className="contact-hero__link" href="mailto:bowenzhu66@gmail.com">
              Email Bowen
            </a>
          </div>
        </div>
      </section>
      <section className="contact-hero reveal-on-scroll reveal-from-right">
        <div className="contact-hero__content reveal-on-scroll reveal-delay-1">
          <span className="contact-eyebrow">Bowen Zhu • Coaching</span>
          <h1>Let&apos;s build the plan that fits your season.</h1>
          <ul className="contact-highlights">
            {contactHighlights.map((item, index) => (
              <li
                key={item}
                className={`reveal-on-scroll reveal-delay-${Math.min(index + 2, 6)}`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="contact-hero__cta reveal-on-scroll reveal-delay-3 reveal-scale">
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
