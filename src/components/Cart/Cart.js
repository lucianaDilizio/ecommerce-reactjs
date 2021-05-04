import React, { useEffect, useState } from 'react';
import './Cart.css';

export const Cart = ({ productToAdd }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productToAdd.id) {
      setProducts((products) => {
        var indexExitedProduct = products.findIndex(
          (product) => product.id === productToAdd.id,
        );
        if (indexExitedProduct >= 0) {
          products[indexExitedProduct].amount += productToAdd.amount;
          return [...products];
        }
        return [...products, productToAdd];
      });
    }
  }, [productToAdd]);

  return (
    <div className="cart-content">
      <img
        alt="cart"
        className="cart-element"
        src="https://static.thenounproject.com/png/2332-200.png"
      />
      {products.length ? (
        <span className="globe">
          {products
            .map((product) => product.amount)
            .reduce((acumulator, currentValue) => acumulator + currentValue)}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
