import React, { FC } from "react";
import type { TStepHeader } from "../../types";

import { Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Логин и пароль", "Где проживаете", "Номер телефона"];

const StepsHeader: FC<TStepHeader> = React.memo(({ stepCount }) => {
  return (
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
  );
});

export default StepsHeader;
