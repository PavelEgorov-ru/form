import { createSlice } from "@reduxjs/toolkit";

import type { TformState } from "./types";

const initialState: TformState = {
  form: {
    stepCount: 0,
    login: "",
    email: "",
    password: "",
    passwordRepet: "",
  },
  isActiveButton: true,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    nextStep(state) {
      if (state.form.stepCount !== 2) {
        state.form.stepCount += 1;
      } else {
        state.form.stepCount = 0;
      }
    },
    backStep(state) {
      state.form.stepCount -= 1;
    },
  },
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
