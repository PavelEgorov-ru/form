import { ReactNode } from "react";

export type TLayout = {
  children: ReactNode;
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
