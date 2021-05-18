import React from 'react';
import './SearchBar.css';
import { updateFilter } from '../actions';
import { connect } from 'react-redux';

const SearchBar = ({ selectedFilter, updateFilter }) => {
  if (selectedFilter.type === 'category') {
    if (document.getElementById('productSearch')) {
      document.getElementById('productSearch').value = '';
    }
  }
  return (
    <input
      id="productSearch"
      className="search"
      type="text"
      placeholder="Search product..."
      onChange={(event) => {
        var text = event.target.value;
        text.length < 3 || updateFilter({ filter: text, type: 'text' });
        text.length || updateFilter({ filter: 0, type: 'category' });
      }}
    ></input>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilter: state.filter,
  };
};

export default connect(mapStateToProps, { updateFilter })(SearchBar);
