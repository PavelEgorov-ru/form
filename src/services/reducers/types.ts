export type TFormState = {
  form: TForm;
  isActiveButton: boolean;
};

export type TForm = {
  stepCount: number;
  login: string;
  email: string;
  password: string;
  passwordRepet: string;
  country: string;
  city: string;
  street: string;
  house: string;
};
