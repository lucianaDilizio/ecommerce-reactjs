export default (currentFilter = { filter: 0, type: 'category' }, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.payload.filter;
    default:
      return currentFilter;
  }
};
