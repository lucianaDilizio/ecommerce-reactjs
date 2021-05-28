import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './Payment.css';

const PaymentDetail = () => {
  const { currentCart } = useSelector((state) => state.cart);

  if (!currentCart.length) {
    return <Redirect to="/" />;
  }
  return (
    <table className="ui very basic table">
      <thead>
        <tr>
          <th>Product</th>
          <th></th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {currentCart.map((productCart, index) => {
          return (
            <tr key={index}>
              <td>{productCart.name}</td>
              <td>
                {productCart.amount} X ${productCart.price}
              </td>
              <td>$ {productCart.price * productCart.amount}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>
            <b>TOTAL</b>
          </td>
          <td>
            <b>
              $
              {currentCart
                .map((product) =>
                  product.amount ? product.price * product.amount : 0,
                )
                .reduce(
                  (acumulator, currentValue) => acumulator + currentValue,
                )}
            </b>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PaymentDetail;
