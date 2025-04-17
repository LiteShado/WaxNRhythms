import React, { useState } from 'react';
import HomePage from './pages/Homepage';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div>
      {!hasStarted ? (
        <HomePage onStart={() => setHasStarted(true)} />
      ) : (
        <div className="scene-wrapper">
          <h1>🎧 Crate Digging Scene Coming Soon...</h1>
        </div>
      )}
    </div>
  );
}

export default App;