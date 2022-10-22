import React from "react";
import { useAppSelector } from "../../hooks";

import { Box } from "@mui/material";
import StepsHeader from "./StepsHeader";
import AddressStep from "./Steps/AddressStep";
import PhoneStep from "./Steps/PhoneStep";
import LoginStep from "./Steps/LoginStep";

const StepContainer = React.memo(() => {
  const { stepCount } = useAppSelector((store) => store.formState);
  return (
    <Box component="form" sx={{ width: "100%" }}>
      <StepsHeader stepCount={stepCount} />
      {stepCount === 0 && <LoginStep />}
      {stepCount === 1 && <AddressStep />}
      {stepCount === 2 && <PhoneStep />}
    </Box>
  );
});

export default StepContainer;
