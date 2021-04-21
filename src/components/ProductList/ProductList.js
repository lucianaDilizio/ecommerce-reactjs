import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/data-client';
import { Loading } from '../Loading/Loading';
import './ProductList.css';

export const Product = ({ data }) => {
  return (
    <div className="productContainer" key={data.name}>
      <img style={{ width: 100 + '%' }} alt={data.name} src={data.imgUrl} />
      {data.name}
    </div>
  );
};

export const ProductList = () => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true });
      const responseProductsList = await getProducts();
      if (responseProductsList.success) {
        setState({
          productsList: responseProductsList.content.products,
          loading: false,
        });
      }
    };
    fetchData();
  }, []);

  return state.loading ? (
    <Loading />
  ) : (
    <div className="container">
      <div className="rowflex">
        <section className="col-sm-12">
          {state.productsList.map((product) => {
            return <Product data={product} />;
          })}
        </section>
      </div>
    </div>
  );
};
