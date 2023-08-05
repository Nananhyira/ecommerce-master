import { configureStore } from "@reduxjs/toolkit";

// Slices
import cartReducer from "../Slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
