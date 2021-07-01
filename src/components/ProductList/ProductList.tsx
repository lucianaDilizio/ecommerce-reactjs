import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productsListActions';
import { SortProducts } from '../SortProducts/SortProducts';
import NoProductsFound from '../NoProductsFound/NoProductsFound';
import { Loading } from '../Loading/Loading';
import Product from '../Product/Product';
import { IProduct, IFilterState, IProductsState } from '../../models';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [currentSorting, setCurrentSorting] = useState({ sortBy: 1 });
  const { currentFilter } = useSelector((state: IFilterState) => state.filter);
  const { list, loading } = useSelector(
    (state: IProductsState) => state.products,
  );

  useEffect(() => {
    dispatch(getProducts(currentFilter, currentSorting.sortBy));
  }, [currentSorting, currentFilter.filter, currentFilter.type]);

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
          {list.map((product: IProduct) => {
            return <Product key={product.id} {...product} />;
          })}
        </section>
      </>
    </section>
  );
};

export default ProductList;
