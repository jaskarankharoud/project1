import React, { useState, useEffect } from 'react';

const NumberDisplay = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setNumber(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div>
      <h1>Number Display</h1>
      <p>Number: {number}</p>
      {number > 50 ? <p>This is a huge number!</p> : <p>This is a small number.</p>}
      <button onClick={() => setNumber(number + 5)}>Increment</button>
      <button onClick={() => setNumber(number - 5)}>Decrement</button>
    </div>
  );
};

export default NumberDisplay;
