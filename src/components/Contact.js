import React from 'react';
import "../stylesheets/contact.css";
import { FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-content">
      <div className="contact-icons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=2000sidhheshwerbr@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/sidhheshwer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
