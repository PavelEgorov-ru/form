import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { TFormState } from "./types";
import type { TBaseStateForm } from "../../types";

const initialState: TFormState = {
  form: {
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
  stepCount: 0,
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
    nextStep(state, action: PayloadAction<TBaseStateForm>) {
      if (state.stepCount !== 2) {
        console.log(action.payload);
        localStorage.setItem("formState", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("formState");
      }
    },
    backStep(state) {
      state.stepCount -= 1;
    },
    sendValue(state, action: PayloadAction<Partial<TFormState["form"]>>) {
      state.form = { ...state.form, ...action.payload };
    },
    isNoDisabledButtonNext(state) {
      state.isDisabledButtonNext = false;
    },
    isDisabledButtonNext(state) {
      state.isDisabledButtonNext = true;
    },
    isNoDisabledButtonCode(state) {
      state.isDisabledButtonCode = false;
    },
    isDisabledButtonCode(state) {
      state.isDisabledButtonCode = true;
    },
    isNoDisabledInput(state) {
      state.isDisabledInput = false;
    },
    isDisabledInput(state) {
      state.isDisabledInput = true;
    },
    resetForm(state) {
      state.stepCount = 0;
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
