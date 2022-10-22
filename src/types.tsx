import { ReactNode } from "react";

export type TLayout = {
  children: ReactNode;
};

export type TStepHeader = {
  stepCount: number;
};

type TstepBody = {
  changeInputForm: TOnChange;
  nextStep: () => void;
  backStep: () => void;
};

export type TStepBodyLogin = TstepBody & {
  login: string;
  email: string;
  password: string;
  passwordRepet: string;
};

export type TStepBodyLAddress = TstepBody & {
  country: string;
  city: string;
  street: string;
  house: string;
};

export type TStepBodyPhone = TstepBody & {
  phone: string;
  code: string;
};

export type TInputMargin = "none" | "dense" | "normal" | undefined;

export type TOnChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

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
