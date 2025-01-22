import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice"
import category from "../slices/categorySlice";

export const store = configureStore({
    reducer: {
        authSlice,
        category
    }
})