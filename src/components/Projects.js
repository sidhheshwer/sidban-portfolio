import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/projects.css';

import { MdMovieFilter } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { SiAuthelia } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { MdPreview } from "react-icons/md";
import Preview from './Preview';
export default function Projects({ projectRef }) {

  const [scrollingUp, setScrollingUp] = useState(false);
  const conatinerRefs = useRef();
  const [openPreview,setPreview]=useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    const element = conatinerRefs.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setScrollingUp(true);
        } else {
          setScrollingUp(false);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  function handleOnMovies() {
    window.open("https://sidban-movies-2.onrender.com", "_blank");
  }

  function handleOnChat() {
    window.open("https://sidban-chatapp.onrender.com", "_blank");
  }

  function handleOnAuth() {
    window.open("https://sidban-auth.onrender.com", "_blank");
  }

  function handleOnAI() {
    window.open("https://sidbanai.onrender.com", "_blank");
  }

  function handleOnPreview(projectName) {
    setSelectedProject(projectName);

    setPreview(true)
   
  }

  return (
<>
   {  openPreview && (
    <Preview
      openPreview={openPreview}
      setPreview={setPreview}
      selectedProject={selectedProject}

    />
  )}
  

    <div className='projects-container' ref={conatinerRefs}>

      <div className='project-container2' ref={projectRef}>

        <h1 className='project-head'>
          Develop
          <span style={{ color: 'red' }}>ments </span>
          <MdDeveloperMode className='developer-icon' />
        </h1>

       

        <div className={scrollingUp ? 'project-content' : 'project-content-visible'}>
          <div className='projectHeader'>
          <h3 >
            Sid<span className='banText'>ban</span> Movies <MdMovieFilter className='project-icon' />
          </h3>
          <MdPreview className='previewButton' onClick={()=>{handleOnPreview("Sidban Movies")}}></MdPreview>
          </div>

          <div className='project-details'>

            <p className='project-descrip'>
              Sidban Movies is a movie streaming platform offering a dynamic
              and secure online movie-watching experience. The platform allows
              users to explore a variety of marvel movies, and enjoy streaming,
              all while ensuring a seamless and modern user interface.
            </p>
           
            <img
             
              src='/images/sidban-movies-img.png'
              className='sidban-imgs'
              alt='sidban-movies'
            />
            
         

          </div>

          <button
            className='project-button'
            onClick={() => { handleOnMovies() }}
          >
            watch now
          </button>
        </div>

        <br />

       

        <div className={scrollingUp ? 'project-content2' : 'project-content2-visible'}>

          <div className='projectHeader'>
          <h3>
            Sid<span className='banText'>ban</span>-Chat <IoMdChatboxes className='project-icon' />
          </h3>
          <MdPreview className='previewButton' onClick={()=>{handleOnPreview("Sidban Chat")}}></MdPreview>
          </div>
          
          
          <div className='project2-details'>

            <p className='project-descrip'>
              A real-time messaging platform built with the MERN stack and
              Socket.io. Sidban Chat App enables instant one-on-one
              communication with secure user authentication and a responsive design.
            </p>

            <img
              src='/images/sidban-chat-img.png'
              alt='sidban-chat'
              className='sidban-imgs'
            />

          </div>

          <button
            className='project-button'
            onClick={() => { handleOnChat() }}
          >
            chat now
          </button>
        </div>

        <br />

       

        <div className={scrollingUp ? 'project-content' : 'project-content-visible'}>
            <div className='projectHeader'>
         <h3>
            Sid<span className='banText'>ban</span> Auth <SiAuthelia className='project-icon' />
          </h3>
          <MdPreview className='previewButton' onClick={()=>{handleOnPreview("Sidban Auth")}}></MdPreview>
          </div>
          
          

          <div className='project3-details'>

            <p className='project-descrip'>
              sidban-auth is a production-ready authentication system it
              implements secure login and registration flows, with support for
              Google OAuth, and two-factor authentication using QR code + OTP.
            </p>

            <img
              src='/images/sidban-auth-img.png'
              alt='sidban-auth'
              className='sidban-imgs'
            />

          </div>

          <button
            className='project-button'
            onClick={() => { handleOnAuth() }}
          >
            try now
          </button>
        </div>

        <br />

      

        <div className={scrollingUp ? 'project-content2' : 'project-content2-visible'}>
          

              <div className='projectHeader'>
         <h3>
            Sid<span className='banText'>ban</span>AI <GiBrain className='project-icon' />
          </h3>
          <MdPreview className='previewButton' onClick={()=>{handleOnPreview("SidbanAI")}}></MdPreview>
          </div>

          <div className='project4-details'>

            <p className='project-descrip'>
              SidbanAI or Sidban-Intelligence is a modern AI-powered
              conversational platform built to deliver intelligent, fast,
              and engaging interactions for learning, creativity, coding,
              productivity, and everyday assistance through a sleek and
              responsive user experience.
            </p>

            <img
              src='/images/sidbanAI.png'
              alt='sidbanAI'
              className='sidban-imgs'
            />

          </div>

          <button
            className='project-button'
            onClick={() => { handleOnAI() }}
          >
            Start a conversation
          </button>
        </div>

      </div>
     

    </div>
 </>   
  );
}