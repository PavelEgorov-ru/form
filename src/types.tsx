import { ReactNode } from "react";

export type TLayout = {
  children: ReactNode;
  stepCount: number;
};

export type TStepHeader = {
  stepCount: number;
};

type TStepBody = {
  changeInputForm: TOnChange;
  nextStep: TFunc;
  backStep: TFunc;
  stepCount: number;
};

export type TStepBodyLogin = TStepBody & {
  login: string;
  email: string;
  password: string;
  passwordRepet: string;
};

export type TStepBodyLAddress = TStepBody & {
  country: string;
  city: string;
  street: string;
  house: string;
};

export type TStepBodyPhone = TStepBody & {
  phone: string;
  code: string;
};

export type TInputMargin = "none" | "dense" | "normal" | undefined;

export type TOnChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export type TFunc = () => void;

export type TInputTextField = {
  name: string;
  placeholder: string;
  value: string;
  margin: TInputMargin;
  label: string;
  onChange: TOnChange;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
};
