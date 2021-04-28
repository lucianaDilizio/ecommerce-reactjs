import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';

export const Categories = ({ filterProducts, isSearchingByText }) => {
  const [state, setState] = useState({
    loading: true,
    categories: [{ id: 0, description: 'string' }],
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true });
      const responseCategories = await hardcodedClientApi.getCategories();
      if (responseCategories.success) {
        setState({
          loading: false,
          categories: responseCategories.content.categories,
        });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isSearchingByText) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(0);
    }
  }, [isSearchingByText]);

  return (
    <>
      <section className="categories-list">
        {state.loading ? (
          <></>
        ) : (
          <>
            <h3>Categories</h3>
            <ul>
              {state.categories.map((category) => (
                <li
                  onClick={() => {
                    filterProducts({ filter: category.id, type: 'category' });
                    setSelectedCategory(category.id);
                  }}
                  key={category.id}
                >
                  {selectedCategory === category.id ? '»' : <></>}{' '}
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
