import React from 'react';
import HeroSection from '../components/HeroSection';

function HomePage({ onStart }) {
  return (
    <div className="homepage">
      <HeroSection onStart={onStart} />
    </div>
  );
}

export default HomePage;