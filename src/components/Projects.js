import React, { useEffect, useRef, useState } from 'react'
import '../stylesheets/projects.css';
import { MdMovieFilter } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { SiAuthelia } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
export default function Projects({projectRef}) {

   const [scrollingUp, setScrollingUp] = useState(false);
const conatinerRefs=useRef();

useEffect(() => {
  const element = conatinerRefs.current; // ✅ store ref once

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
}, [])

  function handleOnMovies(){
     window.open("https://sidban-movies-2.onrender.com","_blank");
  }

  function handleOnChat(){
    window.open("https://sidban-chatapp.onrender.com","_blank");
  }

  function handleOnAuth(){
    window.open("https://sidban-auth.onrender.com","_blank");
  }

  function handleOnImageClick(){
    console.log("sidban movies image");
  }

  return (
    <div className='projects-container' ref={conatinerRefs} >
       
      <div className='project-container2' ref={projectRef}>
    <h1 className='project-head'>Develop<span style={{ color: 'red' }}>ments </span> <MdDeveloperMode className='devloper-icon' /></h1>
      <div className={scrollingUp ?   'project-content':'project-content-visible'}>
        <h3>Sidban-Movies <MdMovieFilter className='project-icon'/></h3>
        <div className='project-details'>
        <p className='project-descrip'> Sidban Movies is a  movie streaming platform  offering a dynamic and secure online movie-watching experience. The platform allows users to explore a variety of marvel movies, and enjoy streaming, all while ensuring a seamless and modern user interface.</p>
          <img onClick={()=>{handleOnImageClick()}} src='/images/sidban-movies-img.png' className='sidban-imgs' alt='sidban-movies'></img>
   
        </div>
             <button className='project-button' onClick={()=>{handleOnMovies()}}>watch now</button>
      </div>
      <br/>
      <div className={scrollingUp ?   'project-content2':'project-content2-visible'} >
        <h3>Sidban-Chat <IoMdChatboxes className='project-icon'/></h3>
        <div className='project2-details'>
         <p className='project-descrip'>  A real-time messaging platform built with the MERN stack and Socket.io. Sidban Chat App enables instant one-on-one communication with secure user authentication and a responsive design.</p>
         <img src='/images/sidban-chat-img.png' alt='sidban-chat' className='sidban-imgs'></img>
        </div>
      <button className='project-button' onClick={()=>{handleOnChat()}}>chat now</button>
      </div>

       <br/>
      <div className={scrollingUp ?   'project-content':'project-content-visible'}>
        <h3>Sidban-Auth <SiAuthelia className='project-icon'/></h3>
        <div className='project3-details'>
         <p className='project-descrip'>sidban-auth is a production-ready authentication system it implements secure login and registration flows, with support for Google OAuth,and two-factor authentication using QR code + OTP.</p>
          <img src='/images/sidban-auth-img.png' alt='sidban-auth' className='sidban-imgs'></img>
        </div>
        <button className='project-button' onClick={()=>{handleOnAuth()}}>try now</button>
      </div>
      </div>
   </div>
  )
}
