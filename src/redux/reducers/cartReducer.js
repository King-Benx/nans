import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      state = [
        ...state.filter(it => it.id !== action.payload.id),
        action.payload,
      ];
      return state.sort((a, b) => a.id - b.id);
    },
    removeItemFromCart: (state, action) => {
      state = state.filter(it => it.id !== action.payload);
      return state.sort((a, b) => a.id - b.id);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice;
