import React from 'react'
import Load from './Load'
import FadingWrapper from '../wrapper/FadingWrapper'; 
import "../stylesheets/loader.css";

export default function Loader() {
  return (
     <div className="loader-div">
      
           <FadingWrapper>
          <Load/>
         </FadingWrapper>
      

      <br />

   
          <FadingWrapper>
          <Load/>
         </FadingWrapper>
    

      <br />

     
            <FadingWrapper>
          <Load/>
         </FadingWrapper>
      

      <br />

         <FadingWrapper>
          <Load/>
         </FadingWrapper>

      <br />

      
        <FadingWrapper>
          <Load/>
         </FadingWrapper>
      
    </div>
  )
}
