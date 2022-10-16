import { useState } from "react";

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  dividerClasses,
} from "@mui/material";

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
      {activeStep === 0 && <div>шаг логин и пароль</div>}
      {activeStep === 1 && <div>шаг где проживаете</div>}
      {activeStep === 2 && <div>шаг номер телефона</div>}
    </Box>
  );
};

export default StepContainer;
