import { UPDATE_FILTER } from '../actions/filtersActions';
import { IFilter } from '../../models';
const initialState = {
  currentFilter: { filter: 0, type: 'category' },
};

interface IAction {
  type: string;
  payload: IFilter;
}

export default (
  state: { currentFilter: IFilter } = initialState,
  action: IAction,
) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        currentFilter: action.payload,
      };
    default:
      return state;
  }
};
