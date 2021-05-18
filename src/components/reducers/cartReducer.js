export default (currentCart = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let productAlreadyExistIndex = currentCart.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (productAlreadyExistIndex > -1) {
        return currentCart.map((product, index) => {
          if (index === productAlreadyExistIndex) {
            product.amount += action.payload.amount;
            return product;
          }
          return product;
        });
      } else {
        return [...currentCart, action.payload];
      }
    case 'REMOVE_FROM_CART':
      return currentCart.filter((product) => product.id !== action.payload);
    case 'UPDATE_PRODUCT_AMOUNT':
      return currentCart.map((product) => {
        if (product.id === action.payload.productId) {
          product.amount = action.payload.amount;
          return product;
        }
        return product;
      });
    default:
      return currentCart;
  }
};
