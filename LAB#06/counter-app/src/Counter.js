import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  const reset = () => setCount(0);

  return (
    <div className="counter card">
      <div className="counter-header">
        <h2>Simple Counter</h2>
        <p className="subtitle">Increment, decrement or reset the value. Count cannot go below 0.</p>
      </div>

      <div className="display" aria-live="polite">{count}</div>

      <div className="controls">
        <button className="btn primary" onClick={increment} aria-label="Increment">+</button>
        <button className="btn" onClick={decrement} aria-label="Decrement">−</button>
        <button className="btn reset" onClick={reset} aria-label="Reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
