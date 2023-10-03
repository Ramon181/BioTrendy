import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export const fetchCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/product/${id}`);
    dispatch(setCategory(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export default categorySlice.reducer;