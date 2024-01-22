//importing createSlice from redux toolkit
import { createSlice } from '@reduxjs/toolkit';
//importing getProducts from fetchAPI
import { getProducts } from '../../fetchAPI';

//function to fetch products from API and dispatch in state
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const products = await getProducts();
    if(!products){
      dispatch(setError(true));
    }
    dispatch(setProducts(products));
    dispatch(setLoading(false))
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

//creating productSLice and exporting
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: true,
    error: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      if (existingProduct) {
        Object.assign(existingProduct, action.payload);
      }
    },
    deleteProduct: (state, action) => {
      const id  = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    }
  }
});

//exporting actions
export const { setProducts, addProduct, updateProduct, deleteProduct, setLoading, setError} = productSlice.actions;
//exporting reducer
export const productsReducer = productSlice.reducer;
//exporting Selector function
export const productSelector = (state) => state.products.products;
