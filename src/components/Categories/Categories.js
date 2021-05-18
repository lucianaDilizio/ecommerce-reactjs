import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { hardcodedClientApi } from '../../services/data-client';
import { updateFilter } from '../actions';

const Categories = ({ selectedFilter, updateFilter }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    { id: 0, description: 'string' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedFilter.filter,
  );

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
    setSelectedCategory(selectedFilter.filter);
  }, [selectedFilter.filter]);

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
                    updateFilter({ filter: category.id, type: 'category' });
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

const mapStateToProps = (state) => {
  return {
    selectedFilter: state.filter,
  };
};

export default connect(mapStateToProps, { updateFilter })(Categories);
