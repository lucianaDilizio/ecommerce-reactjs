import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';

export const SortProducts = ({ sortProducts, currentSorting }) => {
  const [sortingOptions, setSortingOptions] = useState([
    { id: 0, description: 'string' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const responseSortingOptions = await hardcodedClientApi.getSortingOptions();
      if (responseSortingOptions.success) {
        setSortingOptions(responseSortingOptions.content.sortingOptions);
      }
    };
    fetchData();
    return () => setSortingOptions([]);
  }, []);

  return (
    <>
      <label>Sort by: </label>
      <select
        onChange={(event) => {
          return sortProducts({ sortBy: parseInt(event.target.value) });
        }}
        value={currentSorting}
      >
        {sortingOptions.map((sortingOption) => {
          return (
            <option key={sortingOption.id} value={sortingOption.id}>
              {sortingOption.description}
            </option>
          );
        })}
      </select>
    </>
  );
};
