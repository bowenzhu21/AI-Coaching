import React, { useMemo, useState } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Engineering.css';
import './Showcase.css';

const quickTopics = ['AI/ML Systems', 'Software Infrastructure', 'Product Management', 'Full-Stack Dev'];

const Showcase = () => {
  const revealOptions = useMemo(
    () => ({
      rootMargin: '0px 0px 12% 0px',
      threshold: 0.05,
    }),
    []
  );

  useRevealOnScroll('.engineering-container .reveal-on-scroll', revealOptions);

  const projects = useMemo(
    () => [
      {
  id: 'adapt',
  title: 'Adapt',
  description:
    'An adaptive AI web app that changes layout, components, and theme based on the conversation. Memory via pgvector, LangChain orchestration, and realtime UI.',
  background: 'linear-gradient(140deg, rgba(255,255,255,0.98) 0%, rgba(244,241,255,0.96) 55%, rgba(235,228,255,0.94) 100%)',
  tags: [
    'LLMs',
    'pgvector',
    'LangChain',
    'OpenAI',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
  ],
  live: 'https://adaptive-ai.vercel.app/',
  code: 'https://github.com/bowenzhu21/Adapt',
  highlights: [
    'Adaptive UI engine that picks components (timer, breathing, planner, journal, etc.) and theme per message.',
    'Long-term RAG memory using Supabase pgvector; retrieves relevant past goals/notes for personalization.',
    'LangChain orchestration: intent detection → memory retrieval → UI plan generation → sanitization → persist.',
    'Realtime UI via Supabase: ui_state upserts broadcast to clients—no manual reload needed.',
    'Secure auth with Supabase; deployed on Vercel; theme driven by CSS variables (bg/fg/primary/accent).'
  ],
},
      {
        id: 'learnlog',
        title: 'LearnLog',
        description:
          'Daily learning journal with AI Habits Coach and Summaries. Built to empower specialized student learning.',
        background: 'linear-gradient(135deg, #060921 0%, #1b1f5a 55%, #3b2a86 100%)',
        tags: ['TypeScript', 'PostgreSQL', 'LLMs', 'Next.js', 'Relay', 'Prisma'],
        live: 'https://learn-log.vercel.app/',
        code: 'https://github.com/bowenzhu21/LearnLog',
        highlights: [
          'Built full-stack journaling platform in Next.js, GraphQL & PostgreSQL with TypeScript, supporting scalable data',
          'Built LLM pipelines with GPT-4o-mini for customized summaries and habit coaching with fallback handling',
        ],
      },
      {
        id: 'gymbro',
        title: 'GymBro',
        description:
          'ML powered fitness social platform pairing partners based on training styles and body compositions.',
        background: 'linear-gradient(135deg, #050107 0%, #1a0813 45%, #651020 100%)',
        tags: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Firestore'],
        live: 'https://bowenzhu21.github.io/gymbro/',
        code: 'https://github.com/bowenzhu21/GymBro-Mobile',
        highlights: [
          'Shipped a cross-platform mobile app in using React Native, Firebase Auth, Firestore, and Storage',
          'Implemented secure user interface with real-time Firestore queries, and custom Firestore security rules.',
          'Improved match relevance by 35% by deploying custom compatibility metrics (strength ratios, VO2 max estimates).',
        ],
      },
      {
        id: 'steady',
        title: 'Steady',
        description:
          'Wearable actuator glove system that reduces tremors by 84% with real-time sensor fusion and ML-based detection.',
        background: 'linear-gradient(135deg, #2b488bff 0%, #849fd1ff 55%, #ffffffff 100%)',
        tags: ['Python', 'TensorFlow', 'Embedded C++', 'Arduino', 'ESP32', 'Accelerometer'],
        code: 'https://github.com/bowenzhu21/Steady.git',
        highlights: [
          'Developed accelerometer-based gloves on ESP32 using C++ & BLE to streaming motion data for tremor analysis',
          'Built TensorFlow pipeline in Python for tremor detection & motion prediction, enabling adaptive stabilization',  
        ],
      },
      {
        id: 'smartmixer',
        title: 'SmartMixer',
        description:
          'AI DJ assistant that layers tracks with BPM-aware transitions using Librosa signal analysis and STFT.',
        background: 'linear-gradient(135deg, #060304 0%, #2a040a 45%, #9b101f 100%)',
        tags: ['Python', 'Librosa', 'Pandas/NumPy/SciPy', 'Matplotlib', 'Machine Learning', 'Flask'],
        code: 'https://github.com/bowenzhu21/Smart-Mixer.git',
        highlights: [
          'Automated BPM drift correction and beat alignment across 30 BPM ranges.',
          'Energy-based sequencing ensures smooth genre transitions over 100+ tracks.',
          'CLI pipeline exports performance-ready playlists with fade envelopes.',
        ],
      },
    ],
    [],
  );

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div
      className="engineering-container"
      style={{
        background: 'linear-gradient(140deg, rgba(253,248,243,0.92), rgba(246,236,228,0.9))',
      }}
    >
      <section className="showcase-hero reveal-on-scroll">
        <div className="showcase-hero__content reveal-on-scroll reveal-from-left reveal-delay-1">
          <span className="eyebrow">Bowen Zhu • Projects</span>
          <h1>Showcase</h1>
          <p>Hi, I'm Bowen. Check out my projects below.</p>
          <ul className="showcase-hero__tags">
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
        <div className="showcase-hero__card reveal-on-scroll reveal-from-right reveal-scale reveal-delay-2">
          <h2>Get in Touch</h2>
          <p>Want to chat and learn more about me, or get a free software consultation?</p>
          <button
            className="showcase-hero__cta"
            onClick={() => window.location.href = '/contact'}
          >
            Let's Chat
          </button>
        </div>
      </section>
{/*
      <section className="section">
        <h2 className="section-title">Hippos Exoskeleton</h2>
        <div className="project-card project-card--video">
          <div className="video-panel">
            <h3>Firmware + Full Stack App using BLE Demo</h3>
            <div className="tag-row">
              <span className="tag">TypeScript</span>
              <span className="tag">Python</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">JavaScript</span>
              <span className="tag">React Native</span>
              <span className="tag">Pandas/SciPy/NumPy</span>
              <span className="tag">Docker</span>
              <span className="tag">AWS (EC2)</span>
              <span className="tag">Embedded C++</span>
              <span className="tag">ESP32</span>
              <span className="tag">BLE</span>
              <span className="tag">IMU</span>
            </div>
          </div>
          <video className="project-video" controls>
            <source src="/images/Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
*/}
      {/* Projects Section */}
      <section className="section reveal-on-scroll reveal-scale reveal-delay-1">
        <h2 className="section-title reveal-on-scroll reveal-delay-1">Projects</h2>
        <div className="project-grid reveal-on-scroll reveal-delay-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card project-card--image project-card--${project.id} reveal-on-scroll reveal-scale reveal-delay-${Math.min(index + 2, 6)}`}
              style={{
                background: project.background,
              }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {project.live && (
                  <a
                    href={project.live}
                    className="project-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                )}
                {project.code && (
                  <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                )}
                <button type="button" className="project-more" onClick={() => setActiveProject(project)}>
                  More details
                </button>
              </div>
              <img
                src={`/images/${project.id}.png`}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-${activeProject.id}-title`}
        >
          <div className="project-modal__dialog">
            <button className="project-modal__close" type="button" onClick={() => setActiveProject(null)}>
              Close
            </button>
            <h3 id={`project-${activeProject.id}-title`} className="project-modal__title">
              {activeProject.title}
            </h3>
            <p className="project-modal__overview">{activeProject.description}</p>
            <ul className="project-modal__list">
              {activeProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-modal__footer">
              {activeProject.code && (
                <a href={activeProject.code} className="project-link" target="_blank" rel="noopener noreferrer">
                  Code Repository
                </a>
              )}
              {activeProject.live && (
                <a href={activeProject.live} className="project-link primary" target="_blank" rel="noopener noreferrer">
                  View Live Project
                </a>
              )}
              <button className="project-link" type="button" onClick={() => setActiveProject(null)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
