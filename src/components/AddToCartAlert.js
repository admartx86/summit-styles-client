// App.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 2000);  // 2 seconds
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div className={`card ${showCard ? 'show' : ''}`}>
        
      </div>
    </div>
  );
};

export default App;