import React, { useEffect, useState } from 'react';
import { updateFilter } from '../actions/filtersActions';
import { useDispatch, useSelector } from 'react-redux';
import { IFilterState } from '../../models';

const SearchBar = () => {
  const { currentFilter } = useSelector((state: IFilterState) => state.filter);
  const [searching, setSearching] = useState('');
  const [debouncedSearching, setDebouncedSearching] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentFilter.type === 'category') {
      setSearching('');
    }
  }, [currentFilter.type]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearching(searching);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searching]);

  useEffect(() => {
    debouncedSearching.length < 3 ||
      dispatch(updateFilter({ filter: debouncedSearching, type: 'text' }));
    debouncedSearching.length ||
      dispatch(updateFilter({ filter: 0, type: 'category' }));
  }, [debouncedSearching]);

  return (
    <div className="ui icon input">
      <input
        id="productSearch"
        value={searching}
        className="search"
        type="text"
        placeholder="Search product..."
        onChange={(event) => {
          setSearching(event.target.value);
        }}
      ></input>
      <i className="search icon"></i>
    </div>
  );
};

export default SearchBar;
