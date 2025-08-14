
import React, { useRef, useEffect, useState } from 'react';
import  '../stylesheets/fadingwrapper.css'; 

const FadingWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [scale,setScal]=useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const top = rect.top;


       
      // Only change when top <= -5
      if (top <= -25) {
        const newOpacity = Math.min(Math.max(top / 100, 0.5), 1);
        const newScalBack = Math.min(Math.max(top / 100, 0.9), 1);

        setOpacity(newOpacity);
        setScal(newScalBack);
      } else {
        // Reset to default values if above threshold
        setOpacity(1);
        setScal(1);
      }
    }
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fading-container" style={{ opacity,transform: `scale(${scale})`}}>
      {children}
    </div>
  );
};

export default FadingWrapper;
