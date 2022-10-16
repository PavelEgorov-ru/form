import { createSlice } from "@reduxjs/toolkit";

import type { TformState } from "./types";

const initialState: TformState = {
  stepCount: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    nextStep(state) {
      if (state.stepCount !== 2) {
        state.stepCount += 1;
      } else {
        state.stepCount = 0;
      }
    },
    backStep(state) {
      state.stepCount -= 1;
    },
  },
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
