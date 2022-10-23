import React, { useState, useCallback, useEffect, FC } from "react";
import type { TBaseStateForm, TStepContainer } from "../../types";

import { Box } from "@mui/material";
import StepsHeader from "./StepsHeader";
import StepsButton from "./StepsButton";
import AddressStep from "./Steps/AddressStep";
import PhoneStep from "./Steps/PhoneStep";
import LoginStep from "./Steps/LoginStep";

const StepContainer: FC<TStepContainer> = React.memo(({ state }) => {
  const resetState: TBaseStateForm = {
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

  const [stateForm, setStateForm] = useState({
    ...state,
  });
  const [isDisabledButtonNext, setIsDisabledButtonNext] = useState(true);

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
    setStateForm({
      ...resetState,
    });
    localStorage.removeItem("formState");
  }, []);

  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(stateForm));
  }, [stateForm.stepCount]);

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
          setIsDisabledButtonNext={setIsDisabledButtonNext}
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
          setIsDisabledButtonNext={setIsDisabledButtonNext}
        />
      )}
      {stateForm.stepCount === 2 && (
        <PhoneStep
          changeInputForm={changeInputForm}
          phone={stateForm.phone}
          code={stateForm.code}
          stepCount={stateForm.stepCount}
          setIsDisabledButtonNext={setIsDisabledButtonNext}
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
});

export default StepContainer;
