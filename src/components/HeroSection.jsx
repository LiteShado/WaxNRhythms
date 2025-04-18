import React from 'react';
import graffitiLogo from '../assets/images/WaxNRhythms Home.png';

function HeroSection({ onStart }) {
  return (
    <div className="hero-section min-h-screen flex flex-col items-center justify-center bg-brick-red p-8 text-center">
      <img
        src={graffitiLogo}
        alt="Wax N' Rhythms Logo"
        className="w-full max-w-[500px] md:max-w-[600px] drop-shadow-xl"
      />
      <button
        className="mt-6 px-6 py-3 bg-subway-gold text-brick-red rounded-xl font-bold hover:bg-vinyl-orange transition-all shadow-lg"
        onClick={onStart}
      >
        Enter The Beat
      </button>
    </div>
  );
}

export default HeroSection;
