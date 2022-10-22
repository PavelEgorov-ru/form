import React, { useState, useEffect, useCallback, FC } from "react";
import type { TStepBodyPhone } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { Button } from "@mui/material";
import LayoutStep from "./LayoutStep";
import InputTextField from "../../InputTextField";

const PhoneStep: FC<TStepBodyPhone> = React.memo(
  ({ changeInputForm, phone, code, stepCount, setIsDisabledButtonNext }) => {
    const dispatch = useAppDispatch();

    const [inputsRequired, setInputsRequired] = useState({
      phone: phone,
      code: code,
    });
    const [isDisabledButtonCode, setIsDisabledButtonCode] = useState(true);
    const [isDisabledInput, setIsDisabledInput] = useState(true);

    const sendToState = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        changeInput(e);
        changeInputForm(e);
      },
      []
    );

    const changeInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, required } = e.target;

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
      setIsDisabledInput(false);
    };

    // пока не знаю как правильно типизировать
    const checkRequired = useCallback((obj: any) => {
      for (const key in obj) {
        if (obj[key] === "") {
          setIsDisabledButtonNext(true);
          return;
        }
      }
      setIsDisabledButtonNext(false);
    }, []);

    const checkRequiredPhone = useCallback((code: string) => {
      if (code === "") {
        setIsDisabledButtonCode(true);
        return;
      }
      setIsDisabledButtonCode(false);
    }, []);

    useEffect(() => {
      checkRequired(inputsRequired);
    }, [inputsRequired, checkRequired]);

    useEffect(() => {
      checkRequiredPhone(inputsRequired.phone);
    }, [inputsRequired.phone, checkRequiredPhone]);

    return (
      <LayoutStep stepCount={stepCount}>
        <InputTextField
          name="phone"
          placeholder="Телефон *"
          fullWidth
          required
          onChange={sendToState}
          value={phone}
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
          onChange={sendToState}
          value={code}
          disabled={isDisabledInput}
          margin="dense"
          label={"Код"}
        ></InputTextField>
      </LayoutStep>
    );
  }
);

export default PhoneStep;
