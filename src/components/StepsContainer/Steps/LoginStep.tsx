import { useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import LayoutStep from "./LayoutStep";
import InputTextField from "../../InputTextField";

const LoginStep = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((store) => store.formState);

  const [inputsRequired, setInputsRequired] = useState({
    email: form.email,
    password: form.password,
    passwordRepet: form.passwordRepet,
  });

  const changeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, required } = e.target;
      dispatch(formActions.sendValue({ [name]: value }));

      if (required) {
        setInputsRequired((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      }
    },
    []
  );

  const checkRequired = useCallback((obj: any) => {
    console.log("вызов функции");
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isDisabledButtonNext());
        return;
      }
    }
    dispatch(formActions.isNoDisabledButtonNext());
  }, []);

  useEffect(() => {
    console.log("сработал useEffect");
    checkRequired(inputsRequired);
    console.log(inputsRequired);
  }, [inputsRequired, checkRequired]);

  return (
    <LayoutStep>
      <InputTextField
        name="login"
        placeholder="Логин"
        fullWidth
        onChange={changeInput}
        value={form.login}
        margin="dense"
        label={"Логин"}
      ></InputTextField>
      <InputTextField
        name="email"
        placeholder="Электронная почта *"
        fullWidth
        required={true}
        onChange={changeInput}
        value={form.email}
        margin="dense"
        label={"Электронная почта"}
      ></InputTextField>
      <InputTextField
        name="password"
        placeholder="Пароль *"
        fullWidth
        required={true}
        onChange={changeInput}
        value={form.password}
        margin="dense"
        label={"Пароль"}
      ></InputTextField>
      <InputTextField
        name="passwordRepet"
        placeholder="Повторите пароль *"
        fullWidth
        required={true}
        onChange={changeInput}
        value={form.passwordRepet}
        margin="dense"
        label={"Повторите пароль"}
      ></InputTextField>
    </LayoutStep>
  );
};

export default LoginStep;
