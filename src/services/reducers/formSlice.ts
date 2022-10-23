import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {},
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
