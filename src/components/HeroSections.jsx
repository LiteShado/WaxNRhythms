import React from 'react';

function HeroSection({ onStart }) {
  return (
    <div className="hero-section min-h-screen flex flex-col items-center justify-center text-center bg-brick-red text-cream-beige p-10">
      <h1 className="text-6xl font-graffiti text-vinyl-orange drop-shadow-md">
        WAX N’ RHYTHMS
      </h1>
      <p className="mt-4 text-lg max-w-xl text-text-muted">
        A soulful journey through sound, self, and legacy.
      </p>
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
