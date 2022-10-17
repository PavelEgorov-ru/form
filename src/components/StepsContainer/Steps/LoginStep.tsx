import { useState, useCallback } from "react";
import { Typography, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const LoginStep = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const test = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(e.target.required);

    setInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const isReq = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") return false;
    }
    return true;
  };

  console.log("isReq", isReq(inputs));

  return (
    <LayoutStep>
      <Typography> шаг с вводом логина </Typography>
      <TextField
        id="email"
        fullWidth
        required
        onChange={(e) => test(e)}
      ></TextField>
      <TextField id="password" fullWidth onChange={(e) => test(e)}></TextField>
    </LayoutStep>
  );
};

export default LoginStep;
