import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slice/products/productsSlice"
import productSlice from "./slice/product/productSlice";
import categorySlice from "./slice/category/categorySlice";

export const store = configureStore({
    reducer:{
        product:productSlice,
        products: productsReducer,
        category: categorySlice,
    }
})