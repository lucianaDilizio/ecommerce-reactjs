import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';
import { Loading } from '../Loading/Loading';
import { SortProducts } from '../SortProducts/SortProducts';
import './ProductList.css';

export const Product = ({ data }) => {
  return (
    <div className="productContainer">
      <img style={{ width: 100 + '%' }} alt={data.name} src={data.imgUrl} />
      <div>{data.name}</div>
      <div>${data.price}</div>
    </div>
  );
};

export const ProductList = ({ filter, filterType }) => {
  const [state, setState] = useState({
    loading: true,
    productsList: [
      {
        id: 0,
        name: 'string',
        price: 0,
        creationDate: '1979-01-21',
        category: 0,
        imgUrl: 'string',
      },
    ],
    sortBy: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true });
      const responseProductsList = await hardcodedClientApi.getProducts(
        filter,
        filterType,
      );
      if (responseProductsList.success) {
        setState({
          productsList: responseProductsList.content.products,
          loading: false,
        });
      }
    };
    fetchData();
  }, [filter, filterType]);

  return (
    <section className="productList-section">
      <section className="sortingSection">
        <SortProducts />
      </section>
      {state.loading ? (
        <Loading />
      ) : (
        <section className="col-sm-12">
          {state.productsList.map((product) => {
            return <Product key={product.id} data={product} />;
          })}
        </section>
      )}
    </section>
  );
};
