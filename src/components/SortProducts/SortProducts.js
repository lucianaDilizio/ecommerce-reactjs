import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';

export const SortProducts = () => {
  const [state, setState] = useState({
    sortingOptions: [{ id: 0, description: 'string' }],
  });

  useEffect(() => {
    const fetchData = async () => {
      const responseSortingOptions = await hardcodedClientApi.getSortingOptions();
      if (responseSortingOptions.success) {
        setState({
          sortingOptions: responseSortingOptions.content.sortingOptions,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {' '}
      <label>Sort by: </label>
      <select>
        <option value="" disabled selected hidden>
          Select an option...
        </option>
        {state.sortingOptions.map((sortingOption) => {
          return (
            <option value={sortingOption.id}>
              {sortingOption.description}
            </option>
          );
        })}
      </select>
    </>
  );
};
