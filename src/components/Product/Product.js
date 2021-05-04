import React, { useState } from 'react';
import { Amount } from './Amount/Amount';
import './Product.css';

export const Product = ({ data, handlerProductToAdd }) => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="productContainer">
      <img style={{ width: 100 + '%' }} alt={data.name} src={data.imgUrl} />
      <div>{data.name}</div>
      <div>${data.price}</div>
      <Amount handlerAmount={setAmount} />
      <button
        className="add-button"
        onClick={() =>
          handlerProductToAdd({
            id: data.id,
            name: data.name,
            amount: amount,
            price: data.price,
          })
        }
      >
        ADD TO CART
      </button>
    </div>
  );
};
