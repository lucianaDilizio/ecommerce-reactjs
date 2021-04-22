import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductList/ProductList';
import { SearchBar } from '../SearchBar/SearchBar';

export const ECommerce = () => {
  const [currentFilter, setFilter] = useState({ filter: '' });

  return (
    <>
      <Header>
        <SearchBar filterProducts={setFilter} />
        <div className="logo">eCommerce</div>
      </Header>
      <ProductList filter={currentFilter.filter} />
    </>
  );
};
