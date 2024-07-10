// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={() => navigate('/games')}>Go to Games</button>
      
    </div>
  );
}

export default Home;
