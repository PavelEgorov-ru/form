import React, { useState, useCallback } from "react";
import { useAppSelector } from "../../hooks";

import { Box, Button, ButtonGroup } from "@mui/material";
import StepsHeader from "./StepsHeader";
import StepsButton from "./StepsButton";
import AddressStep from "./Steps/AddressStep";
import PhoneStep from "./Steps/PhoneStep";
import LoginStep from "./Steps/LoginStep";
import { formActions } from "../../services/reducers";

const StepContainer = () => {
  const [stateForm, setStateForm] = useState({
    stepCount: 2,
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
  const [isDisabledButtonNext, setIsDisabledButtonNext] = useState(true);
  const [isDisabledButtonCode, setIsDisabledButtonCode] = useState(true);
  const [isDisabledInput, setIsDisabledInput] = useState(true);

  // isDisabledButtonNext: true,
  // isDisabledButtonCode: true,
  // isDisabledInput: true,

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

  const finishStep = useCallback(() => {
    alert("отправка формы регистрации");
  }, []);

  return (
    <Box component="form" sx={{ width: "100%" }}>
      <StepsHeader stepCount={stateForm.stepCount} />
      {stateForm.stepCount === 0 && (
        <LoginStep
          changeInputForm={changeInputForm}
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
          country={stateForm.country}
          city={stateForm.city}
          street={stateForm.street}
          house={stateForm.house}
          stepCount={stateForm.stepCount}
        />
      )}
      {stateForm.stepCount === 2 && (
        <PhoneStep
          changeInputForm={changeInputForm}
          phone={stateForm.phone}
          code={stateForm.code}
          stepCount={stateForm.stepCount}
          isDisabledButtonCode={isDisabledButtonCode}
          isDisabledInput={isDisabledInput}
        />
      )}
      <StepsButton
        nextStep={nextStep}
        backStep={backStep}
        finishStep={finishStep}
        stepCount={stateForm.stepCount}
        isDisabledButtonNext={isDisabledButtonNext}
      />
    </Box>
  );
};

export default StepContainer;
