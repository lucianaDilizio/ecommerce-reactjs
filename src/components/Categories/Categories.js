import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';
import { Loading } from '../Loading/Loading';

export const Categories = ({ filterProducts }) => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true });
      const responseCategories = await hardcodedClientApi.getCategories();
      if (responseCategories.success) {
        setState({
          categories: responseCategories.content.categories,
          loading: false,
        });
      }
    };
    fetchData();
  }, []);

  return state.loading ? (
    <Loading />
  ) : (
    <>
      <section className="categories-list">
        <h3>Categories</h3>
        <ul>
          <li
            key="0"
            onClick={() => filterProducts({ filter: '', type: 'text' })}
          >
            ALL PRODUCTS
          </li>
          {state.categories.map((category) => (
            <li
              onClick={() =>
                filterProducts({ filter: category.id, type: 'category' })
              }
              key={category.id}
            >
              {category.description}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
