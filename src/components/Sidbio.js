import React, {  useContext, useEffect, useRef, useState } from 'react'
import '../stylesheets/sidbio.css';
import { MdAdminPanelSettings } from "react-icons/md";
import SidbanContext from '../Context/SidbanContext';
import Contact from './Contact';
export default function Sidbio({sidbioRef}) {
  const [scrolledToTop, setScrolledToTop] = useState(false);
 const [Visiblity, setIsVisibility] = useState(false);
  const { sidbio } = useContext(SidbanContext);
   const conatinerRefs= useRef();


  const nameRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!nameRef.current) return;

      const rect = nameRef.current.getBoundingClientRect();
      const topVisible = rect.top;
      setScrolledToTop(topVisible <0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
    <div className='bio-container' ref={conatinerRefs}>


      <div className='bio-content' ref={sidbioRef}>
        <div ref={nameRef} className={`sid-name ${scrolledToTop ? 'fade-to-sidban' : ''}`}>
          {scrolledToTop ? (
            <>
              <span className='white-text'>Sid</span>
              <span className='red-text'>ban</span>
              <MdAdminPanelSettings className='sidban-icon' />
            </>
          ) : (

            <h1>Sidhheshwer <span style={{ color: 'red' }}> Bansode </span> <MdAdminPanelSettings className='sidban-icon' /></h1>
          )}
        </div>
        <div className="sid-bio">
         <h3 className='sid-degree'>{sidbio.education} </h3>
          <span className='sid-title'>{sidbio.title}</span><br />
           <div className={Visiblity ? 'contact-container-visible':'contact-container'} > <Contact/></div>
          <br/>
           <p className={Visiblity ?   'sid-description':'sid-description-visible'}>
            {sidbio.description}
          </p>
          </div>
      </div>
    </div>
  )
}
