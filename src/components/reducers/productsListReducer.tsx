import { FETCH_SUCCESS, FETCH_STARTED } from '../actions/productsListActions';
import { IProduct } from '../../models';
const initialState = {
  list: [],
  loading: false,
};

interface IAction {
  type: string;
  payload: IProduct;
}

export default (
  state: { list: IProduct[]; loading: boolean } = initialState,
  action: IAction,
) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case FETCH_STARTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};
