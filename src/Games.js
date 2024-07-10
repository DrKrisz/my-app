// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Games page</h1>
      <p>Welcome to the Games page</p>
      <button onClick={() => navigate('/')}>Go to About</button>
    </div>
  );
}

export default Home;
