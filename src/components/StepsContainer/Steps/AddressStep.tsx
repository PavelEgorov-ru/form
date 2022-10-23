import React, { useState, useEffect, useCallback, FC } from "react";
import type { TStepBodyLAddress } from "../../../types";

import LayoutStep from "./LayoutStep";
import InputTextField from "../../InputTextField";

const AddressStep: FC<TStepBodyLAddress> = React.memo(
  ({
    changeInputForm,
    country,
    city,
    street,
    house,
    stepCount,
    setIsDisabledButtonNext,
  }) => {
    const [inputsRequired, setInputsRequired] = useState({
      country: country,
      city: city,
    });

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

    const checkRequired = useCallback((obj: any) => {
      for (const key in obj) {
        if (obj[key] === "") {
          setIsDisabledButtonNext(true);
          return;
        }
      }
      setIsDisabledButtonNext(false);
    }, []);

    useEffect(() => {
      checkRequired(inputsRequired);
    }, [inputsRequired, checkRequired]);

    return (
      <LayoutStep stepCount={stepCount}>
        <InputTextField
          name="country"
          placeholder="Страна *"
          fullWidth
          required
          onChange={sendToState}
          value={country}
          margin="dense"
          label={"Страна"}
        ></InputTextField>
        <InputTextField
          name="city"
          placeholder="Город *"
          fullWidth
          required
          onChange={sendToState}
          value={city}
          margin="dense"
          label={"Город"}
        ></InputTextField>
        <InputTextField
          name="street"
          placeholder="Улица"
          fullWidth
          onChange={sendToState}
          value={street}
          margin="dense"
          label={"Улица"}
        ></InputTextField>
        <InputTextField
          name="house"
          placeholder="Дом"
          fullWidth
          onChange={sendToState}
          value={house}
          margin="dense"
          label={"Дом"}
        ></InputTextField>
      </LayoutStep>
    );
  }
);

export default AddressStep;
