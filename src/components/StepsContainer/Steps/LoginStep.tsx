import { useState, useCallback } from "react";
import { Typography, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const LoginStep = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(e.target.name);

    setInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const isReq = (obj: any) => {
    console.log("вызов функции");
    for (const key in obj) {
      if (obj[key] === "") return false;
    }
    return true;
  };

  // console.log("isReq", isReq(inputs));

  return (
    <LayoutStep>
      <Typography> шаг с вводом логина </Typography>
      <TextField
        name="email"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
      ></TextField>
      <TextField
        name="password"
        fullWidth
        onChange={(e) => changeInput(e)}
      ></TextField>
    </LayoutStep>
  );
};

export default LoginStep;
