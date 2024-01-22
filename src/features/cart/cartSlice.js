//importing createSLice from redux toolkit
import { createSlice } from '@reduxjs/toolkit';

//creating cartSlice
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  },
});

//exporting actions
export const { addToCart, removeFromCart } = cartSlice.actions;
//exporting reducer
export const cartReducer = cartSlice.reducer;
//exporting selector function
export const cartSelector = (state) => state.cart.cartItems;