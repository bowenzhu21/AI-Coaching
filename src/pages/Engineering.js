import React from 'react';
import './Engineering.css';

const Engineering = () => {
  return (
    <div className="engineering-container">
      <h1 className="page-title">Engineering Portfolio</h1>

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
          <h3 className="project-title">Steady</h3>
          <p className="project-description">
            Wearable gloves with actuators and sensors to reduce tremors, achieving 84% reduction and 95% detection accuracy, powered by a TensorFlow-based AI model.
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

        <div className="project-card">
          <h3 className="project-title">GymBro</h3>
          <p className="project-description">
            Full-stack fitness matchmaking app built with React and Firebase, featuring a clustering-based matching algorithm and CI/CD pipeline via GitHub Actions.
          </p>
          <a 
            href="https://github.com/bowenzhu21/GymBro.git" 
            className="project-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub →
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
          <li><strong>Programming:</strong> C++, PHP, Java, JavaScript, Python, React, TypeScript, Node.js, HTML, CSS, GraphQL, Git, Docker</li>
          <li><strong>Databases & Cloud:</strong> MySQL, Apache, Linux, MAMP, AWS, Azure, TensorFlow, PostgreSQL, MongoDB, Redis, REST</li>
          <li><strong>Design & Tools:</strong> Drupal, WordPress, CiviCRM, Firebase, Cypress, Postman, Figma, Adobe XD, InVision</li>
          <li><strong>Engineering:</strong> Microfluidics, SOLIDWORKS, AutoCAD, COMSOL, Arduino, OCT Imaging, LabVIEW, MATLAB</li>
        </ul>
      </section>


      {/* Experience Section */}
      <section className="section">
        <h2 className="section-title">Experience</h2>

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
          <h3 className="experience-role">Biomedical Research Intern – Hybrid Biomedical Optics Labs</h3>
          <p className="experience-time">May 2022 – Dec. 2022</p>
          <ul>
            <li>Conducted OCT/OKR experiments on Zebrafish lenses and designed imaging components using SOLIDWORKS.</li>
            <li>Trained a Python ML model with OpenCV to detect cataract stages and cancerous development with 94% accuracy.</li>
            <li>Preprocessed 10,000+ microscopy images using NumPy and scikit-image to improve model input quality.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Systems Engineer – Hybrid Biomedical Optics Labs</h3>
          <p className="experience-time">Jan. 2023 – Aug. 2023</p>
          <ul>
            <li>Designed a microfluidics system with integrated sensors, using COMSOL and LabVIEW to boost throughput by 30%.</li>
            <li>Coded experiments in UProcess to analyze pressure–flow relationships and calibrate system parameters.</li>
            <li>Automated fluid handling with Python visualizations and Arduino PID control, improving test repeatability.</li>
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
          <h3 className="education-school">University of Waterloo – BASc in Systems Design Engineering</h3>
          <p className="education-time">Sep. 2024 – Apr. 2029</p>
          <p className="education-details">Involvement: Academic Class Rep, Formula Electric (Aerospace), House Taylor (St. Jerome's)</p>
        </div>
      </section>
    </div>
  );
};

export default Engineering;