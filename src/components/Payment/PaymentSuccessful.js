import React, { useState } from 'react';
import { Redirect } from 'react-router';
import './Payment.css';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../actions/cartActions';

const PaymentSuccessful = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  setTimeout(() => {
    setRedirect(true);
  }, 3000);

  if (redirect) {
    dispatch(emptyCart());
    return <Redirect to="/" />;
  }

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <i className="element-animation check circle outline icon"></i>
        <h2>YOUR PAYMENT WAS SUCCESSFUL</h2>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
