export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (filter, type) => {
  return {
    type: UPDATE_FILTER,
    payload: {
      filter,
      type,
    },
  };
};
