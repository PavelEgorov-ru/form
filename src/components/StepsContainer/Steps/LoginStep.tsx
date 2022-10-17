import { useState, useCallback, useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const LoginStep = () => {
  const [inputs, setInputs] = useState({
    login: "",
    email: "",
    password: "",
    passwordRepet: "",
  });

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, required } = e.target;
    console.log(name, value, required);
    console.log(inputs);

    if (required) {
      setInputs({
        ...inputs,
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
    console.log(checkRequired(inputs));
  }, [inputs]);

  // console.log("isReq", isReq(inputs));

  return (
    <LayoutStep>
      <TextField
        name="login"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="email"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="password"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="passwordRepet"
        fullWidth
        required
        onBlur={(e) => changeInput(e)}
      ></TextField>
    </LayoutStep>
  );
};

export default LoginStep;
