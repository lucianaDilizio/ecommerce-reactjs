import React, { useEffect, useState } from 'react';
import './Amount.css';

export const Amount = ({ handlerAmount }) => {
  const [amount, setAmount] = useState(1);
  const maxAmount = 10;

  useEffect(() => {
    handlerAmount(amount);
  }, [amount, handlerAmount]);

  return (
    <div className="amount-container">
      <button
        className="amount-action"
        onClick={() => {
          setAmount(amount > 1 ? amount - 1 : amount);
        }}
      >
        -
      </button>
      <input id="amount-input" type="number" value={amount} readOnly></input>
      <button
        className="amount-action"
        onClick={() => {
          setAmount(amount < maxAmount ? amount + 1 : amount);
        }}
      >
        +
      </button>
    </div>
  );
};
