import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import type { TLayout } from "../../../types";
import { Card, Button, Box, ButtonGroup } from "@mui/material";

const LayoutStep: FC<TLayout> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { stepCount } = useAppSelector((store) => store.formState.form);
  const { isActiveButtonNext } = useAppSelector((store) => store.formState);

  const isActiveButtonBack: boolean = stepCount === 0 ? true : false;

  const next: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(formActions.nextStep());
  };

  const back: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(formActions.backStep());
  };

  const finish: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert("конец");
  };

  const buttons = [
    <Button
      key="back"
      variant="text"
      onClick={back}
      disabled={isActiveButtonBack}
    >
      Назад
    </Button>,
    <Button
      key="next"
      variant="contained"
      onClick={stepCount === 2 ? finish : next}
      disabled={isActiveButtonNext}
    >
      {stepCount === 2 ? "Отправить" : "Продолжить"}
    </Button>,
  ];

  return (
    <Card
      sx={{
        marginTop: "30px",
        padding: "20px",
      }}
    >
      {children}
      <Box>
        <ButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {buttons}
        </ButtonGroup>
      </Box>
    </Card>
  );
};

export default LayoutStep;
