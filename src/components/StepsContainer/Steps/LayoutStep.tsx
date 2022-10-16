import { Card } from "@mui/material";
import { FC } from "react";
import type { TLayout } from "../../../types";

const LayoutStep: FC<TLayout> = ({ children }) => {
  return <Card> {children} </Card>;
};

export default LayoutStep;
