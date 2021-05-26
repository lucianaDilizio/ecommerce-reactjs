import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoProductsFound from '../NoProductsFound/NoProductsFound';
import { Amount } from '../Product/Amount/Amount';
import { updateAmount, removeFromCart } from '../actions/cartActions';
import './Cart.css';
import { Link } from 'react-router-dom';

const CartProductList = () => {
  const { currentCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (!currentCart.length) return <NoProductsFound />;
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
            {currentCart.map((product) => (
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
                              dispatch(updateAmount(product.id, amount))
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
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    X
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-footer">
        <div className="payment-button-container">
          <Link to="/payment" className="general-button">
            PROCEED TO CHECKOUT
          </Link>
        </div>
        <div className="total-container">
          TOTAL: $
          {currentCart
            .map((product) =>
              product.amount ? product.price * product.amount : 0,
            )
            .reduce((acumulator, currentValue) => acumulator + currentValue)}
        </div>
      </div>
    </>
  );
};

export default CartProductList;
