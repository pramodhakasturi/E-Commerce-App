//imprting React and useEffect hook
import React, { useEffect } from 'react';
//importing react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//importing useDispatch from react-redux
import { useDispatch } from 'react-redux';
//importing other components
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import CreateProduct from './Components/CreateProduct';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
//importing fetchProducts to fetch from API
import { fetchProducts } from './features/product/productSlice';

//App COmponent
function App() {
  //storing useDispatch in a const
  const dispatch = useDispatch();

  //useEffect to fetchProducts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

//exporting app component
export default App;