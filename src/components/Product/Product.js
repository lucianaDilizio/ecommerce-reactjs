import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Amount } from './Amount/Amount';
import './Product.css';

const Product = ({ data }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
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
          dispatch(
            addToCart({
              id: data.id,
              name: data.name,
              amount: amount,
              price: data.price,
            }),
          );
          setAmount(1);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;
