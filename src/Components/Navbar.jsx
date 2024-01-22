//import react
import React from 'react';
//import link form react router dom
import { Link } from 'react-router-dom';
//import useSelector from react redux to fetch from state
import { useSelector } from 'react-redux';
//import css
import "./Navbar.css"

//function for Navbar component
const Navbar = () => {
  //getting cart items from state
  const cart = useSelector(state => state.cart.cartItems);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">SHOP-STOP</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Add a Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

//exporting Navbar component
export default Navbar;