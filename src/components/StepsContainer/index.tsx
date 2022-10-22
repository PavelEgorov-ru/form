import React, { useState, useCallback } from "react";
import { useAppSelector } from "../../hooks";

import { Box } from "@mui/material";
import StepsHeader from "./StepsHeader";
import AddressStep from "./Steps/AddressStep";
import PhoneStep from "./Steps/PhoneStep";
import LoginStep from "./Steps/LoginStep";

const StepContainer = () => {
  // const { stepCount } = useAppSelector((store) => store.formState);
  const [stateForm, setStateForm] = useState({
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
  });

  console.log("htylth");

  const changeInputForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setStateForm((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    },
    []
  );

  const nextStep = useCallback(() => {
    setStateForm((prevState) => {
      return {
        ...prevState,
        stepCount: prevState.stepCount + 1,
      };
    });
  }, []);

  const backStep = useCallback(() => {
    setStateForm((prevState) => {
      return {
        ...prevState,
        stepCount: prevState.stepCount - 1,
      };
    });
  }, []);

  return (
    <Box component="form" sx={{ width: "100%" }}>
      <StepsHeader stepCount={stateForm.stepCount} />
      {stateForm.stepCount === 0 && (
        <LoginStep
          changeInputForm={changeInputForm}
          nextStep={nextStep}
          backStep={backStep}
          login={stateForm.login}
          email={stateForm.email}
          password={stateForm.password}
          passwordRepet={stateForm.passwordRepet}
          stepCount={stateForm.stepCount}
        />
      )}
      {stateForm.stepCount === 1 && (
        <AddressStep
          changeInputForm={changeInputForm}
          nextStep={nextStep}
          backStep={backStep}
          country={stateForm.country}
          city={stateForm.city}
          street={stateForm.street}
          house={stateForm.house}
          stepCount={stateForm.stepCount}
        />
      )}
      {stateForm.stepCount === 2 && <PhoneStep />}
    </Box>
  );
};

export default StepContainer;
