import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    actualItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    productsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    productsFetched: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.actualItems = action.payload;
      state.error = null;
    },
    productsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.items = [];
      state.actualItems = [];
    },
    searchProducts: (state, action) => {
      if (action.payload) {
        state.items = state.actualItems.filter((e) =>
          e.title.includes(action.payload)
        );
      } else {
        state.items = state.actualItems;
      }
    },
  },
});

export const {
  productsLoading,
  productsFetched,
  productsError,
  searchProducts,
} = productSlice.actions;

export default productSlice.reducer;
