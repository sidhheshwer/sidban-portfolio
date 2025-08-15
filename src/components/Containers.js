import React, { useEffect, useState } from 'react';
import '../stylesheets/container.css';
import SkillsContainer from './SkillsContainer';
import Sidbio from './Sidbio';
import FadingWrapper from '../wrapper/FadingWrapper'; 
import Academics from './Academics';
import Projects from './Projects';
import Achivements from './Achivements';
import Loader from './Loader';

export default function Containers({ projectRef, sidbioRef, technicalRef, achiveRef, acadamicRef }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <FadingWrapper>
        <Sidbio sidbioRef={sidbioRef} />
      </FadingWrapper>

      <br />

      <FadingWrapper>
        <Academics acadamicRef={acadamicRef} />
      </FadingWrapper>

      <br />

      <FadingWrapper>
        <SkillsContainer technicalRef={technicalRef} />
      </FadingWrapper>

      <br />

      <FadingWrapper>
        <Projects projectRef={projectRef} />
      </FadingWrapper>

      <br />

      <FadingWrapper>
        <Achivements achiveRef={achiveRef} />
      </FadingWrapper>
    </div>
  );
}
