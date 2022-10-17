import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const AddressStep = () => {
  return (
    <LayoutStep>
      <TextField
        name="login"
        placeholder="Логин"
        fullWidth
        // onChange={(e) => changeInput(e)}
        // value={form.login}
      ></TextField>
    </LayoutStep>
  );
};

export default AddressStep;
