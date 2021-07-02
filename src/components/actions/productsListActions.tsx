import { hardcodedClientApi } from '../../services/data-client';
import { IFilter } from '../../models';
export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getProducts = (filter: IFilter, sortBy: number) => async (
  dispatch: any,
) => {
  dispatch({ type: FETCH_STARTED });
  const response = await hardcodedClientApi.getProducts(filter, sortBy);
  dispatch({ type: FETCH_SUCCESS, payload: response.content.products });
};
