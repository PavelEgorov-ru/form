import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { formActions } from "./services/reducers";

import { Container } from "@mui/material";

import StepContainer from "./components/StepsContainer";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("formState")) {
      dispatch(formActions.initApp(localStorage.getItem("formState")));
    }
  }, []);

  return (
    <Container>
      <StepContainer />
    </Container>
  );
}

export default App;
