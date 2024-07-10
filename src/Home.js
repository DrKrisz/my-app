// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import myImage from './images/16_9.webp';  // Import the image

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={() => navigate('/games')}>Go to Games</button>
      <br />
      <img src={myImage} alt="Description of the image" style={{ width: '600px', height: 'auto' }} />

    </div>
  );
}

export default Home;
