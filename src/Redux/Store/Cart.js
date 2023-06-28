import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: !JSON.parse(localStorage.getItem("cart"))
    ? []
    : JSON.parse(localStorage.getItem("cart")),
  reducers: {
    addToCart: (state = [], action) => {
      const isInCart = state.some(
        (product) => product.title === action.payload.title
      );
      if (!isInCart) {
        const newCartProduct = {
          id: state.length + 1,
          title: action.payload.title,
          category: action.payload.category,
          price: action.payload.price,
          image: action.payload.image,
          count: 1,
        };
        state.push(newCartProduct);
      } else {
        const copyCart = [...state];
        copyCart.map((product) => {
          if (product.title === action.payload.title) {
            product.count += 1;
          }
          return product;
        });
      }
      
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
  },
});
export const { addToCart, removeFromCart } = slice.actions;
export default slice.reducer;
