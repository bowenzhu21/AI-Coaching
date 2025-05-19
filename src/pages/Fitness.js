import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Fitness.css';

const Fitness = () => {
  return (
    <div className="fitness-container">
      <h1 className="page-title">Fitness</h1>
      <section className="section">
        <h2 className="section-title">Workout Routines</h2>
        <div className="routine-card">
          <h3 className="routine-title">Strength Training</h3>
          <p className="routine-description">
            A 5-day split focusing on compound lifts like squats, deadlifts, and bench press to build strength and muscle.
          </p>
        </div>
        <div className="routine-card">
          <h3 className="routine-title">HIIT Cardio</h3>
          <p className="routine-description">
            High-intensity interval training sessions to boost endurance and burn fat in 20-30 minutes.
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Fitness Tips</h2>
        <ul className="tips-list">
          <li>Consistency is key: Aim for 3-5 workouts per week.</li>
          <li>Prioritize recovery: Sleep 7-8 hours and stretch daily.</li>
          <li>Track progress: Use apps or a journal to monitor gains.</li>
        </ul>
      </section>
      <AppointmentForm service="Fitness Coaching" />
    </div>
  );
};

export default Fitness;