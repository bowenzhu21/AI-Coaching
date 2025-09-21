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
            href="https://bowenzhu21.github.io/GymBro/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open GymBro →
          </a>
          <a
            href="https://github.com/bowenzhu21/GymBro-Mobile"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Mobile App on GitHub →
          </a>
        </div>

      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li><strong>Programming:</strong> Python, JavaScript, React, React Native, Node.js, C++, Java, Pandas, NumPy, SciPy, Flask, HTML, PHP, TypeScript, Next.js, FastAPI</li>
          <li><strong>ML & Cloud:</strong> TensorFlow, PyTorch, AWS (EC2), Docker, Linux, MySQL, Firebase, Apache, YAML, OpenCV, PostgreSQL</li>
          <li><strong>Design & Tools:</strong> Git, Figma, Adobe XD, Tailwind CSS, Cypress, Matplotlib, ffmpeg, Nginx/TLS</li>
          <li><strong>Hardware:</strong> Arduino, ESP32, IMU, BLE, Signal Processing, Twilio, SOLIDWORKS, ANSYS, LabVIEW, Microfluidics</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2 className="section-title">Experience</h2>

        <div className="experience-item">
          <h3 className="experience-role">Software Engineer | Founding Engineer – Hippos Exoskeleton</h3>
          <p className="experience-time">Jul. 2025 – Present • San Francisco, CA</p>
          <ul>
            <li>Developing smart knee braces with real-time AI biometrics to prevent ACL tears and improve performance.</li>
            <li>Built a secure 150ms ingest API by deploying a FastAPI + PostgreSQL backend with Docker and Nginx/TLS on a hardened VPS.</li>
            <li>Delivered cross-platform dashboards informed by 100+ industry interviews, shipping the companion app in React Native.</li>
            <li>Engineered a biomechanical ML pipeline streaming 20+ datapoints/sec from ESP32 IMU sensors via Python (NumPy, Pandas, SciPy) and BLE.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Voice AI Developer | Founding Engineer – Momenta</h3>
          <p className="experience-time">Jun. 2025 – Aug. 2025 • Calgary, AB</p>
          <ul>
            <li>Built a real-time voice fraud detection pipeline handling 500+ concurrent calls at 150ms latency with Python ML and EWMA smoothing.</li>
            <li>Integrated Twilio Voice by developing Flask + Node.js WebSocket services and hardening Ngrok/AWS EC2 infrastructure.</li>
            <li>Automated conversion of PCM streams to WAV via a SoX-based audio system with YAML-configurable sampling and overlap controls.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Full Stack Developer – Joseph Murray & Associates Consulting Ltd</h3>
          <p className="experience-time">Jan. 2025 – Apr. 2025 • Toronto, ON</p>
          <ul>
            <li>Streamlined membership operations for 100K+ PSF users by shipping LAMP, WordPress, and CiviCRM extensions.</li>
            <li>Implemented visual regression pipelines with Cypress API tests, cutting QA effort by 97%.</li>
            <li>Led CiviPress UI and go-to-market strategy, driving 20% quarterly revenue growth.</li>
            <li>Migrated and authored Bigger Minds Flutter content via custom PHP tooling atop Drupal.</li>
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

        <div className="experience-item">
          <h3 className="experience-role">Biomedical & AI Systems Engineer – Hybrid Biomedical Optics Labs</h3>
          <p className="experience-time">May 2022 – Aug. 2023 • Toronto, ON</p>
          <ul>
            <li>Ran OCT/OKR studies on Zebrafish and designed optics components in SOLIDWORKS to maximize light refraction.</li>
            <li>Improved cataract detection by 24% through Python ML pipelines using OpenCV and PyTorch.</li>
            <li>Co-developed a microfluidics analysis system with ThorLabs/LabSmith, optimizing pressure flow via ANSYS and LabVIEW.</li>
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
