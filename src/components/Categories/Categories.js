import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';

export const Categories = ({ filterProducts, currentCategory }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    { id: 0, description: 'string' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responseCategories = await hardcodedClientApi.getCategories();
      if (responseCategories.success) {
        setLoading(false);
        setCategories(responseCategories.content.categories);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedCategory(currentCategory);
  }, [currentCategory]);

  return (
    <>
      <section className="categories-list">
        {loading ? (
          <></>
        ) : (
          <>
            <h3>Categories</h3>
            <ul>
              {categories.map((category) => (
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
