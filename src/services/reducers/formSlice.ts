import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { TFormState } from "./types";

const initialState: TFormState = {
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
        state.isActiveButton = true;
      } else {
        state.form.stepCount = 0;
      }
    },
    backStep(state) {
      state.form.stepCount -= 1;
    },
    sendValue(state, action: PayloadAction<Partial<TFormState["form"]>>) {
      console.log(action.payload);
      state.form = { ...state.form, ...action.payload };
    },
    isActive(state) {
      state.isActiveButton = false;
    },
    isNoActiv(state) {
      state.isActiveButton = true;
    },
  },
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
