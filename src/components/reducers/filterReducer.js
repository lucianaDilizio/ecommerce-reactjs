import { UPDATE_FILTER } from '../actions/filtersActions';
const initialState = {
  currentFilter: { filter: 0, type: 'category' },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        currentFilter: action.payload.filter,
      };
    default:
      return state;
  }
};
