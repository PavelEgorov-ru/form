import { useState, useCallback, useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const LoginStep = () => {
  const [inputsRequired, setInputsRequired] = useState({
    email: "",
    password: "",
    passwordRepet: "",
  });

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, required } = e.target;

    if (required) {
      setInputsRequired({
        ...inputsRequired,
        [name]: value,
      });
    }
  };

  const checkRequired = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") return false;
    }
    return true;
  };

  useEffect(() => {
    console.log(checkRequired(inputsRequired));
  }, [inputsRequired]);

  return (
    <LayoutStep>
      <TextField
        name="login"
        placeholder="Логин"
        fullWidth
        onBlur={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="email"
        placeholder="Электронная почта *"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="password"
        placeholder="Пароль *"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="passwordRepet"
        placeholder="Повторите пароль *"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
    </LayoutStep>
  );
};

export default LoginStep;
