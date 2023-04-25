import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CardSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const { setItems } = CardSlice.actions;

export default CardSlice.reducer;
