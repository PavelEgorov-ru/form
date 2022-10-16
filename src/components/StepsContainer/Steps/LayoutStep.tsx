import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import type { TLayout } from "../../../types";
import { Card, Button } from "@mui/material";

const LayoutStep: FC<TLayout> = ({ children }) => {
  const dispatch = useAppDispatch();

  const next = () => {
    dispatch(formActions.nextStep());
  };

  return (
    <Card
      sx={{
        marginTop: "30px",
        padding: "20px",
      }}
    >
      {children}
      <Button variant="contained" onClick={next}>
        Продолжить
      </Button>
    </Card>
  );
};

export default LayoutStep;
