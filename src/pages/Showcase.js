import React from 'react';
import './Engineering.css';

const Showcase = () => {
  return (
    <div
      className="engineering-container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.78)), url('/bowen/images/software_bg.webp')",
      }}
    >
      <h1 className="page-title">Showcase</h1>
      <div className="eng-hero" style={{ backgroundImage: "url('/bowen/images/software_bg.webp')" }}>
        <div className="eng-hero-overlay">
          <h2 className="eng-hero-title">I think smart but I work smarter. Efficiency is everything.</h2>
          <p className="eng-hero-sub">Bridging AI engineering and product management to deliver scalable systems and high-quality products at record speed.</p>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Hippos Firmware + Full Stack App using BLE Integration Demo</h2>
        <div className="project-card">
          <h3 className="project-title">Hippos Firmware + Full Stack App using BLE Integration Demo</h3>
          <video
            controls
            style={{
              width: '37.5%',
              minWidth: '240px',
              borderRadius: '12px',
              boxShadow: '0 6px 16px rgba(13, 71, 161, 0.18)',
              margin: '0 auto',
              display: 'block',
            }}
          >
            <source src="/bowen/images/Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div
          className="project-card project-card--image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,248,255,0.85), rgba(230,240,255,0.92)), url('/bowen/images/learnlog.png')",
          }}
        >
          <h3 className="project-title">LearnLog</h3>
          <p className="project-description">
            Capture and reflect on what you learn every day. LearnLog is a modern learning AI-powered journal app built
            with Next.js 15, TypeScript, Relay, and Prisma.
          </p>
          <a
            href="https://learn-log.vercel.app/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit LearnLog →
          </a>
          <a
            href="https://github.com/bowenzhu21/LearnLog"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>
        <div
          className="project-card project-card--image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,250,255,0.78), rgba(245,250,255,0.9)), url('/bowen/images/gymbro.png')",
          }}
        >
          <h3 className="project-title">GymBro</h3>
          <p className="project-description">
            Full-stack fitness matchmaking app built with React and Firebase, featuring a clustering-based matching algorithm and CI/CD pipeline via GitHub Actions.
          </p>
          <a
            href="https://bowenzhu21.github.io/gymbro/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open GymBro →
          </a>
        </div>
        <div
          className="project-card project-card--image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,250,255,0.78), rgba(245,250,255,0.9)), url('/bowen/images/steady.png')",
          }}
        >
          <h3 className="project-title">Steady</h3>
          <p className="project-description">
            Wearable gloves with actuators and sensors to reduce tremors, achieving 84% reduction and 95% detection
            accuracy, powered by a TensorFlow-based AI model.
          </p>
          <a
            href="https://github.com/bowenzhu21/Steady.git"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>
        <div
          className="project-card project-card--image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,250,255,0.78), rgba(245,250,255,0.9)), url('/bowen/images/smartmixer.png')",
          }}
        >
          <h3 className="project-title">SmartMixer</h3>
          <p className="project-description">
            AI-powered DJ system using Python, Librosa, and STFT to analyze tempo and beats, blending 100+ tracks with seamless transitions across 30 BPM ranges.
          </p>
          <a
            href="https://github.com/bowenzhu21/Smart-Mixer.git"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>

      </section>
    </div>
  );
};

export default Showcase;
