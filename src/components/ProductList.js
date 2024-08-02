// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';
import ProductFilter from './ProductFilter';
import ProductSort from './ProductSort';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('name');
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1000, description: 'High performance laptop', category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 600, description: 'Latest model smartphone', category: 'Electronics' },
    { id: 3, name: 'Jeans', price: 50, description: 'Comfortable denim jeans', category: 'Clothing' },
    { id: 4, name: 'T-shirt', price: 20, description: 'Casual cotton t-shirt', category: 'Clothing' },
    { id: 5, name: 'Blender', price: 70, description: 'Powerful kitchen blender', category: 'Home Appliances' },
    { id: 6, name: 'Microwave', price: 120, description: 'Compact microwave oven', category: 'Home Appliances' },
    { id: 7, name: 'Book - React Guide', price: 30, description: 'Comprehensive guide on React', category: 'Books' },
    { id: 8, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones', category: 'Electronics' },
    { id: 9, name: 'Sneakers', price: 90, description: 'Comfortable running sneakers', category: 'Clothing' },
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className="container product-list">
      <div className="filter-sort-bar mb-3">
        <ProductFilter 
          categories={['Electronics', 'Clothing', 'Home Appliances', 'Books']} 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <ProductSort 
          selectedSort={selectedSort} 
          onSortChange={handleSortChange} 
        />
      </div>
      <div className="row">
        {sortedProducts.map(product => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
            <ProductItem
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
