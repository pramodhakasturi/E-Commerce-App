//importing react
import React from 'react';
//importing useSelector and dispatch hook form react redux
import { useSelector, useDispatch } from 'react-redux';
//importing cartSelector and removeCart from cartSlice
import { cartSelector } from '../features/cart/cartSlice';
import { removeFromCart } from '../features/cart/cartSlice';
//importing css
import './Cart.css';

//function of cart component
const Cart = () => {
  //getting cart items from state
  const cartItems = useSelector(cartSelector);
  //storing useDispatch in const
  const dispatch = useDispatch();

  //function to handle remove from cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    alert("Item Removed from Cart");
  };

  //function handle order placed
  const handleOrder = (itemId) => {
    dispatch(removeFromCart(itemId));
    alert("Your Order is Placed");
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {/* if cartItem is empty handle empty cart */}
      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                {/* Buttons to handle remove from cart and place order */}
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                <button onClick={() => handleOrder(item.id)}>Place Your Order</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

//exporting cart component
export default Cart;