import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Cart ->
      // uid: users uid
      //  -> simple array of objects(products)
      // OR
      // We are using this approach
      // Cart ->
      // uid: autogenerated
      //  -> user_id: users uid
      //     product_id: products id
      state.items = [...state.items, action.payload];
    },
    removeFromCart: () => {},
    clearCart: () => {},
    updateCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
