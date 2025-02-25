import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactMarkDown from 'react-markdown';

interface TypingTextProps {
  text: string;
  speed?: number; // Velocidade em ms por caractere
}

export const TypingText: React.FC<TypingTextProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <ReactMarkDown>
      {displayedText || '\u200B'}
    </ReactMarkDown>
  )
  
};
