import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: service || 'Consultation',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for calendar integration (e.g., send to Firebase or Calendly API)
    console.log('Appointment booked:', formData);
    // You can integrate with a service like Calendly or Google Calendar API here
    setFormData({ name: '', email: '', date: '', time: '', service: service || 'Consultation' });
  };

  return (
    <section className="section">
      <h2 className="section-title">Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
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
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="Consultation">Consultation</option>
            <option value="Fitness Coaching">Fitness Coaching</option>
            <option value="Nutrition Planning">Nutrition Planning</option>
            <option value="Skincare Consultation">Skincare Consultation</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </section>
  );
};

export default AppointmentForm;