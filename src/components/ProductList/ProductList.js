import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsListActions';
import NoProductsFound from '../NoProductsFound/NoProductsFound';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [currentSorting, setCurrentSorting] = useState({ sortBy: 1 });

  const { filter, type } = useSelector(
    (state) => state.filter
  );
  const { list, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts(
      filter,
      type,
      currentSorting.sortBy,
    ));
  }, [currentSorting]);

  if (loading) return <NoProductsFound />;

  return (
    <section className="productList-section">
      {type === 'category' ? (
        loading ||
        (!loading && list.length > 1) ? (
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
      {list.loading ? (
        <Loading />
      ) : (
        <>
          <section className="col-sm-12">
            {list.map((product) => {
              return <Product key={product.id} data={product} />;
            })}
          </section>
        </>
      )}
    </section>
  );
};

export default ProductList;
