import React from 'react';
import CoachChat from '../components/CoachChat';
import './Fitness.css';

const quickTopics = ['Hybrid Splits', 'Minimal Equipment', 'Recovery Priming', 'Optimizing Training'];

const Fitness = () => {
  return (
    <div className="fitness-page">
      <section className="fitness-hero">
        <div className="fitness-hero__content">
          <span className="eyebrow">Bowen Zhu • Fitness Coaching</span>
          <h1>Strength that fits your life.</h1>
          <p>Chat with Bowen's AI Fitness Coach for training, recovery, and more, all tailored to you.</p>
          <ul className="fitness-tags">
            {quickTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="fitness-hero__card">
          <h2>Personal Fitness Coaching</h2>
          <p>Need hands-on support? Book a free consultation and see if you would benefit from personal coaching.</p>
          <button
            className="hero-cta"
            onClick={() => window.location.href = '/bowen/contact'}
          >
            Personal Coaching
          </button>
        </div>
      </section>

      <section className="fitness-chat">
        <CoachChat
          title="AI Fitness Coach"
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
