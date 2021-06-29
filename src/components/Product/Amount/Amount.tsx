import React, { useEffect, useState } from 'react';
import './Amount.css';

interface IProps {
  handlerAmount: (argument: number) => void;
  defaultValue: number;
  updatedValue: number;
}

export const Amount = ({
  handlerAmount,
  defaultValue,
  updatedValue,
}: IProps) => {
  const [amount, setAmount] = useState(defaultValue);

  useEffect(() => {
    setAmount(updatedValue);
  }, [updatedValue]);

  const dispatchHandlerAmount = (newAmount: number) => {
    !newAmount ? handlerAmount(1) : handlerAmount(newAmount);
  };

  return (
    <div className="amount-container">
      <button
        className="amount-action"
        onClick={() => {
          const newAmount = amount > 1 ? amount - 1 : amount;
          setAmount(newAmount);
          dispatchHandlerAmount(newAmount);
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
          dispatchHandlerAmount(newAmount);
        }}
        onBlur={(e) => {
          const amount = parseInt(e.target.value);
          e.target.value = (!amount ? 1 : amount).toString();
          setAmount(parseInt(e.target.value));
          dispatchHandlerAmount(parseInt(e.target.value));
        }}
      ></input>
      <button
        className="amount-action"
        onClick={() => {
          const newAmount = amount + 1;
          setAmount(newAmount);
          dispatchHandlerAmount(newAmount);
        }}
      >
        +
      </button>
    </div>
  );
};
