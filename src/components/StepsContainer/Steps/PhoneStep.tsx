import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { Button, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const PhoneStep = () => {
  return (
    <LayoutStep>
      <TextField
        name="phone"
        placeholder="Телефон *"
        fullWidth
        required
        // onChange={(e) => changeInput(e)}
        // value={form.login}
      ></TextField>
      <Button
        key="next"
        variant="contained"
        // onClick={next}
        // disabled={isActiveButton}
      >
        Получить код
      </Button>
      <TextField
        name="code"
        placeholder="Введите полученый код *"
        fullWidth
        required
        // onChange={(e) => changeInput(e)}
        // value={form.email}
      ></TextField>
    </LayoutStep>
  );
};

export default PhoneStep;
