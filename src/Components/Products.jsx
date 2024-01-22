//importing react and useState
import React, { useState } from 'react';
//importing icons from react-icons package
import { FaEdit, FaTrash } from 'react-icons/fa';
//import link from react router dom
import { Link } from 'react-router-dom';
//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from 'react-redux';
//import addToCart action from cartSlice
import { addToCart } from '../features/cart/cartSlice';
//importing fetchproducts and productSelector function from productSlice
import { productSelector } from '../features/product/productSlice';
//importing actions from productSlice
import { setProducts, updateProduct, deleteProduct } from '../features/product/productSlice';
//importing css
import './Products.css';

//function for Products component
const Products = () => {
  //getting products from state using useSelectot
  const products = useSelector(productSelector);
  //using useDispatch
  const dispatch = useDispatch();
  //setting dummy state for edited product
  const [editedProduct, setEditedProduct] = useState(null);
  //getting error and loading form products state using useSelector
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  //function to handle Edit
  const handleEdit = (product) => {
    setEditedProduct({ ...product });
  };

  //function to handle delete
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    alert('Product deleted successfully');
  };

  //function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  //function to save edited product
  const handleSave = () => {
    dispatch(updateProduct(editedProduct));
    setEditedProduct(null);
    alert('Product updated successfully');
  };

  //function to add product to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert('Product added to cart');
  };

  //function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="rating-star">★</span>);
      } else {
        stars.push(<span key={i} className="grey-star">★</span>);
      }
    }
    return stars;
  };

  //function to apply sort by price fuctionality
  const sortByPrice = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    dispatch(setProducts(sortedProducts));
  };


  return (
    <div>
      {/* if there is any error in fetching show error else render products */}
      {error === true ? <h2>Error in Fetching Products from given API</h2> :
        <div>
          {/* if loading is true show loading text */}
          {loading === true ? <h2>...Loading</h2> :
            <div>
              <div className='btn-div'>
                <button onClick={sortByPrice}>Sort by Price</button>
              </div>

              <div className="product-container">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    {/* shoeing edit form if edit button is clicked */}
                    {editedProduct && editedProduct.id === product.id ? (
                      <div className="edit-form">
                        Title -
                        <input
                          type="text"
                          name="title"
                          value={editedProduct.title}
                          onChange={handleInputChange}
                        />
                        <br />
                        Description -
                        <input
                          type="text"
                          name="description"
                          value={editedProduct.description}
                          onChange={handleInputChange}
                        />
                        <br />
                        Rating -
                        <input
                          type="number"
                          name="rating"
                          value={editedProduct.rating}
                          onChange={handleInputChange}
                        />
                        <br />
                        Price -
                        <input
                          type="number"
                          name="price"
                          value={editedProduct.price}
                          onChange={handleInputChange}
                        />
                        <br />
                        Image URL -
                        <input
                          type="text"
                          name="image"
                          value={editedProduct.image}
                          onChange={handleInputChange}
                        />
                        <br />
                        Category -
                        <input
                          type="text"
                          name="category"
                          value={editedProduct.category}
                          onChange={handleInputChange}
                        />
                        <br />
                        <button onClick={handleSave}>Save</button>
                      </div>

                    ) : (
                      <>
                        <Link to={`/products/${product.id}`} className="product-link">
                          <img src={product.image} alt={product.title} className="product-image" />
                          <p className="product-name">{product.title}</p>
                        </Link>
                        <p>{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <div className="product-rating">
                          <span>Rating:</span>
                          {renderStars(product.rating)}
                        </div>
                        <p className="product-category">Category: {product.category}</p>
                        <div className='addCart-div'>
                          <FaEdit onClick={() => handleEdit(product)} className="edit-icon" />
                          <FaTrash onClick={() => handleDelete(product.id)} className="delete-icon" />
                          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
};

//exporting Products component
export default Products;