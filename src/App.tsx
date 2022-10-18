import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { formActions } from "./services/reducers";

import { Container, Typography } from "@mui/material";

import StepContainer from "./components/StepsContainer";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("formState")) {
      dispatch(formActions.initApp(localStorage.getItem("formState")));
    }
  }, []);

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
      <StepContainer />
    </Container>
  );
}

export default App;
