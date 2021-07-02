import React from 'react';
import './Payment.css';
import { Formik } from 'formik';

interface IProps {
  setSuccesfulPayment: (argument: boolean) => void;
}

interface IValues {
  [key: string]: string;
}

const PaymentForm = ({ setSuccesfulPayment }: IProps) => {
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
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        address: '',
        addressNumber: '',
        cardType: 'Visa',
        cardNumber: '',
        cvv: '',
        month: 'January',
        year: '',
      }}
      validate={(values: IValues) => {
        const errors: IValues = {};
        Object.keys(values).map((valueKey: string) => {
          if (!values[valueKey]) {
            errors[valueKey] = 'This field is required.';
          }
        });
        return errors;
      }}
      onSubmit={() => {
        setTimeout(() => {
          setSuccesfulPayment(true);
        }, 400);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        errors,
        values,
        handleChange,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="ui form">
          <h4 className="ui dividing header">Shipping Information</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div
                className={
                  errors.firstname && touched.firstname
                    ? 'field error'
                    : 'field'
                }
              >
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={values.firstname}
                  onChange={handleChange}
                />
              </div>
              <div
                className={
                  errors.lastname && touched.lastname ? 'field error' : 'field'
                }
              >
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={values.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Billing Address</label>
            <div className="fields">
              <div
                className={
                  errors.address && touched.address
                    ? 'twelve wide field error'
                    : 'twelve wide field'
                }
              >
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={values.address}
                  onChange={handleChange}
                />
              </div>
              <div
                className={
                  errors.addressNumber && touched.addressNumber
                    ? 'four wide field error'
                    : 'four wide field'
                }
              >
                <input
                  type="text"
                  name="addressNumber"
                  placeholder="Apt #"
                  value={values.addressNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <h4 className="ui dividing header">Payment Information</h4>
          <div
            className={
              errors.cardType && touched.cardType ? 'field error' : 'field'
            }
          >
            <label>Card Type</label>
            <select
              className="ui fluid search dropdown"
              name="cardType"
              value={values.cardType}
              onChange={handleChange}
            >
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
            <div
              className={
                errors.cardNumber && touched.cardNumber
                  ? 'seven wide field error'
                  : 'seven wide field'
              }
            >
              <label>Card Number</label>
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength={16}
                  name="cardNumber"
                  value={values.cardNumber}
                  onChange={handleChange}
                />
                <i className="credit card icon"></i>
              </div>
            </div>
            <div
              className={
                errors.cvv && touched.cvv
                  ? 'three wide field error'
                  : 'three wide field'
              }
            >
              <label>CVC</label>
              <input
                type="text"
                name="cvv"
                maxLength={3}
                placeholder="cvv"
                value={values.cvv}
                onChange={handleChange}
              />
            </div>
            <div className="six wide field">
              <label>Expiration</label>
              <div className="two fields">
                <div
                  className={
                    errors.month && touched.month ? 'field error' : 'field'
                  }
                >
                  <select
                    className="ui fluid search dropdown"
                    name="month"
                    placeholder="Month"
                    value={values.month}
                    onChange={handleChange}
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
                <div
                  className={
                    errors.year && touched.year ? 'field error' : 'field'
                  }
                >
                  <input
                    type="text"
                    name="year"
                    maxLength={4}
                    placeholder="Year"
                    value={values.year}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="ui green button"
            disabled={isSubmitting}
          >
            PAY
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PaymentForm;
