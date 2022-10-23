import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { formActions } from "./services/reducers";

import { Container, Typography } from "@mui/material";

import StepContainer from "./components/StepsContainer";
import { TBaseStateForm } from "./types";

function App() {
  const dispatch = useAppDispatch();
  const state: TBaseStateForm = {
    stepCount: 0,
    login: "",
    email: "",
    password: "",
    passwordRepet: "",
    country: "",
    city: "",
    street: "",
    house: "",
    phone: "",
    code: "",
  };

  const localState: string | null = localStorage.getItem("formState");
  // useEffect(() => {
  //   if (localState !== null) {
  //     const obj: any = JSON.parse(localState);
  //   }
  // }, []);

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Typography
        component="h1"
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Форма регистрации с последовательными шагами
      </Typography>
      <StepContainer state={localState ? JSON.parse(localState) : state} />
    </Container>
  );
}

export default App;
