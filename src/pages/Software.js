import React from 'react';
import './Engineering.css';

const Software = () => {
  return (
    <div
      className="engineering-container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.78)), url('/bowen/images/software_bg.webp')",
      }}
    >
      <h1 className="page-title">Software Portfolio</h1>
      <div className="eng-hero" style={{ backgroundImage: "url('/bowen/images/software_bg.webp')" }}>
        <div className="eng-hero-overlay">
          <h2 className="eng-hero-title">Build. Ship. Iterate.</h2>
          <p className="eng-hero-sub">Production-ready apps, ML tooling, and DX.</p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Projects</h2>

        <div className="project-card">
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

        <div className="project-card">
          <h3 className="project-title">GymBro</h3>
          <p className="project-description">
            Full-stack fitness matchmaking app built with React and Firebase, featuring a clustering-based matching algorithm and CI/CD pipeline via GitHub Actions.
          </p>
          <a
            href="https://bowenzhu21.github.io/GymBro/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open GymBro →
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">TYSI Conference</h3>
          <p className="project-description">
            $500k non-profit initiative that connected 3,000+ students to industry leaders, including founders of Ethereum and Figma.
          </p>
          <a
            href="https://tysiconference.webflow.io"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website →
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li><strong>Programming:</strong> Python, JavaScript, React, React Native, Node.js, C++, Java, Pandas, NumPy, SciPy, Flask, HTML, PHP</li>
          <li><strong>ML & Cloud:</strong> TensorFlow, PyTorch, AWS (EC2), Docker, Linux, MySQL, Firebase, Apache, YAML</li>
          <li><strong>Design & Tools:</strong> Git, Figma, Adobe XD, Tailwind CSS, Cypress, Matplotlib, ffmpeg</li>
          <li><strong>Hardware:</strong> Arduino, ESP32, IMU, BLE, Signal Processing, Twilio, SOLIDWORKS, ANSYS, LabVIEW, Microfluidics</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2 className="section-title">Experience</h2>

        <div className="experience-item">
          <h3 className="experience-role">Voice AI Developer | Founding Engineer – Momenta</h3>
          <p className="experience-time">Jun. 2025 – Aug. 2025 • Calgary, AB</p>
          <ul>
            <li>Built real-time AI fraud detection for calls using Python, ML, and blockchain, reducing fraud risk.</li>
            <li>Cut latency to 150ms by deploying a Flask + Node.js WebSocket backend on AWS EC2, streaming 5s overlapping call segments from Twilio.</li>
            <li>Lowered false positives by 42% with a rolling buffer pipeline using SoX preprocessing and EWMA, scaling to 50+ calls.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Software Developer – Joseph Murray & Associates Consulting Ltd</h3>
          <p className="experience-time">Jan. 2025 – Apr. 2025</p>
          <ul>
            <li>Streamlined membership management for 100K+ users by building WordPress + CiviCRM extensions.</li>
            <li>Automated form testing using Cypress and integrated CI with visual regression, improving release safety by 97%.</li>
            <li>Led UI and marketing strategy for CiviPress, contributing to 20% of company revenue in Q1.</li>
            <li>Developed Drupal CMS entities and PHP scripts for 100K+ line content migration in the Bigger Minds app.</li>
            <li>Scraped and analyzed federal/provincial election data with Python to power live dashboards and outreach.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Software Developer – North P&D Inc.</h3>
          <p className="experience-time">Jan. 2024 – Jun. 2024</p>
          <ul>
            <li>Developed an onboarding portal for Chick-fil-A using React, Node.js, and Firebase, serving 5,000+ new hires.</li>
            <li>Built scalable backend services with AWS and MongoDB, reducing data latency by 30%.</li>
            <li>Delivered a real-time dashboard with React + AWS CloudWatch to improve system visibility and efficiency by 15%.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">UI/UX Designer & Marketing Lead – Handifuel (Startup)</h3>
          <p className="experience-time">Jun. 2023 – Sep. 2023</p>
          <ul>
            <li>Led outreach campaigns that reached 100K+ users and raised awareness for disability-focused tech solutions.</li>
            <li>Designed campaign visuals in Figma and Adobe XD, using analytics to support fundraising and incubation.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Chairman – Toronto Youth STEM Innovation Org. ($500k NGO)</h3>
          <p className="experience-time">Nov. 2022 – Jun. 2024</p>
          <ul>
            <li>Secured $200K in sponsorships and drew 3,000+ students and speakers including the founders of Ethereum & Figma.</li>
            <li>Partnered with AWS to provide $25K in credits and mentorship from Stanford, UC Berkeley, and top tech leaders.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3 className="education-school">University of Waterloo | BASc in Systems Design Engineering (Co-op)</h3>
          <p className="education-time">Sep. 2024 – Aug. 2029</p>
          <p className="education-details">Involvement: 4.0 GPA, Academic Class Representative | Projects: SmartMixer (AI DJ), Steady (Tremor Gloves)</p>
        </div>
      </section>
    </div>
  );
};

export default Software;
