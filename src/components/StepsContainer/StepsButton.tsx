import React, { FC } from "react";
import type { TStepButton } from "../../types";
import { Button, ButtonGroup } from "@mui/material";

const StepsButton: FC<TStepButton> = React.memo(
  ({ nextStep, backStep, finishStep, stepCount, isDisabledButtonNext }) => {
    const isActiveButtonBack: boolean = stepCount === 0 ? true : false;

    const buttons = [
      <Button
        key="back"
        variant="text"
        onClick={backStep}
        disabled={isActiveButtonBack}
      >
        Назад
      </Button>,
      <Button
        key="next"
        variant="contained"
        onClick={stepCount === 2 ? finishStep : nextStep}
        disabled={isDisabledButtonNext}
      >
        {stepCount === 2 ? "Отправить" : "Продолжить"}
      </Button>,
    ];

    return (
      <ButtonGroup
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {buttons}
      </ButtonGroup>
    );
  }
);

export default StepsButton;
