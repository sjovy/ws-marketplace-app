// src/components/ProductFilter.js
import React from 'react';

const ProductFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="product-filter">
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
