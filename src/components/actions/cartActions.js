export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: product.amount,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const updateAmount = (productId, amount) => {
  return {
    type: UPDATE_PRODUCT_AMOUNT,
    payload: { productId, amount },
  };
};
