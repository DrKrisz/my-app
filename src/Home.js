// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import myImage from './images/16_9.webp';  // Import the image

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Our Massage Company</h1>
      <p>Experience the best massage therapy services.</p>
      <button onClick={() => navigate('/about')}>Learn More About Us</button>
      <button onClick={() => navigate('/services')}>View Our Services</button>
      <br />
      <img src={myImage} alt="Description of the image" style={{ width: '600px', height: 'auto' }} />
    </div>
  );
}

export default Home;
