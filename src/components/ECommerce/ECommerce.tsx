import React from 'react';
import Categories from '../Categories/Categories';
import { Header } from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';
import { Logo } from '../Logo/Logo';
import Cart from '../Cart/Cart';

export const ECommerce = () => {
  return (
    <>
      <Header>
        <>
          <Logo />
          <div className="right-header-elements">
            <SearchBar />
            <Cart />
          </div>
        </>
      </Header>
      <div className="container">
        <div className="rowflex">
          <Categories />
          <ProductList />
        </div>
      </div>
    </>
  );
};
