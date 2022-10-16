import { createSlice } from "@reduxjs/toolkit";

import type { TformState } from "./types";

const initialState: TformState = {
  stepCount: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {},
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
