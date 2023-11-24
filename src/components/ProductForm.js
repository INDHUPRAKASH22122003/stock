// src/components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ addProduct, editProduct, productToEdit }) => {
  const [product, setProduct] = useState(productToEdit || { name: '', description: '', price: '', quantity: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      editProduct(product);
    } else {
      addProduct(product);
    }
    setProduct({ name: '', description: '', price: '', quantity: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={product.name} onChange={handleChange} required /><br /><br />
      <label>Description:</label>
      <textarea name="description" value={product.description} onChange={handleChange} required /><br /><br />
      <label>Price:</label>
      <input type="number" name="price" value={product.price} onChange={handleChange} required /><br /><br />
      <label>Quantity:</label>
      <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required /><br /><br />
      <label>Category:</label>
      <input type="text" name="category" value={product.category} onChange={handleChange} required /><br /><br />
      <button type="submit">{productToEdit ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
    