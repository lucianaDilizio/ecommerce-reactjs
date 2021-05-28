import React from 'react';
import './Payment.css';

const PaymentForm = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const cards = ['Visa', 'Mastercard', 'American Express', 'Discover'];
  return (
    <form className="ui form">
      <h4 className="ui dividing header">Shipping Information</h4>
      <div className="field">
        <label>Name</label>
        <div className="two fields">
          <div className="field">
            <input type="text" name="firstname" placeholder="First Name" />
          </div>
          <div className="field">
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="field">
        <label>Billing Address</label>
        <div className="fields">
          <div className="twelve wide field">
            <input type="text" name="address" placeholder="Street Address" />
          </div>
          <div className="four wide field">
            <input type="text" name="addressNumber" placeholder="Apt #" />
          </div>
        </div>
      </div>
      <h4 className="ui dividing header">Payment Information</h4>
      <div className="field">
        <label>Card Type</label>
        <select className="ui fluid search dropdown" name="cardType">
          {cards.map((card, index) => {
            return (
              <option key={index} value={card}>
                {card}
              </option>
            );
          })}
        </select>
      </div>
      <div className="fields">
        <div className="seven wide field">
          <label>Card Number</label>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Card Number"
              maxLength="16"
              name="cardNumber"
            />
            <i className="credit card icon"></i>
          </div>
        </div>
        <div className="three wide field">
          <label>CVC</label>
          <input type="text" name="cvv" maxLength="3" placeholder="cvv" />
        </div>
        <div className="six wide field">
          <label>Expiration</label>
          <div className="two fields">
            <div className="field">
              <select
                className="ui fluid search dropdown"
                name="month"
                placeholder="Month"
              >
                {months.map((month, index) => {
                  return (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="field">
              <input type="text" name="year" maxLength="4" placeholder="Year" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
