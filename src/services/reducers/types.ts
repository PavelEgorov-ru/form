export type TFormState = {
  form: TForm;
  isActiveButtonNext: boolean;
  isActiveButtonCode: boolean;
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
  phone: string;
  code: string;
};
