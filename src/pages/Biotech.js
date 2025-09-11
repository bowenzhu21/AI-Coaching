import React from 'react';
import './Engineering.css';

const Biotech = () => {
  return (
    <div
      className="engineering-container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.78)), url('/bowen/images/biotech_bg.jpg')",
      }}
    >
      <h1 className="page-title">Biotech Portfolio</h1>
      <div className="eng-hero" style={{ backgroundImage: "url('/bowen/images/biotech_bg.jpg')" }}>
        <div className="eng-hero-overlay">
          <h2 className="eng-hero-title">Motion. Sensors. Biology.</h2>
          <p className="eng-hero-sub">Wearables, imaging, and human performance.</p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Projects</h2>

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
          <h3 className="experience-role">Biomechanical Engineer | Founding Engineer – Hippos Exoskeleton</h3>
          <p className="experience-time">Jul. 2025 – Present • San Francisco, CA</p>
          <ul>
            <li>Developed smart knee braces with AI injury detection and real-time biomechanics, preventing ACL tears and improving recovery outcomes.</li>
            <li>Built a React Native app and web dashboard from Figma designs, enabling live calibration, Bluetooth pairing, and account management.</li>
            <li>Reduced latency to 200ms by engineering a pipeline connecting ESP32 devices, IMUs, and flexion sensors to a Python + WebSocket backend streaming 20+ datapoints/sec.</li>
            <li>Created Python ML scripts (NumPy, SciPy, Pandas) to quantify injury metrics, validated by 50+ interviews.</li>
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

export default Biotech;
