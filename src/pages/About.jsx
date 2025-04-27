import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
      <h2 style={{ color: '#1a237e' }}>About Me</h2>
        <p>I am passionate about networking and cybersecurity, and highly motivated to learn and gain hands-on experience.</p>
        <p>I have acquired a solid foundation through academic and personal projects I have completed, and I continuously improve my skills through learning platforms such as TryHackMe and LetsDefend.</p>

        {/* ---- Nouvelle Section Education ---- */}
        <div className="education-section">
        <h3 style={{ color: '#1a237e' }}>Education & Certifications</h3>
          <ul>
            <li><strong>Engineering Cycle – Cybersecurity (2nd Year)</strong><br />ENSA, Marrakech <span className="date">2023 - Present</span></li>
            <li><strong>Preparatory Cycle for Engineering Studies</strong><br />ENSA, Marrakech <span className="date">2021 - 2023</span></li>
            <li><strong>High School Diploma</strong> <span className="date">2021</span></li>
          </ul>
        </div>
        {/* ------------------------------------- */}

        <a href="./CV-English.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
          View My English Resume
        </a>
        <a href="./CV-Français.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
          Voir mon CV en Français
        </a>
      </div>

      <div className="about-photo">
        <img src="./me.jpeg" alt="Chaimae" />
      </div>
    </div>
  );
}

export default About;
