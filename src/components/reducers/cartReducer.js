import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_AMOUNT,
  EMPTY_CART,
} from '../actions/cartActions';
const initialState = { currentCart: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productAlreadyExistIndex = state.currentCart.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (productAlreadyExistIndex > -1) {
        const updatedCart = state.currentCart.map((product, index) => {
          if (index === productAlreadyExistIndex) {
            product.amount += action.payload.amount;
            return product;
          }
          return product;
        });
        return { ...state, currentCart: updatedCart };
      } else {
        return {
          ...state,
          currentCart: [...state.currentCart, action.payload],
        };
      }
    }
    case REMOVE_FROM_CART: {
      const updatedCart = state.currentCart.filter(
        (product) => product.id !== action.payload,
      );
      return { ...state, currentCart: updatedCart };
    }
    case UPDATE_PRODUCT_AMOUNT: {
      const updatedProduct = state.currentCart.map((product) => {
        if (product.id === action.payload.productId) {
          product.amount = action.payload.amount;
          return product;
        }
        return product;
      });
      return { ...state, currentCart: updatedProduct };
    }
    case EMPTY_CART: {
      return { ...state, currentCart: [] };
    }
    default:
      return state;
  }
};
