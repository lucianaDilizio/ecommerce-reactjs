import React, { useEffect, useState } from 'react';
import { hardcodedClientApi } from '../../services/data-client';
import { updateFilter } from '../actions/filtersActions';
import { useSelector, useDispatch } from 'react-redux';

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((state) => state.filter);
  const [selectedCategory, setSelectedCategory] = useState(
    currentFilter.filter,
  );
  const [categories, setCategories] = useState([
    { id: 0, description: 'string' },
  ]);

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
    setSelectedCategory(currentFilter.filter);
  }, [currentFilter]);

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
                    dispatch(
                      updateFilter({ filter: category.id, type: 'category' }),
                    );
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

export default Categories;
