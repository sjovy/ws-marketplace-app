// src/components/ProductSort.js
import React from 'react';

const ProductSort = ({ selectedSort, onSortChange }) => {
  return (
    <div className="product-sort">
      <label htmlFor="sort">Sort by: </label>
      <select
        id="sort"
        value={selectedSort}
        onChange={e => onSortChange(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default ProductSort;
