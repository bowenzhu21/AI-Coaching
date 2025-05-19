import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Nutrition.css';

const Nutrition = () => {
  return (
    <div className="nutrition-container">
      <h1 className="page-title">Nutrition Guide</h1>
      <section className="section">
        <h2 className="section-title">Healthy Recipes</h2>
        <div className="recipe-card">
          <h3 className="recipe-title">Protein-Packed Smoothie</h3>
          <p className="recipe-description">
            A blend of whey protein, spinach, banana, and almond milk for a quick post-workout meal.
          </p>
        </div>
        <div className="recipe-card">
          <h3 className="recipe-title">Quinoa Salad</h3>
          <p className="recipe-description">
            A nutrient-dense salad with quinoa, avocado, cherry tomatoes, and a lemon vinaigrette.
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Nutrition Tips</h2>
        <ul className="tips-list">
          <li>Balance macros: Aim for 40% carbs, 30% protein, 30% fats.</li>
          <li>Stay hydrated: Drink at least 2 liters of water daily.</li>
          <li>Plan meals: Prep meals weekly to stay on track.</li>
        </ul>
      </section>
      <AppointmentForm service="Nutrition Planning" />
    </div>
  );
};

export default Nutrition;