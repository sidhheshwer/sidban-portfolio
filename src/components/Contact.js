import React from 'react';
import "../stylesheets/contact.css";
import { FaEnvelope, FaGithub,FaFileDownload } from 'react-icons/fa';
import { toast } from "react-toastify";

export default function Contact() {

  const handleOnResumeDownload = () => {

toast.success("Sidban:Resume downloaded successfully", {
  style: {
    background: "#d50e0e57", 
    color: "#fff"      
  },
});

  };  

  return (
    <div className="contact-content">
      <div className="contact-icons">
       <a
  href="mailto:2000sidhheshwerbr@gmail.com?subject=Sidban Project Inquiry&body=Hello Sidhheshwer,"
  className="mailButton"
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
  href="/SidhheshwerBansodeResume.pdf"
  download="SidhheshwerBansodeResume.pdf"
   onClick={handleOnResumeDownload}
  >
  <FaFileDownload />
</a>
      </div>
    </div>
  );
}
