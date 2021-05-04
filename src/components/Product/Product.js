import React from 'react';
import { Amount } from './Amount/Amount';

export const Product = ({ data }) => {
  return (
    <div className="productContainer">
      <img style={{ width: 100 + '%' }} alt={data.name} src={data.imgUrl} />
      <div>{data.name}</div>
      <div>${data.price}</div>
      <Amount />
    </div>
  );
};
