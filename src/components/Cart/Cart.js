import React, { useEffect, useState } from 'react';
import { NoProductsFound } from '../NoProductsFound/NoProductsFound';
import { Popup } from '../Popup/Popup';
import { Amount } from '../Product/Amount/Amount';
import './Cart.css';

export const Cart = ({ productToAdd }) => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (productToAdd.id) {
      setProducts((products) => {
        let indexExitedProduct = products.findIndex(
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

  const deleteProduct = (id) => {
    setProducts((products) => {
      var indexExitedProduct = products.findIndex(
        (productIndex) => productIndex.id === id,
      );

      if (indexExitedProduct >= 0) {
        products.splice(indexExitedProduct, 1);
      }
      return [...products];
    });
  };

  const updateProductAmount = (amount, id) => {
    setProducts((products) => {
      var indexExitedProduct = products.findIndex(
        (productIndex) => productIndex.id === id,
      );
      if (indexExitedProduct >= 0) {
        products[indexExitedProduct].amount = amount;
      }
      return [...products];
    });
  };

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
          {products.length ? (
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
                    {products.map((product) => (
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
                                      updateProductAmount(amount, product.id)
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
                          {product.amount
                            ? '$' + product.amount * product.price
                            : ''}
                        </td>
                        <td>
                          <span
                            className="delete-icon"
                            title="Delete item"
                            onClick={() => deleteProduct(product.id)}
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
                {products
                  .map((product) =>
                    product.amount ? product.price * product.amount : 0,
                  )
                  .reduce(
                    (acumulator, currentValue) => acumulator + currentValue,
                  )}
              </div>
            </>
          ) : (
            <NoProductsFound />
          )}
        </Popup>
      ) : (
        <></>
      )}
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
