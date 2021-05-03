import React, { useState } from 'react';
import { Categories } from '../Categories/Categories';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductList/ProductList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Logo } from '../Logo/Logo';

export const ECommerce = () => {
  const [currentFilter, setFilter] = useState({ filter: 0, type: 'category' });

  return (
    <>
      <Header>
        <Logo />
        <SearchBar
          filterProducts={setFilter}
          isFilteringByCategory={
            currentFilter.type === 'category' || !currentFilter.filter
          }
        />
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
