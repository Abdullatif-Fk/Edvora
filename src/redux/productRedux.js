import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    Products: [],
  },
  reducers: {
    setGroupedProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setGroupedProducts } = cartSlice.actions;
export default cartSlice.reducer;
