import React, { useContext, useEffect, useRef, useState } from 'react'
import "../stylesheets/academic.css";
import SidbanContext from '../Context/SidbanContext';
import { GiTreeGrowth } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

export default function Academics({acadamicRef}) {
    const { acadamics } = useContext(SidbanContext);
    const [isVisiblity, setIsVisiblity] = useState(false);
    const name2Ref = useRef();
   
const conatinerRefs=useRef();


useEffect(() => {
  const element = conatinerRefs.current; // ✅ store ref once

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        setIsVisiblity(true);
      } else {
        setIsVisiblity(false);
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

    function handleOnNational() {
        window.open(acadamics.national[0].collegeLink, "_blank");
    }
    function handleOnACPCE() {
        window.open(acadamics.acpce[0].collegeLink, "_blank");
    }

    

    return (
        <div className='acadamics-container'  ref={conatinerRefs}>
          <div className='acadamics-content' ref={acadamicRef}>
                <h1><span className='white-text'>Academics</span><span className='red-text'> Journey  </span>  <GiTreeGrowth className='acadamics-head-logo' /></h1>
                {acadamics.national.map((school) => {
                    return (
                        <div className={isVisiblity ? 'acadamics-school' : 'acadamics-school-visible'} key={school.college}>
                            <h2 ref={name2Ref}><FaArrowRight className='arrow-right' /> &nbsp; &nbsp; School &nbsp; <LiaSchoolSolid /></h2>
                            <div className='acadamics-school-details1'>
                                <img src={school.collegeLogo} alt={school.college} className='acadamics-school-logo' />
                                <h4 className='acadamics-school-name' onClick={() => { handleOnNational() }}>{school.college}</h4>
                            </div>

                            <div className='acadamics-school-details2'>
                                <p className='acadamics-school-description'>{school.collegeDescription}</p>
                                <div className='acadamics-school-locations'>
                                   <p className='location'><IoLocation className='location-logo'/> {school.collegeLocation}</p>
                                   <p className='affiation'>{school.collegeAffiliation}</p>
                                </div>
                                <div className='passouts'>
                                    <div>
                                        <p className='acadamics-school-percent'> <span className='percent-label'>SSC</span>: {school.tenthPercentage}  </p>
                                        <p className='acadamics-school-percent'> <span className='percent-label'>HSC</span>: {school.twelthPercentage}</p>
                                    </div>
                                    <div>
                                        <p className='yearsDate'><IoMdPerson className='school-icon'/>{school.sscYear}</p>
                                        <p className='yearsDate'><IoIosPerson className='college-icon'/>{school.hscYear}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <br />
                {acadamics.acpce.map((degree) => {
                    return (
                        <div className={isVisiblity ? 'acadamics-college' : 'acadamics-college-visible'} key={degree.college}>
                            <h2><FaArrowRight className='arrow-right'/>&nbsp; &nbsp; College &nbsp; <IoIosSchool /></h2>
                            <div className='acadamics-school-details1'>
                                <img src={degree.collegeLogo} alt={degree.college} className='acadamics-school-logo' />
                                <h4 className='acadamics-school-name' onClick={() => { handleOnACPCE() }}>{degree.college}</h4>
                            </div>

                            <div className='acadamics-school-details2'>
                                <p className='acadamics-school-description'>{degree.collegeDescription}</p>
                                  <div className='acadamics-school-locations'>
                                   <p className='location'><IoLocation className='location-logo'/> {degree.collegeLocation}</p>
                                   <p className='affiation'>{degree.collegeAffiliation}</p>
                                </div>

                                <div className='passouts'>
                                    <div>
                                        <p className='acadamics-school-percent'><span className='percent-label'>CGPI</span>: {degree.collegeCGPA} </p>
                                    </div>
                                    <div>
                                        <p className='yearsDate'><FaUserGraduate className='graduate-icon' /> {degree.collegeYear}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
   </div> 
        
   )}
