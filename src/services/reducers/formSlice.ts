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
  isDisabledButtonNext: true,
  isDisabledButtonCode: true,
  isDisabledInput: true,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    initApp(state, action: PayloadAction<string | null>) {
      if (typeof action.payload === "string") {
        const form = JSON.parse(action.payload);
        state.form = { ...form };
      }
    },
    nextStep(state) {
      if (state.form.stepCount !== 2) {
        state.form.stepCount += 1;
        state.isDisabledButtonNext = true;
        localStorage.setItem("formState", JSON.stringify(state.form));
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
    isDisabledButtonNext(state) {
      state.isDisabledButtonNext = false;
    },
    isNoDisabledButtonNext(state) {
      state.isDisabledButtonNext = true;
    },
    isDisabledButtonCode(state) {
      state.isDisabledButtonCode = false;
    },
    isNoDisabledButtonCode(state) {
      state.isDisabledButtonCode = true;
    },
    isDisabledInput(state) {
      state.isDisabledInput = false;
    },
    isNoDisabledInput(state) {
      state.isDisabledInput = true;
    },
    resetForm(state) {
      state.form.stepCount = 0;
      state.form.login = "";
      state.form.email = "";
      state.form.password = "";
      state.form.passwordRepet = "";
      state.form.country = "";
      state.form.city = "";
      state.form.street = "";
      state.form.house = "";
      state.form.phone = "";
      state.form.code = "";
      state.isDisabledButtonNext = true;
      state.isDisabledButtonCode = true;
      state.isDisabledInput = true;
      localStorage.clear();
    },
  },
});

export const formReducers = formSlice.reducer;
export const formActions = formSlice.actions;
