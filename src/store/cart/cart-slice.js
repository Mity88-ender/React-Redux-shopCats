import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "@@GART",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    deleteItem: (state, action) => state.filter(id => id !== action.payload),
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, deleteItem } = cartSlice.actions;
