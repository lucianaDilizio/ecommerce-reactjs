import React, { useState } from 'react';
import { Popup } from '../Popup/Popup';
import './Cart.css';
import CartProductList from './CartProductList';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
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
      {cart.length ? (
        <span className="globe">
          {cart
            .map((product) => product.amount)
            .reduce((acumulator, currentValue) => acumulator + currentValue)}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(Cart);
