// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ name, price, description }) => {
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductItem;
