import { Card, Button } from "@mui/material";
import { FC } from "react";
import type { TLayout } from "../../../types";

const LayoutStep: FC<TLayout> = ({ children }) => {
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
