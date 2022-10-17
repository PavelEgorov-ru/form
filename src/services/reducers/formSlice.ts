import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { TFormState } from "./types";

const initialState: TFormState = {
  form: {
    stepCount: 0,
    login: "",
    email: "",
    password: "",
    passwordRepet: "",
    country: "",
    city: "",
    street: "",
    house: "",
    phone: "",
    code: "",
  },
  isActiveButtonNext: true,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    nextStep(state) {
      if (state.form.stepCount !== 2) {
        state.form.stepCount += 1;
        state.isActiveButtonNext = true;
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
    isActiveButtonNext(state) {
      state.isActiveButtonNext = false;
    },
    isNoActivButtonNext(state) {
      state.isActiveButtonNext = true;
    },
  },
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
