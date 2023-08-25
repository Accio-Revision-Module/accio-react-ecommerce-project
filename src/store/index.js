import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productsSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
  middleware: [thunk, logger],
});

export default store;
