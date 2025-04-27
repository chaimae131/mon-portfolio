import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-text">
        <h2 style={{ color: '#1a237e' }}>Contact Me</h2>
        <p>Email: chaimabissi03@gmail.com</p>
        <p>
          LinkedIn: 
          <a href="https://linkedin.com/in/chaima-bissi" target="_blank" rel="noopener noreferrer">
            Chaima Bissi
          </a>
        </p>
        <p>
          GitHub: 
          <a href="https://github.com/chaimae131" target="_blank" rel="noopener noreferrer">
            github.com/chaimae131
          </a>
        </p>
      </div>

      <div className="contact-photo">
        <img src="./me.jpeg" alt="Chaimae" />
      </div>
    </section>
  );
};

export default Contact;
