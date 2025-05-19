import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Skincare.css';

const Skincare = () => {
  return (
    <div className="skincare-container">
      <h1 className="page-title">Skincare Routine</h1>
      <section className="section">
        <h2 className="section-title">Daily Routine</h2>
        <div className="routine-card">
          <h3 className="routine-title">Morning Skincare</h3>
          <p className="routine-description">
            Cleanser, vitamin C serum, moisturizer, and SPF 50 for protection and hydration.
          </p>
        </div>
        <div className="routine-card">
          <h3 className="routine-title">Evening Skincare</h3>
          <p className="routine-description">
            Double cleanse, retinol, and a rich moisturizer to repair and nourish overnight.
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Favorite Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'ur[](https://via.placeholder.com/200)' }}></div>
            <h3 className="product-title">Hydrating Cleanser</h3>
            <p className="product-description">
              A gentle cleanser that removes impurities without stripping moisture.
            </p>
            <a href="#" className="product-link">View Product →</a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'ur[](https://via.placeholder.com/200)' }}></div>
            <h3 className="product-title">Vitamin C Serum</h3>
            <p className="product-description">
              Brightens skin and reduces dark spots with 20% vitamin C.
            </p>
            <a href="#" className="product-link">View Product →</a>
          </div>
          <div className="product-card">
            <div className="product-image" style={{ backgroundImage: 'ur[](https://via.placeholder.com/200)' }}></div>
            <h3 className="product-title">SPF 50 Sunscreen</h3>
            <p className="product-description">
              Broad-spectrum protection with a lightweight, non-greasy formula.
            </p>
            <a href="#" className="product-link">View Product →</a>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Skincare Tips</h2>
        <ul className="tips-list">
          <li>Patch test new products to avoid irritation.</li>
          <li>Use sunscreen daily to prevent UV damage.</li>
          <li>Stay consistent with your routine for best results.</li>
        </ul>
      </section>
      <AppointmentForm service="Skincare Consultation" />
    </div>
  );
};

export default Skincare;