export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    product: {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: product.amount,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    productId: id,
  };
};

export const updateAmount = (productId, amount) => {
  return {
    type: 'UPDATE_PRODUCT_AMOUNT',
    productId: productId,
    amount: amount,
  };
};
