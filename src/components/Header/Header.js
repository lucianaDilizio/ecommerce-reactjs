import React from 'react';
import './Header.css';

export const Header = ({ children }) => {
  return (
    <div className="container header">
      <div className="rowflex">{children}</div>
    </div>
  );
};
