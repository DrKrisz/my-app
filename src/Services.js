import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>We offer a variety of massage services to meet your needs.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}

export default Services;
