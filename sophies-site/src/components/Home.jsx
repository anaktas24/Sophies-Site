import React from 'react';
import '../styles/Home.css';
import snakebg from '../assets/snakebg.png';


function Home() {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={snakebg} alt="Background" className="background-image" />
        <div className="text-overlay">
          <h1>BIG LETTERS</h1>
          <p>Small letters</p>

        </div>
      </div>
    </div>
  )
}

export default Home;
