import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { Amount } from './Amount/Amount';
import './Product.css';

const Product = ({ addToCart, data }) => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="productContainer">
      <img style={{ width: 100 + '%' }} alt={data.name} src={data.imgUrl} />
      <div>{data.name}</div>
      <div>${data.price}</div>
      <Amount
        handlerAmount={setAmount}
        defaultValue={1}
        updatedValue={amount}
      />
      <button
        className="add-button"
        onClick={() => {
          addToCart({
            id: data.id,
            name: data.name,
            amount: amount,
            price: data.price,
          });
          setAmount(1);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
