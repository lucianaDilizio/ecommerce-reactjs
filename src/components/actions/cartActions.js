export default {
  addToCart: (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: product.amount,
      },
    };
  },
  removeFromCart: (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
  },

  updateAmount: (productId, amount) => {
    return {
      type: 'UPDATE_PRODUCT_AMOUNT',
      payload: { productId, amount },
    };
  },
};
