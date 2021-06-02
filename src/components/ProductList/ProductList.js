import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsListActions';
import { SortProducts } from '../SortProducts/SortProducts';
import NoProductsFound from '../NoProductsFound/NoProductsFound';
import { Loading } from '../Loading/Loading';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [currentSorting, setCurrentSorting] = useState({ sortBy: 1 });

  const { currentFilter } = useSelector((state) => state.filter);
  const { list, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(
      getProducts(
        currentFilter.filter,
        currentFilter.type,
        currentSorting.sortBy,
      ),
    );
  }, [currentSorting, currentFilter]);

  if (loading) return <Loading />;
  if (!list.length) return <NoProductsFound />;

  return (
    <section className="productList-section">
      {currentFilter.type === 'category' ? (
        loading || (!loading && list.length > 1) ? (
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
      <>
        <section className="col-sm-12 static-container">
          {list.map((product) => {
            return <Product key={product.id} data={product} />;
          })}
        </section>
      </>
    </section>
  );
};

export default ProductList;
