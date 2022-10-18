import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const LoginStep = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((store) => store.formState);

  const [inputsRequired, setInputsRequired] = useState({
    email: form.email,
    password: form.password,
    passwordRepet: form.passwordRepet,
  });

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, required } = e.target;
    dispatch(formActions.sendValue({ [name]: value }));

    if (required) {
      setInputsRequired({
        ...inputsRequired,
        [name]: value,
      });
    }
  };

  // пока не знаю как правильно типизировать
  const checkRequired = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isNoDisabledButtonNext());
        return;
      }
    }
    dispatch(formActions.isDisabledButtonNext());
  };

  useEffect(() => {
    checkRequired(inputsRequired);
  }, [inputsRequired]);

  return (
    <LayoutStep>
      <TextField
        name="login"
        placeholder="Логин"
        fullWidth
        onChange={(e) => changeInput(e)}
        value={form.login}
      ></TextField>
      <TextField
        name="email"
        placeholder="Электронная почта *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.email}
      ></TextField>
      <TextField
        name="password"
        placeholder="Пароль *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.password}
      ></TextField>
      <TextField
        name="passwordRepet"
        placeholder="Повторите пароль *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.passwordRepet}
      ></TextField>
    </LayoutStep>
  );
};

export default LoginStep;
