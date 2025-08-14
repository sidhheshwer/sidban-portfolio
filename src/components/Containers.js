import React from 'react'
import '../stylesheets/container.css';
import SkillsContainer from './SkillsContainer';
import Sidbio from './Sidbio';
import FadingWrapper from '../wrapper/FadingWrapper'; 
import '../stylesheets/container.css';
import Academics from './Academics';
import Projects from './Projects';
import Achivements from './Achivements';
export default function Containers({projectRef,sidbioRef,technicalRef,achiveRef,acadamicRef}) {
 




  return (
    <div className='container'>
        <FadingWrapper>
        <Sidbio sidbioRef={sidbioRef}/>
        </FadingWrapper>
   

        <br />

     
         <FadingWrapper>
        <Academics acadamicRef={acadamicRef}/>
        </FadingWrapper>
  
        <br />
        <FadingWrapper>
        <SkillsContainer technicalRef={technicalRef}/>
        </FadingWrapper>
        <br />
        <FadingWrapper>
        <Projects projectRef={projectRef}/>
        </FadingWrapper>
        <br/>
        <FadingWrapper>
        <Achivements achiveRef={achiveRef}/>
        </FadingWrapper>
    </div>
  )
}