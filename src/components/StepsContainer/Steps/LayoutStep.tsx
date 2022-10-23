import React, { FC } from "react";
import type { TLayout } from "../../../types";

import { Card } from "@mui/material";

const LayoutStep: FC<TLayout> = React.memo(({ children }) => {
  return (
    <Card
      sx={{
        marginTop: "30px",
        padding: "20px",
      }}
    >
      {children}
    </Card>
  );
});

export default LayoutStep;
