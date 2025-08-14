import React, { useEffect, useState } from 'react';
import '../stylesheets/typing.css'; 

  const phrases = [
    "I'm a Full-Stack Developer...",
    "I build secure web apps...",
    "I work with MERN & Spring Boot..."
  ];

export default function TypingEffect() {


  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingDelay = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentPhrase.length) {
          setDeleting(true);
          setTimeout(() => {}, 1000); // pause before deleting
        }
      } else {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <div className="typing-container">
      <span className="typing-text">{text}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
};


