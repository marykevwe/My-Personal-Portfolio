import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social-icons">
          <a href="https://github.com/marykevwe" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color="#333" />
          </a>
          <a href="https://linkedin.com/in/Mary kevwe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0077B5" />
          </a>
          <a href="https://facebook.com/mary kevwe" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#1877f2" />
          </a>
          <a href="https://instagram.com/mary kevwe" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="#E4405F" />
          </a>
        </div>
        <p>&copy; 2023 Marian. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
