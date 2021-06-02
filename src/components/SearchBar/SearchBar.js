import React from 'react';
import { updateFilter } from '../actions/filtersActions';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const { currentFilter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  if (currentFilter.type === 'category') {
    if (document.getElementById('productSearch')) {
      document.getElementById('productSearch').value = '';
    }
  }
  return (
    <div className="ui icon input">
      <input
        id="productSearch"
        className="search"
        type="text"
        placeholder="Search product..."
        onChange={(event) => {
          var text = event.target.value;
          text.length < 3 ||
            dispatch(updateFilter({ filter: text, type: 'text' }));
          text.length ||
            dispatch(updateFilter({ filter: 0, type: 'category' }));
        }}
      ></input>
      <i className="search icon"></i>
    </div>
  );
};

export default SearchBar;
