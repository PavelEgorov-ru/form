import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { Button, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const PhoneStep = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((store) => store.formState);
  const { isDisabledButtonCode, isDisabledInput } = useAppSelector(
    (store) => store.formState
  );

  const [inputsRequired, setInputsRequired] = useState({
    phone: form.phone,
    code: form.code,
  });

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, required } = e.target;
    dispatch(formActions.sendValue({ [name]: value }));

    if (required) {
      setInputsRequired({
        ...inputsRequired,
        [name]: value,
      });
    }
  };

  const getCode = () => {
    dispatch(formActions.isDisabledInput());
  };

  // пока не знаю как правильно типизировать
  const checkRequired = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isNoDisabledButtonNext());
        return;
      }
    }
    dispatch(formActions.isDisabledButtonNext());
  };

  const checkRequiredPhone = (code: string) => {
    if (code === "") {
      dispatch(formActions.isNoDisabledButtonCode());
      return;
    }
    dispatch(formActions.isDisabledButtonCode());
  };

  useEffect(() => {
    checkRequired(inputsRequired);
  }, [inputsRequired]);

  useEffect(() => {
    checkRequiredPhone(inputsRequired.phone);
  }, [inputsRequired.phone]);

  return (
    <LayoutStep>
      <TextField
        name="phone"
        placeholder="Телефон *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.phone}
      ></TextField>
      <Button
        key="next"
        variant="contained"
        onClick={getCode}
        disabled={isDisabledButtonCode}
      >
        Получить код
      </Button>
      <TextField
        name="code"
        placeholder="Введите полученый код *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.code}
        disabled={isDisabledInput}
      ></TextField>
    </LayoutStep>
  );
};

export default PhoneStep;
