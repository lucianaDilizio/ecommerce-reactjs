import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Loading } from '../Loading/Loading';
import { NoProductsFound } from '../NoProductsFound/NoProductsFound';
import Product from '../Product/Product';
import { SortProducts } from '../SortProducts/SortProducts';
import { getProducts } from '../actions';
import './ProductList.css';

const ProductList = ({ selectedFilter, getProducts, productsList }) => {
  const [currentSorting, setCurrentSorting] = useState({ sortBy: 1 });

  useEffect(() => {
    getProducts(
      selectedFilter.filter,
      selectedFilter.type,
      currentSorting.sortBy,
    );
  }, [selectedFilter, currentSorting]);

  if (!productsList.length && !productsList.loading) return <NoProductsFound />;

  return (
    <section className="productList-section">
      {selectedFilter.type === 'category' ? (
        productsList.loading ||
        (!productsList.loading && productsList.length > 1) ? (
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
      {productsList.loading ? (
        <Loading />
      ) : (
        <>
          <section className="col-sm-12">
            {productsList.map((product) => {
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
    productsList: state.productsList,
  };
};

export default connect(mapStateToProps, { getProducts })(ProductList);
