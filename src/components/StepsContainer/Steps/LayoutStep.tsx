import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import type { TLayout } from "../../../types";
import { Card, Button } from "@mui/material";

const LayoutStep: FC<TLayout> = ({ children }) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{
        marginTop: "30px",
        padding: "20px",
      }}
    >
      {children}
      <Button variant="contained">Продолжить</Button>
    </Card>
  );
};

export default LayoutStep;
