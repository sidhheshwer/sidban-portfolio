import React, { useContext, useState } from 'react';
import "../stylesheets/achivements.css";
import SidbanContext from '../Context/SidbanContext';
import { MdOutlineReadMore } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
export default function Achivements({ achiveRef }) {
  const {certificates}=useContext(SidbanContext)
  const [show,setShow]=useState(false);
  


function handleOnShow(){
   if(!show){
    setShow(true);
   }
   else{
    setShow(false);
   }
}

function handleOnOpenCoursera(link){
  window.open(link,'_blank');
}


  return (
    <div className='achive-container'  ref= {achiveRef} >
     <h1 className='certificate-head'><span className='white-text'>Creden</span><span className='red-text'>tials</span> <PiCertificateFill className='cicon'/></h1>
      <div className='archive-content'>
        {certificates.map((item, i) => (
          <div className='certificate-div' key={i}>
          
            <img src={item.src} alt={item.courseraAlt || 'certificate-image'} className='certificate-images' />
            <div className='certificate-description'>
              <div className='certificate-title'><p className='uicon'>{item.courseIcon}</p><p className='utext'>{item.text}</p><MdOutlineReadMore className='read-more' onClick={()=>{handleOnShow()}}/></div>
              <p className='certificate-link'> 
                <img src={item.courseraImage} className='coursera-image'  alt={item.courseraAlt} /> 
                
                <FaLink onClick={()=>{handleOnOpenCoursera(item.courseLink)}}/></p>

              <p className={show?'certificate-summary':'certificate-summary-visible'}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
