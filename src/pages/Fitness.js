import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Fitness.css';

const Fitness = () => {
  return (
    <div className="fitness-container">
      <h1 className="page-title">Fitness</h1>

      <section className="section">
        <h2 className="section-title">My Push / Pull / Legs Split</h2>
        <div className="carousel">
          {/* Push */}
          <div className="routine-card wide-card image-card">
            <div className="card-background" style={{ backgroundImage: `url('/images/push.webp')` }}></div>
            <div className="card-content">
              <h3 className="routine-title">Push (90 mins)</h3>
              <ul className="exercise-list">
                <li>Treadmill (5 mins)</li><hr />
                <li>Flat Dumbell Press (8 x 4)</li><hr />
                <li>Shoulder Press (8 x 4)</li><hr />
                <li>Lateral Raises (8 x 4)</li><hr />
                <li>Overhead Tricep Extensions (8 x 4)</li><hr />
                <li>V Bar Pushdown (8 x 4)</li><hr />
                <li>Chest Fly (8 x 4)</li><hr />
                <li>Treadmill (5 mins)</li>
              </ul>
            </div>
          </div>

          {/* Pull */}
          <div className="routine-card wide-card image-card">
            <div className="card-background" style={{ backgroundImage: `url('/images/pull.webp')` }}></div>
            <div className="card-content">
              <h3 className="routine-title">Pull (75 mins)</h3>
              <ul className="exercise-list">
                <li>Treadmill (5 mins)</li><hr />
                <li>Lat Pulldown (8 x 4)</li><hr />
                <li>Cable Rows (8 x 4)</li><hr />
                <li>Assisted Lateral Raises (8 x 4)</li><hr />
                <li>Face Pulls (8 x 4)</li><hr />
                <li>Cable Bicep Curls (8 x 4)</li><hr />
                <li>Hammer Curls (8 x 4)</li><hr />
                <li>Treadmill (5 mins)</li>
              </ul>
            </div>
          </div>

          {/* Legs */}
          <div className="routine-card wide-card image-card">
            <div className="card-background" style={{ backgroundImage: `url('/images/leg.webp')` }}></div>
            <div className="card-content">
              <h3 className="routine-title">Leg (90 mins)</h3>
              <ul className="exercise-list">
                <li>Stair Master(5 mins)</li><hr />
                <li>Squats Maxed Weight (4 x 3)</li><hr />
                <li>Squats Regular Weight (8 x 3)</li><hr />
                <li>Hip Thrusts (8 x 4)</li><hr />
                <li>Hamstring Excersize of Choice (8 x 4)</li><hr />
                <li>Seated Calf Raises (8 x 4)</li><hr />
                <li>Hyperextensions (8 x 4)</li><hr />
                <li>Stair Master(10 mins)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm service="Fitness Coaching" />
    </div>
  );
};

export default Fitness;