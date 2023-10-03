import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export const fetchProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/category`);
    dispatch(setProduct(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export default productSlice.reducer;