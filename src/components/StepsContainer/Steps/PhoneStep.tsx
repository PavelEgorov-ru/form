import { useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { Button } from "@mui/material";
import LayoutStep from "./LayoutStep";
import InputTextField from "../../InputTextField";

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

  const changeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, required } = e.target;
      dispatch(formActions.sendValue({ [name]: value }));

      if (required) {
        setInputsRequired((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      }
    },
    []
  );

  const getCode = () => {
    dispatch(formActions.isNoDisabledInput());
  };

  // пока не знаю как правильно типизировать
  const checkRequired = useCallback((obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isDisabledButtonNext());
        return;
      }
    }
    dispatch(formActions.isNoDisabledButtonNext());
  }, []);

  const checkRequiredPhone = useCallback((code: string) => {
    if (code === "") {
      dispatch(formActions.isDisabledButtonCode());
      return;
    }
    dispatch(formActions.isNoDisabledButtonCode());
  }, []);

  useEffect(() => {
    checkRequired(inputsRequired);
  }, [inputsRequired, checkRequired]);

  useEffect(() => {
    checkRequiredPhone(inputsRequired.phone);
  }, [inputsRequired.phone, checkRequiredPhone]);

  return (
    <LayoutStep>
      <InputTextField
        name="phone"
        placeholder="Телефон *"
        fullWidth
        required
        onChange={changeInput}
        value={form.phone}
        margin="dense"
        label={"Телефон"}
      ></InputTextField>
      <Button
        key="next"
        variant="contained"
        onClick={getCode}
        disabled={isDisabledButtonCode}
      >
        Получить код
      </Button>
      <InputTextField
        name="code"
        placeholder="Введите полученый код *"
        fullWidth
        required
        onChange={changeInput}
        value={form.code}
        disabled={isDisabledInput}
        margin="dense"
        label={"Код"}
      ></InputTextField>
    </LayoutStep>
  );
};

export default PhoneStep;
