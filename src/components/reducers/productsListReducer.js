export default (productsList = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.payload;
    case 'FETCH_STARTED':
      return { loading: true };
    default:
      return productsList;
  }
};
