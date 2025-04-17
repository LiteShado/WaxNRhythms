import React, { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="bg-brick-red text-cream-beige font-body min-h-screen">
      {!hasStarted ? (
        <HomePage onStart={() => setHasStarted(true)} />
      ) : (
        <div className="scene-wrapper text-center p-10">
          <h2 className="text-3xl">🎧 Crate Digging Scene Coming Soon...</h2>
        </div>
      )}
    </div>
  );
}

export default App;

