import React from 'react';
import "../stylesheets/contact.css";
import { FaEnvelope, FaGithub,FaFileDownload } from 'react-icons/fa';
import { toast } from "react-toastify";

export default function Contact() {

  const handleOnResumeDownload = () => {

toast.success("Sidban:Resume downloaded successfully", {
  style: {
    background: "#d50e0e57",  // black
    color: "#fff"        // white text
  },
});

  };

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
      <a
  href="/Sidhheshwer_Bansode_Resume.pdf"
  download="Sidhheshwer_Bansode_Resume.pdf"
   onClick={handleOnResumeDownload}
  >
  <FaFileDownload />
</a>
      </div>
    </div>
  );
}
