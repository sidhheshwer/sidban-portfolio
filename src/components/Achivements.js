import React, { useContext,useState } from 'react';
import "../stylesheets/achivements.css";
import SidbanContext from '../Context/SidbanContext';
import { MdOutlineReadMore } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { MdSwipeLeft } from "react-icons/md";
export default function Achivements({ achiveRef }) {
  const {certificates}=useContext(SidbanContext)
  const [show,setShow]=useState(false);
  const [swipe,setSwipe]=useState(0);
  


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

  function handleOnSwipe() {
    if (swipe < certificates.length-1) {
      setSwipe(swipe + 1);
    } else {
      setSwipe(0);
    }
  }

  return (
    <div className='achive-container'  ref= {achiveRef} >
      <div className='certificate-head'>
      <div>
     <h1 ><span className='white-text'>Creden</span><span className='red-text'>tials</span> <PiCertificateFill className='cicon'/></h1>
     </div>
     <div className='swipeLeftIcon'>
      <MdSwipeLeft  onClick={handleOnSwipe} style={{color:"gold"}}/>
       <p>{swipe+1}/{certificates.length}</p>
       </div>
      </div>
      <div className='archive-content'>
        {certificates.map((item, i) => (
           
          <div className='certificate-div' key={i} style={{transform: `translateX(-${swipe * 130}%)`, transition: '1s ease-in'}}  >
           
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
