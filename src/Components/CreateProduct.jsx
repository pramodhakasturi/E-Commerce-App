//import react and useState
import React, { useState } from 'react';
//import useDispatch from react redux
import { useDispatch } from 'react-redux';
//import addProduct action from productSlice
import { addProduct } from '../features/product/productSlice';
//importing useNavigate from react router dom
import { useNavigate } from 'react-router-dom';
//import css
import "./CreateProduct.css"

//function for CreateProduct component
const CreateProduct = () => {
  //storing useDispatch and useNavigate in const
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize the product ID counter
  const [productIdCounter, setProductIdCounter] = useState(113);
  // Initialize the dummy state for storing product data
  const [product, setProduct] = useState({
    id: productIdCounter,
    title: '',
    description: '',
    rating: '',
    price: '',
    image: '',
    category: '',
  });

  //function to set Product in dummy state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  //handle submit form function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct(product));
    setProduct({
      ...product,
      id: productIdCounter + 1,
    });
    setProductIdCounter(productIdCounter + 1);
    alert('Product added successfully');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={product.rating}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

//exporting CreateProduct component
export default CreateProduct;