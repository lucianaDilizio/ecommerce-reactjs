import React, { useState } from 'react';
import './Amount.css';

export const Amount = () => {
  const [mount, setMount] = useState(1);
  const maxAmount = 10;

  return (
    <div className="amount-container">
      <button onClick={() => setMount(mount > 1 ? mount - 1 : mount)}>-</button>
      <input id="amount-input" type="number" value={mount} readOnly></input>
      <button onClick={() => setMount(mount < maxAmount ? mount + 1 : mount)}>
        +
      </button>
    </div>
  );
};
