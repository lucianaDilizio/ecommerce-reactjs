export default {
  updateFilter: (filter, type) => {
    return {
      type: 'UPDATE_FILTER',
      payload: {
        filter,
        type,
      },
    };
  },
};
