import React from 'react';
import CoachChat from '../components/CoachChat';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Nutrition.css';

const nutritionHighlights = ['Healthy Substitutes', 'Nutrition Optimization'];

const Nutrition = () => {
  useRevealOnScroll('.nutrition-page .reveal-on-scroll');

  return (
    <div className="nutrition-page">
      <section className="nutrition-hero reveal-on-scroll">
        <div className="nutrition-hero__content reveal-on-scroll reveal-from-left reveal-delay-1">
          <span className="eyebrow">Bowen Zhu • Nutrition Coaching</span>
          <h1>Health that fits your life.</h1>
          <ul className="nutrition-tags">
            {nutritionHighlights.map((item, index) => (
              <li
                key={item}
                className={`reveal-on-scroll reveal-delay-${index + 2}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="nutrition-hero__card reveal-on-scroll reveal-from-right reveal-scale reveal-delay-2">
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

      <section className="nutrition-chat reveal-on-scroll reveal-scale reveal-delay-3">
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
