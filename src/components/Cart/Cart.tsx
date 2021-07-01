import React, { useState } from 'react';
import { Popup } from '../Popup/Popup';
import './Cart.css';
import CartProductList from './CartProductList';
import { useSelector } from 'react-redux';
import { ICartState } from '../../models';

const Cart = () => {
  const { currentCart } = useSelector(
    (state: { cart: ICartState }) => state.cart,
  );
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="cart-content">
      <img
        alt="cart"
        className="cart-element"
        src="https://static.thenounproject.com/png/2332-200.png"
        onClick={() => setShowPopup(!showPopup)}
      />
      {showPopup ? (
        <Popup handleShowPopup={setShowPopup}>
          <CartProductList />
        </Popup>
      ) : (
        <></>
      )}
      {currentCart.length ? (
        <span className="globe">
          {currentCart
            .map((product) => product.amount)
            .reduce((acumulator, currentValue) => acumulator + currentValue)}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
