import React, { useState } from 'react';
import './Amount.css';

export const Amount = ({ handlerAmount, defaultValue }) => {
  const [amount, setAmount] = useState(defaultValue);

  return (
    <div className="amount-container">
      <button
        className="amount-action"
        onClick={() => {
          const newAmount = amount > 1 ? amount - 1 : amount;
          setAmount(newAmount);
          handlerAmount(newAmount);
        }}
      >
        -
      </button>
      <input
        id="amount-input"
        type="number"
        value={amount}
        onChange={(e) => {
          const newAmount = parseInt(e.target.value);
          setAmount(newAmount);
          handlerAmount(newAmount);
        }}
        onBlur={(e) => {
          const amount = e.target.value;
          e.target.value = parseInt(amount < 1 ? 1 : amount);
          setAmount(parseInt(e.target.value));
          handlerAmount(parseInt(e.target.value));
        }}
      ></input>
      <button
        className="amount-action"
        onClick={() => {
          const newAmount = amount + 1;
          setAmount(newAmount);
          handlerAmount(newAmount);
        }}
      >
        +
      </button>
    </div>
  );
};
