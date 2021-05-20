import { hardcodedClientApi } from '../../services/data-client';

export default {
  getProducts: (filter, filterType, sortBy) => async (dispatch) => {
    dispatch({ type: 'FETCH_STARTED' });
    const response = await hardcodedClientApi.getProducts(
      filter,
      filterType,
      sortBy,
    );
    dispatch({ type: 'FETCH_SUCCESS', payload: response.content.products });
  },
};
