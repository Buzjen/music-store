import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Slices/BasketSlice";
import Card from "./Slices/CardSlice";

export const store = configureStore({
  reducer: { BasketSlice, Card },
});
