import { useState } from "react";

import { Stepper, Step, StepLabel, Box } from "@mui/material";
import AddressStep from "./Steps/AddressStep";
import PhoneStep from "./Steps/PhoneStep";
import LoginStep from "./Steps/LoginStep";

const steps = ["Логин и пароль", "Где проживаете", "Номер телефона"];

const StepContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && <LoginStep />}
      {activeStep === 1 && <AddressStep />}
      {activeStep === 2 && <PhoneStep />}
    </Box>
  );
};

export default StepContainer;
