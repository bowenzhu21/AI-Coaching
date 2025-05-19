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
          <h3 className="project-title">Steady</h3>
          <p className="project-description">
            TremorTracker: Advanced Tremor Monitoring & Insights
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
          <h3 className="project-title">TYSI Conference</h3>
          <p className="project-description">
            $500k non-profit organization designed to provide high school students exposure into the professional STEM fields
          </p>
          <a 
            href="https://tysiconference.webflow.io/?fbclid=PAZXh0bgNhZW0CMTEAAac6ZM9fc4Rtpdfbb836oa-FkWfWF2vOe5hkWeQxMji7St0oVLu6NuMRBVE3dQ_aem_uDRbw7JTinNPeA3olzHMKQ" 
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
          <li><strong>Databases & Cloud:</strong> MySQL, Apache, Linux, MAMP, Ngrok, AWS, Azure</li>
          <li><strong>Design & Tools:</strong> Drupal, WordPress, CiviCRM, Firebase, Cypress, Postman, Figma, Adobe XD, InVision, JIRA, Clickup</li>
          <li><strong>Engineering:</strong> Microfluidics, SOLIDWORKS, AutoCAD, COMSOL, Arduino, OCT Imaging, LabVIEW, MATLAB</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2 className="section-title">Experience</h2>

        <div className="experience-item">
          <h3 className="experience-role">Software Developer – Joseph Murray & Associates Consulting Ltd</h3>
          <p className="experience-time">Jan. 2025 – Apr. 2025</p>
          <p className="experience-description">
          <li>Developed Merge Memberships and Delete CMS User extensions using LAMP Stack, WordPress CMS, and CiviCRM to streamline member management for 100K+ users the Python Software Foundation (PSF).</li>
            <li>Built Cypress (JavaScript) tests for multi-step form submissions with backend API validation, and integrated visual regression tests into CI pipelines for ACORN, PSF, and SACE, improving code-break detection speed by 97%.</li>
            <li>UI designed and developed the marketing strategy for CiviPress, a new company franchise that accounted for 20% of company revenue within its first quarter.</li>
            <li>Built full stack Custom Entities using Drupal CMS and LAMP Stack, and developed PHP content migration scripts to handle 100k+ lines complex decision logic, taxonomies, and content translations for the Bigger Minds Flutter app.</li>
          </p>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Software Developer – North P&D Inc.</h3>
          <p className="experience-time">Jan. 2024 – Jun. 2024</p>
          <p className="experience-description">
          <li>Built the GymBro app using React, Firebase Auth, and Firestore, enabling real-time data syncing and user auth.</li>
            <li>Engineered a custom matching algorithm using Firestore compound queries and user clustering, improving match relevance by 75% according to pilot user feedback.</li>
            <li>Designed and implemented 20+ modular, reusable UI components with React hooks, significantly improving development efficiency and ensuring a consistent, polished user experience.</li>
          </p>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Biomedical / Mechanical Engineer – Hybrid Biomedical Optics Labs</h3>
          <p className="experience-time">May 2022 – Aug. 2023</p>
          <p className="experience-description">
          <li>Conducted OCT and OKR experiments on Zebrafish lens models, designed components using SOLIDWORKS, used Python machine learning to analyze cataractous development across 3 stages with 94% accuracy.</li>
          <li>Engineered a custom microfluidics system and optimized pressure–flow dynamics using COMSOL Multiphysics and LabVIEW, improving data throughput by 15% with efficient sensor interfacing and signal processing.</li>
          </p>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Head of Marketing / UI/UX Designer – Handifuel (Startup)</h3>
          <p className="experience-time">Jul. 2023 – Aug. 2023</p>
          <p className="experience-description">
          <li>Worked with influencers to boost social media disability awareness, reaching 100k users via SEO and campaign.</li>
          <li>Created campaign visuals using Figma and Adobe XD, leveraging data analytics to guide financing and incubation.</li>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Engineering;