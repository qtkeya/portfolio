import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import '../App.css'; 

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          I'd love to connect! Feel free to reach out through any of the platforms below.
        </p>
        <div className="social-links floating">
          <a
            href="https://github.com/qtkeya"
            className="social-icon github hover-rotate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/nurkiya-sueno-35337b361/"
            className="social-icon linkedin hover-rotate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.facebook.com/keyyykim"
            className="social-icon facebook hover-rotate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

