import React from 'react';
import CoachChat from '../components/CoachChat';
import './Nutrition.css';

const nutritionHighlights = ['Healthy Substitutes', 'Nutrition Optimization'];

const Nutrition = () => {
  return (
    <div className="nutrition-page">
      <section className="nutrition-hero">
        <div className="nutrition-hero__content">
          <span className="eyebrow">Bowen Zhu • Nutrition Coaching</span>
          <h1>Health that fits your life.</h1>
          <ul className="nutrition-tags">
            {nutritionHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="nutrition-hero__card">
          <h2>Personal Nutrition Coaching</h2>
          <p>Book a free consultation today.</p>
          <button
            className="hero-cta"
            onClick={() => window.location.href = '/contact'}
          >
            Personal Coaching
          </button>
        </div>
      </section>

      <section className="nutrition-chat">
        <CoachChat
          title="AI Nutrition Coach"
          coachLabel="AI nutrition coach"
          systemPrompt={`You are Bowen Zhu's AI nutrition coach. 
Keep answers concise (under 180 words) with clear bullet points where useful.
Always tailor guidance to student-athletes, or busy professionals balancing training and work.
Focus on macros, hydration, simple meals, travel swaps, and recovery support. 
Ask gentle clarifying questions when data is missing, and remind users to consult professionals for medical concerns.`}
        />
      </section>
    </div>
  );
};

export default Nutrition;
