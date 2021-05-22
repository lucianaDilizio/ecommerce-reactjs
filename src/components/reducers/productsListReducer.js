import { FETCH_SUCCESS, FETCH_STARTED } from '../../components/actions/productsListActions'
const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        }
    case FETCH_STARTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};
