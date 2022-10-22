import { ReactNode } from "react";

export type TLayout = {
  children: ReactNode;
  stepCount: number;
};

export type TStepHeader = {
  stepCount: number;
};

export type TStepButton = {
  nextStep: TFunc;
  backStep: TFunc;
  finishStep: TFunc;
  isDisabledButtonNext: boolean;
  stepCount: number;
};

type TStepBody = {
  changeInputForm: TOnChange;
  stepCount: number;
  setIsDisabledButtonNext: TChangeActive;
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

export type TChangeActive = React.Dispatch<React.SetStateAction<boolean>>;

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
