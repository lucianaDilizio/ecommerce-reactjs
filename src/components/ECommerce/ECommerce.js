import React, { useState } from 'react';
import { Categories } from '../Categories/Categories';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductList/ProductList';
import { SearchBar } from '../SearchBar/SearchBar';

export const ECommerce = () => {
  const [currentFilter, setFilter] = useState({ filter: '', type: 'text' });

  return (
    <>
      <Header>
        <SearchBar
          filterProducts={setFilter}
          isFilteringByCategory={
            currentFilter.type === 'category' || !currentFilter.filter
          }
        />
        <div className="logo">eCommerce</div>
      </Header>
      <div className="container">
        <div className="rowflex">
          <Categories
            filterProducts={setFilter}
            isSearchingByText={
              currentFilter.type === 'text' && currentFilter.filter
            }
          />
          <ProductList
            filter={currentFilter.filter}
            filterType={currentFilter.type}
          />
        </div>
      </div>
    </>
  );
};
