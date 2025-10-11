import React from 'react';
import CoachChat from '../components/CoachChat';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Fitness.css';

const quickTopics = ['Hybrid Splits', 'Optimized Training'];

const Fitness = () => {
  useRevealOnScroll('.fitness-page .reveal-on-scroll');

  return (
    <div className="fitness-page">
      <section className="fitness-hero reveal-on-scroll">
        <div className="fitness-hero__content reveal-on-scroll reveal-from-left reveal-delay-1">
          <span className="eyebrow">Bowen Zhu • Fitness Coaching</span>
          <h1>Strength that fits your life.</h1>
          <ul className="fitness-tags">
            {quickTopics.map((topic, index) => (
              <li
                key={topic}
                className={`reveal-on-scroll reveal-delay-${index + 2}`}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="fitness-hero__card reveal-on-scroll reveal-from-right reveal-scale reveal-delay-2">
          <h2>Personal Fitness Coaching</h2>
          <p>Book a free consultation today.</p>
          <button
            className="hero-cta"
            onClick={() => window.location.href = '/contact'}
          >
            Personal Coaching
          </button>
        </div>
      </section>

      <section className="fitness-chat reveal-on-scroll reveal-scale reveal-delay-3">
        <CoachChat
          title="Bowen AI - Fitness Coach"
          coachLabel="AI fitness coach"
          systemPrompt={`You are Bowen Zhu's AI fitness coach. 
Keep answers concise (under 180 words) with bullet points when helpful. 
Ask clarifying questions when the request is vague. 
Focus on hybrid strength programming, balancing academics/work, recovery, and travel-friendly swaps. 
Keep tone encouraging and pragmatic, and remind users to consult professionals for medical concerns.`}
        />
      </section>
    </div>
  );
};

export default Fitness;
