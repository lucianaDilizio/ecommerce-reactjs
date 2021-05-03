import React, { useState } from 'react';
import { Categories } from '../Categories/Categories';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductList/ProductList';
import { SearchBar } from '../SearchBar/SearchBar';

export const ECommerce = () => {
  const [currentFilter, setFilter] = useState({ filter: 0, type: 'category' });

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
            currentCategory={
              currentFilter.type === 'category' ? currentFilter.filter : null
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
