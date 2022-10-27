import React, { useState, useEffect, useCallback, FC } from "react";
import type { TStepBodyLogin } from "../../../types";

import LayoutStep from "./LayoutStep";
import InputTextField from "../../InputTextField";

const LoginStep: FC<TStepBodyLogin> = React.memo(
  ({
    changeInputForm,
    login,
    email,
    password,
    passwordRepet,
    setIsDisabledButtonNext,
  }) => {
    const [inputsRequired, setInputsRequired] = useState({
      email: email,
      password: password,
      passwordRepet: passwordRepet,
    });

    const sendToState = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        changeInput(e);
        changeInputForm(e);
      },
      []
    );

    const changeInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, required } = e.target;
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
      for (const key in obj) {
        if (obj[key] === "") {
          setIsDisabledButtonNext(true);
          return;
        }
      }
      setIsDisabledButtonNext(false);
    }, []);

    useEffect(() => {
      checkRequired(inputsRequired);
    }, [inputsRequired, checkRequired]);

    return (
      <LayoutStep>
        <InputTextField
          name="login"
          placeholder="Логин"
          fullWidth
          onChange={sendToState}
          value={login}
          margin="dense"
          label={"Логин"}
        ></InputTextField>
        <InputTextField
          name="email"
          placeholder="Электронная почта *"
          fullWidth
          required={true}
          onChange={sendToState}
          value={email}
          margin="dense"
          label={"Электронная почта"}
        ></InputTextField>
        <InputTextField
          name="password"
          placeholder="Пароль *"
          fullWidth
          required={true}
          onChange={sendToState}
          value={password}
          margin="dense"
          label={"Пароль"}
        ></InputTextField>
        <InputTextField
          name="passwordRepet"
          placeholder="Повторите пароль *"
          fullWidth
          required={true}
          onChange={sendToState}
          value={passwordRepet}
          margin="dense"
          label={"Повторите пароль"}
        ></InputTextField>
      </LayoutStep>
    );
  }
);

export default LoginStep;
