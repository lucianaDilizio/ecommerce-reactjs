import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { hardcodedClientApi } from '../../services/data-client';
import { Loading } from '../Loading/Loading';
import { NoProductsFound } from '../NoProductsFound/NoProductsFound';
import Product from '../Product/Product';
import { SortProducts } from '../SortProducts/SortProducts';
import './ProductList.css';

const ProductList = ({ selectedFilter }) => {
  const [productList, setProductList] = useState([
    {
      id: 0,
      name: 'string',
      price: 0,
      creationDate: '1979-01-21',
      category: 0,
      imgUrl: 'string',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [currentSorting, setCurrentSorting] = useState({ sortBy: 1 });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(selectedFilter);
      const responseProductsList = await hardcodedClientApi.getProducts(
        selectedFilter.filter,
        selectedFilter.type,
        currentSorting.sortBy,
      );
      if (responseProductsList.success) {
        setLoading(false);
        setProductList(responseProductsList.content.products);
      }
    };
    fetchData();
  }, [selectedFilter, currentSorting]);

  if (!productList.length) return <NoProductsFound />;

  return (
    <section className="productList-section">
      {selectedFilter.type === 'category' ? (
        loading || (!loading && productList.length > 1) ? (
          <section className="sortingSection">
            <SortProducts
              sortProducts={setCurrentSorting}
              currentSorting={currentSorting.sortBy}
            />
          </section>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="col-sm-12">
            {productList.map((product) => {
              return <Product key={product.id} data={product} />;
            })}
          </section>
        </>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFilter: state.filter,
  };
};

export default connect(mapStateToProps)(ProductList);
