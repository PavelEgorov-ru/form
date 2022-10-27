import { ReactNode } from "react";

// типы для лейфутов и блоков с шагами
export type TStepContainer = {
  state: TBaseStateForm;
};

export type TLayout = {
  children: ReactNode;
};

export type TStepHeader = {
  stepCount: number;
};

export type TStepButton = {
  nextStep: TonClickBtn;
  backStep: TonClickBtn;
  finishStep: TonClickBtn;
  isDisabledButtonNext: boolean;
  stepCount: number;
};

type TStepBody = {
  changeInputForm: TOnChange;
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

// типы для функций
export type TFunc = () => void;

export type TOnChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export type TonClickBtn = React.MouseEventHandler<HTMLButtonElement>;

export type TChangeActive = React.Dispatch<React.SetStateAction<boolean>>;

// типы для комопнентов
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

export type TBaseStateForm = {
  stepCount: number;
  login: string;
  email: string;
  password: string;
  passwordRepet: string;
  country: string;
  city: string;
  street: string;
  house: string;
  phone: string;
  code: string;
};

export type TInputMargin = "none" | "dense" | "normal" | undefined;
