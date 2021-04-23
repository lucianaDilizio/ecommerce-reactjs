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
        <SearchBar filterProducts={setFilter} />
        <div className="logo">eCommerce</div>
      </Header>
      <div className="container">
        <div className="rowflex">
          <Categories filterProducts={setFilter} />
          <ProductList
            filter={currentFilter.filter}
            filterType={currentFilter.type}
          />
        </div>
      </div>
    </>
  );
};
