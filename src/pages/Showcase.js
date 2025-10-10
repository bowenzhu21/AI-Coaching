import React, { useMemo, useState } from 'react';
import './Engineering.css';
import './Showcase.css';

const quickTopics = ['AI Systems', 'Full-Stack Product', 'Embedded Firmware', 'Design Leadership'];

const Showcase = () => {
  const projects = useMemo(
    () => [
      {
        id: 'learnlog',
        title: 'LearnLog',
        description:
          'Daily learning journal that pairs AI reflections with actionable summaries. Built with Next.js 15, Relay, and Prisma.',
        background: 'linear-gradient(135deg, #060921 0%, #1b1f5a 55%, #3b2a86 100%)',
        tags: ['TypeScript', 'PostgreSQL', 'LLMs', 'Next.js', 'Relay', 'Prisma'],
        live: 'https://learn-log.vercel.app/',
        code: 'https://github.com/bowenzhu21/LearnLog',
        highlights: [
          'Vector search-backed insights summarizing daily logs via OpenAI GPT-4.1.',
          'Realtime editing surface with optimistic Relay mutations and persisted drafts.',
          'Role-based spaces with granular access for mentors, peers, and cohorts.',
        ],
      },
      {
        id: 'gymbro',
        title: 'GymBro',
        description:
          'Machine-learning powered workout matchmaking platform pairing accountability partners based on training styles.',
        background: 'linear-gradient(135deg, #050107 0%, #1a0813 45%, #651020 100%)',
        tags: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Firestore', 'Authentication', 'Storage', 'Expo'],
        live: 'https://bowenzhu21.github.io/gymbro/',
        code: 'https://github.com/bowenzhu21/gymbro',
        highlights: [
          'K-means clustering over 100+ feature combos to pair athletes across 10 disciplines.',
          'CI/CD pipeline using GitHub Actions to auto lint, test, and deploy static builds.',
          'Gamified retention loops with streak tracking and push notification cadence.',
        ],
      },
      {
        id: 'steady',
        title: 'Steady',
        description:
          'Wearable actuator glove system that reduces tremors by 84% with real-time sensor fusion and ML-based detection.',
        background: 'linear-gradient(135deg, #071944 0%, #1b4fb3 55%, #f3cc2d 100%)',
        tags: ['TensorFlow', 'Embedded C++', 'Arduino', 'ESP32', 'Accelerometer', 'Python'],
        code: 'https://github.com/bowenzhu21/Steady.git',
        highlights: [
          'Streaming IMU data into a TensorFlow Lite model for 95% tremor classification accuracy.',
          'Closed-loop haptic actuator control tuned with PID and FFT-based smoothing.',
          '3D-printed exoskeleton optimized in SolidWorks for sensor placement and ergonomics.',
        ],
      },
      {
        id: 'smartmixer',
        title: 'SmartMixer',
        description:
          'AI DJ assistant that layers tracks with BPM-aware transitions using Librosa signal analysis and STFT.',
        background: 'linear-gradient(135deg, #060304 0%, #2a040a 45%, #9b101f 100%)',
        tags: ['Python', 'Librosa', 'NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Machine Learning', 'Flask'],
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
      <section className="showcase-hero">
        <div className="showcase-hero__content">
          <span className="eyebrow">Bowen Zhu • Projects</span>
          <h1>Showcase</h1>
          <p>Hi, I'm Bowen. Check out my projects below.</p>
          <ul className="showcase-hero__tags">
            {quickTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="showcase-hero__card">
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

      <section className="section">
        <h2 className="section-title">Hippos Exoskeleton Project</h2>
        <div className="project-card project-card--video">
          <div className="video-panel">
            <h3>Hippos Firmware + Full Stack App using BLE Integration Demo</h3>
            <p>
              BLE-enabled performance knee brace with synchronized firmware, mobile dashboards, and sub-100ms cloud data
              loop. Built as the end-to-end control center for high-performance athletes.
            </p>
            <div className="tag-row">
              <span className="tag">TypeScript</span>
              <span className="tag">Python</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">JavaScript</span>
              <span className="tag">React Native</span>
              <span className="tag">System Architecture</span>
              <span className="tag">Product Management</span>
              <span className="tag">Pandas</span>
              <span className="tag">SciPy</span>
              <span className="tag">NumPy</span>
              <span className="tag">UI/UX</span>
              <span className="tag">Expo</span>
              <span className="tag">Docker</span>
              <span className="tag">AWS</span>
              <span className="tag">EC2</span>
              <span className="tag">C++</span>
              <span className="tag">ESP32</span>
              <span className="tag">BLE</span>
              <span className="tag">Arduino IDE</span>
              <span className="tag">IMU</span>
            </div>
          </div>
          <video className="project-video" controls>
            <source src="/images/Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card project-card--image project-card--${project.id}`}
              style={{
                background: project.background,
                '--card-delay': `${0.3 + index * 0.12}s`,
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
