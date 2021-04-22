import React from 'react';
import { ProductList } from './components/ProductList/ProductList';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header /> <ProductList />
    </>
  );
}

export default App;
