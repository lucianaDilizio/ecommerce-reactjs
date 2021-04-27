import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';

export const Categories = ({ filterProducts, isSearchingByText }) => {
  const [state, setState] = useState({
    loading: true,
    categories: [{ id: 0, description: 'string' }],
    selectedCategory: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true });
      const responseCategories = await hardcodedClientApi.getCategories();
      if (responseCategories.success) {
        setState({
          loading: false,
          categories: responseCategories.content.categories,
          selectedCategory: null,
        });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isSearchingByText) {
      setState({ ...state, selectedCategory: null });
    }
  }, [state, isSearchingByText]);

  return (
    <>
      <section className="categories-list">
        {state.loading ? (
          <></>
        ) : (
          <>
            <h3>Categories</h3>
            <ul>
              <li
                key="0"
                onClick={() => {
                  setState({ ...state, selectedCategory: null });
                  filterProducts({ filter: '', type: 'text' });
                }}
              >
                {!state.selectedCategory && !isSearchingByText ? '»' : <></>}{' '}
                ALL PRODUCTS
              </li>
              {state.categories.map((category) => (
                <li
                  onClick={() => {
                    setState({ ...state, selectedCategory: category.id });
                    filterProducts({ filter: category.id, type: 'category' });
                  }}
                  key={category.id}
                >
                  {state.selectedCategory === category.id ? '»' : <></>}{' '}
                  {category.description}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};
