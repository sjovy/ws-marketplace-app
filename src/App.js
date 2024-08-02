// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
