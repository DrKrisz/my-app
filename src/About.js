import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Our massage company offers the best services to help you relax and rejuvenate.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}

export default About;
