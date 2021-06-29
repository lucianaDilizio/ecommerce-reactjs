import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';

interface IProps {
  sortProducts: (argument: { sortBy: number }) => void;
  currentSorting: number;
}

export const SortProducts = ({ sortProducts, currentSorting }: IProps) => {
  const [sortingOptions, setSortingOptions] = useState([
    { id: 0, description: 'string' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const responseSortingOptions: any = await hardcodedClientApi.getSortingOptions();
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
        onChange={(event) =>
          sortProducts({ sortBy: parseInt(event.target.value) })
        }
        value={currentSorting}
      >
        {sortingOptions.map((sortingOption) => (
          <option key={sortingOption.id} value={sortingOption.id}>
            {sortingOption.description}
          </option>
        ))}
      </select>
    </>
  );
};
