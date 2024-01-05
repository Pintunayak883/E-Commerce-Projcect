import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/CartSlice";
import CatgorySlice from "./Slice/CatgorySlice";
import SearchSlice from "./Slice/SearchSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: CatgorySlice,
    search: SearchSlice,
  },
});

export default store;
