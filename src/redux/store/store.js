import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice"
import category from "../slices/categorySlice";
import user from "../slices/userSlice"


export const store = configureStore({
    reducer: {
        authSlice,
        category,
        user
      
    }
})