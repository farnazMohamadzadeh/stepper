import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Store/Products";
import cartReducer from "./Store/Cart";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
