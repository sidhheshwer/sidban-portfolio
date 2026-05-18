import React, { useContext, useEffect, useRef, useState } from 'react'
import '../stylesheets/skills.css';
import SidbanContext from '../Context/SidbanContext';
import { FaLaptopCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { PiGitForkFill } from "react-icons/pi";
import TypingEffect from './TypingEffect';
export default function SkillsContainer({technicalRef}) {
  const {skills}=useContext(SidbanContext);
  const [Visiblity, setIsVisibility] = useState(false);
const conatinerRefs=useRef();

useEffect(() => {
  const element = conatinerRefs.current; // ✅ store ref once

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        setIsVisibility(true);
      } else {
        setIsVisibility(false);
      }
    },
    { threshold: 0.1 } // element is "visible" if 10% of it is in view
  );

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) observer.unobserve(element);
  };
}, [])


  return (
    <div className='skills-container' ref={conatinerRefs}>
      <div className='skills-content' ref={technicalRef}>
        <h1><span className='white-text'>Technical</span><span className='red-text'> Proficiencies</span>  <FaLaptopCode className='skills-head-logo' /></h1>

       <div className={Visiblity ? 'tech-description' : 'tech-description-visible'}>
  <p>
    Bringing ideas to life with code from crafting responsive UIs to building robust backend systems,I work across the full stack to deliver seamless web experiences.
  </p>
  <br />
  <TypingEffect />
</div>
       

        <div className={Visiblity ?   'skills-frontend-div':'skills-frontend-div-visible'}>
           <h4 className='skill-title'>Frontend <FaCode className='skills-title-logo'/></h4>
               <div className='skills-frontend-details'>
            {skills.filter(skill => skill.iconf && skill.frontName).map((skill, index) => (
            
           <div className="front-icon" key={index}> {skill.iconf}
            <h3 className="front-name">{skill.frontName}</h3>
            </div>
      
          
        ))}
        </div>

        

        
        <div className={Visiblity ?   'skills-frontend-div':'skills-frontend-div-visible'}>
           <h4  className='skill-title'>Backend <FaFileCode className='skills-title-logo'/></h4>
               <div className='skills-frontend-details'>
            {skills.filter(skill => skill.iconb && skill.backName).map((skill, index) => (
          <div key={index} className="front-icon" > {skill.iconb}
            <h3 className="front-name">{skill.backName}</h3>
          </div>
          
        ))}
        </div>

          <div className={Visiblity ?   'skills-frontend-div':'skills-frontend-div-visible'}>
           <h4  className='skill-title'>Languages <AiFillCode className='skills-title-logo'/></h4>
               <div className='skills-frontend-details'>
            {skills.filter(skill => skill.iconl && skill.languages).map((skill, index) => (
           <div key={index} className="front-icon" > {skill.iconl}
            <h3 className="front-name">{skill.languages}</h3>
          </div>
          
        ))}
        </div>

        
        <div className={Visiblity ?   'skills-frontend-div':'skills-frontend-div-visible'}>
           <h4  className='skill-title'>Databases <FaDatabase className='skills-title-logo' /></h4>
               <div className='skills-frontend-details'>
            {skills.filter(skill => skill.icondb && skill.dbName).map((skill, index) => (
          <div key={index} className="front-icon" > {skill.icondb}
            <h3 className="front-name">{skill.dbName}</h3>
          </div>
          
        ))}
        </div>

        
        <div className={Visiblity ?   'skills-frontend-div':'skills-frontend-div-visible'}>
           <h4  className='skill-title'>Version-Control <PiGitForkFill className='skills-title-logo'/></h4>
               <div className='skills-frontend-details'>
            {skills.filter(skill => skill.iconv && skill.versionControl).map((skill, index) => (
          <div key={index} className="front-icon" > {skill.iconv}
            <h3 className="front-name">{skill.versionControl}</h3>
          </div>
          
        ))}
        </div>
        </div>
      </div>

    </div>
      </div>
      </div>

    </div>

     </div>

  )
}


