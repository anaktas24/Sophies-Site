import React from 'react';
import '../styles/Home.css';
import snakebg from '../assets/snakebg.png';
import Line from './Line';
import { useState, useEffect } from 'react';


function Home() {
  const [dotPosition, setDotPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setDotPosition(Math.min(scrollY, 100));
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="main-content">
      <Line dotPosition={dotPosition} />
      <div className="image-container">
        <img src={snakebg} alt="Background" className="background-image" />
        <div className="text-overlay">

          <h1>BIG LETTERS</h1>

        </div>
      </div>
    </div>
  )
}

export default Home;
