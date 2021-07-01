import { IProduct } from '../../models';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (product: IProduct) => {
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

export const removeFromCart = (product: IProduct) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const updateAmount = (product: IProduct) => {
  return {
    type: UPDATE_PRODUCT_AMOUNT,
    payload: product,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
