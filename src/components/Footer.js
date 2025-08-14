import React from 'react';
import '../stylesheets/footer.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-brand">
          <span className="white-text">Sid</span><span className="red-text">ban</span> <span>Portfolio</span>
        </h3>
        <p className="footer-tagline">Portfolio by Sidhheshwer Bansode</p>
        <div className="footer-icons">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bansodesidhheshwer@gmail.com" target="_blank"
  rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/sidhheshwer" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sidban. All rights reserved.</p>
      </div>
    </footer>
  );
}
