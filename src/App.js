// src/App.js
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';


function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10, quantity: 100, category: 'Category A' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20, quantity: 50, category: 'Category B' },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const editProduct = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <h1>Stock Management System</h1>
      <ProductForm addProduct={addProduct} editProduct={editProduct} />
      <ProductList products={products} editProduct={editProduct} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;


