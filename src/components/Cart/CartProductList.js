import React from 'react';
import { connect } from 'react-redux';
import { NoProductsFound } from '../NoProductsFound/NoProductsFound';
import { Amount } from '../Product/Amount/Amount';
import { updateAmount, removeFromCart } from '../actions';
import './Cart.css';

const CartProductList = ({ cart, updateAmount, removeFromCart }) => {
  if (!cart.length) return <NoProductsFound />;
  return (
    <>
      <div className="detail-container">
        <table className="product-list">
          <thead className="product-list-header">
            <tr>
              <td>PRODUCT</td>
              <td>SUBTOTAL</td>
            </tr>
          </thead>
          <tbody className="product-list-body">
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <table className="product-list-datail">
                    <tbody>
                      <tr>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <td>${product.price}</td>
                      </tr>
                      <tr>
                        <td>
                          <Amount
                            handlerAmount={(amount) =>
                              updateAmount(product.id, amount)
                            }
                            defaultValue={1}
                            updatedValue={product.amount}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  {product.amount ? '$' + product.amount * product.price : ''}
                </td>
                <td>
                  <span
                    className="delete-icon"
                    title="Delete item"
                    onClick={() => removeFromCart(product.id)}
                  >
                    X
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-container">
        TOTAL: $
        {cart
          .map((product) =>
            product.amount ? product.price * product.amount : 0,
          )
          .reduce((acumulator, currentValue) => acumulator + currentValue)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { updateAmount, removeFromCart })(
  CartProductList,
);
