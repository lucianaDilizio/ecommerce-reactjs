import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';
import { Loading } from '../Loading/Loading';
import { NoProductsFound } from '../NoProductsFound/NoProductsFound';
import { Product } from '../Product/Product';
import { SortProducts } from '../SortProducts/SortProducts';
import './ProductList.css';

export const ProductList = ({ filter, filterType, handlerProductToAdd }) => {
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
      const responseProductsList = await hardcodedClientApi.getProducts(
        filter,
        filterType,
        currentSorting.sortBy,
      );
      if (responseProductsList.success) {
        setLoading(false);
        setProductList(responseProductsList.content.products);
      }
    };
    fetchData();
  }, [filter, filterType, currentSorting]);

  if (!productList.length) return <NoProductsFound />;

  return (
    <section className="productList-section">
      {filterType === 'category' ? (
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
              return (
                <Product
                  key={product.id}
                  data={product}
                  handlerProductToAdd={handlerProductToAdd}
                />
              );
            })}
          </section>
        </>
      )}
    </section>
  );
};
