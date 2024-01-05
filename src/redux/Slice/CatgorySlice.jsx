// CatgorySlice.js

import { createSlice } from "@reduxjs/toolkit";

const CatgorySlice = createSlice({
  name: "category",
  initialState: {
    Category: "All Products",
  },
  reducers: {
    setCatgory: (state, action) => {
      state.Category = action.payload;
    },
  },
});

export const { setCatgory } = CatgorySlice.actions;
export default CatgorySlice.reducer;
