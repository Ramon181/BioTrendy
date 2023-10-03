import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/product");
    dispatch(setProducts(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export default productsSlice.reducer;
