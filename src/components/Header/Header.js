import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.css';

export const Header = () => {
  return (
    <div className="container header">
      <div className="rowflex">
        <SearchBar />
      </div>
    </div>
  );
};
