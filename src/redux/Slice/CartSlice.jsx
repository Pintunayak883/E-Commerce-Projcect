import { createSlice } from "@reduxjs/toolkit";
const getData = () => {
  const Storedata = localStorage.getItem("cart");
  return Storedata ? JSON.parse(Storedata) : [];
};

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: getData(),
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.qty += 1;
      } else {
        state.cart.push({ ...newItem, qty: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    RemoveItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    IncresQty: (state, action) => {
      const itemId = action.payload;
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    },

    DecresQty: (state, action) => {
      const itemId = action.payload;
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.id === itemId && cartItem.qty > 1
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    },

    RemoveAllItem: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, RemoveItem, RemoveAllItem, IncresQty, DecresQty } =
  CartSlice.actions;
export default CartSlice.reducer;
