import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/footer.css'; 
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="social-icons">
          {/* GitHub Icon */}
          <a
            href="https://github.com/AlishbaNasim"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/syeda-alishba-2826112b6"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:alishbanaseem345@gmail.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>

        <div className="footer-text">
          <p>&copy; 2024 All rights reserved</p>
          <p>Alishba Naseem</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
