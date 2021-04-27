import React from 'react';
import './SearchBar.css';

export const SearchBar = ({ filterProducts, isFilteringByCategory }) => {
  if (isFilteringByCategory) {
    if (document.getElementById('productSearch')) {
      document.getElementById('productSearch').value = '';
    }
  }
  return (
    <input
      id="productSearch"
      className="search"
      type="text"
      placeholder="Search..."
      onChange={(event) => {
        var text = event.target.value;
        text.length < 3 || filterProducts({ filter: text, type: 'text' });
        text.length || filterProducts({ filter: '', type: 'text' });
      }}
    ></input>
  );
};
