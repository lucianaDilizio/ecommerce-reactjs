import React, { useState } from 'react';
import { Categories } from '../Categories/Categories';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductList/ProductList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Logo } from '../Logo/Logo';
import { Cart } from '../Cart/Cart';

export const ECommerce = () => {
  const [currentFilter, setFilter] = useState({ filter: 0, type: 'category' });
  const [productToAdd, setProductToAdd] = useState({});

  return (
    <>
      <Header>
        <Logo />
        <div className="right-header-elements">
          <SearchBar
            filterProducts={setFilter}
            isFilteringByCategory={
              currentFilter.type === 'category' || !currentFilter.filter
            }
          />
          <Cart productToAdd={productToAdd} />
        </div>
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
            handlerProductToAdd={setProductToAdd}
          />
        </div>
      </div>
    </>
  );
};
