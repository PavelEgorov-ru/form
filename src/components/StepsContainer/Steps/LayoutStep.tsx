import { Card } from "@mui/material";
import { FC } from "react";
import type { TLayout } from "../../../types";

const LayoutStep: FC<TLayout> = ({ children }) => {
  return (
    <Card
      sx={{
        marginTop: "30px",
        padding: "0px 20px",
      }}
    >
      {children}
    </Card>
  );
};

export default LayoutStep;
