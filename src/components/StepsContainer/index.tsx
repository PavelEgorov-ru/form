import { useAppSelector } from "../../hooks";

import { Stepper, Step, StepLabel, Box } from "@mui/material";
import AddressStep from "./Steps/AddressStep";
import PhoneStep from "./Steps/PhoneStep";
import LoginStep from "./Steps/LoginStep";

const steps = ["Логин и пароль", "Где проживаете", "Номер телефона"];

const StepContainer = () => {
  const { stepCount } = useAppSelector((store) => store.form);

  return (
    <Box component="form" sx={{ width: "100%" }}>
      <Stepper activeStep={stepCount}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepCount === 0 && <LoginStep />}
      {stepCount === 1 && <AddressStep />}
      {stepCount === 2 && <PhoneStep />}
    </Box>
  );
};

export default StepContainer;
