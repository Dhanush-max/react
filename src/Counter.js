import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="counter-container">
      <button className="counter-btn" onClick={increment}>
        {count}
      </button>
    </div>
  );
}

export default Counter;
