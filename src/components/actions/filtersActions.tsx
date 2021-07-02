import { IFilter } from '../../models';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (filter: IFilter) => {
  return {
    type: UPDATE_FILTER,
    payload: filter,
  };
};
