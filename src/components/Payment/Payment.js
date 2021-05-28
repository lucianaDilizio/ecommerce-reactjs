import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import PaymentDetail from './PaymentDetail';
import PaymentForm from './PaymentForm';
import PaymentSuccessful from './PaymentSuccessful';

const Payment = () => {
  const [succesfulPayment, setSuccesfulPayment] = useState(false);
  if (succesfulPayment) {
    return <PaymentSuccessful />;
  }
  return (
    <div className="background">
      <h1 className="ui center aligned header">
        <i className="credit card outline icon"></i>PAYMENT
      </h1>
      <div className="ui stackable two column divided grid container">
        <div className="row">
          <div className="column">
            <PaymentForm setSuccesfulPayment={setSuccesfulPayment} />
            <Link to="/" className="ui button">
              BACK
            </Link>
          </div>
          <div className="column">
            <h4 className="ui dividing header">Detail</h4>
            <PaymentDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
