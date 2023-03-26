import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
  name: "who",
  initialState: whoArray,
  reducer:{},
});

export default whoSlice.reducer;