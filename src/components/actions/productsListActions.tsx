import { hardcodedClientApi } from '../../services/data-client';

export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getProducts = (
  filter: string | number,
  filterType: string,
  sortBy: number,
) => async (dispatch: any) => {
  dispatch({ type: FETCH_STARTED });
  const response = await hardcodedClientApi.getProducts(
    filter,
    filterType,
    sortBy,
  );
  dispatch({ type: FETCH_SUCCESS, payload: response.content.products });
};
