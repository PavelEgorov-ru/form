import { useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import LayoutStep from "./LayoutStep";
import InputTextField from "../../InputTextField";

const AddressStep = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((store) => store.formState);

  const [inputsRequired, setInputsRequired] = useState({
    country: form.country,
    city: form.city,
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

  const checkRequired = useCallback((obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isDisabledButtonNext());
        return;
      }
    }
    dispatch(formActions.isNoDisabledButtonNext());
  }, []);

  useEffect(() => {
    checkRequired(inputsRequired);
  }, [inputsRequired, checkRequired]);

  return (
    <LayoutStep>
      <InputTextField
        name="country"
        placeholder="Страна *"
        fullWidth
        required
        onChange={changeInput}
        value={form.country}
        margin="dense"
        label={"Страна"}
      ></InputTextField>
      <InputTextField
        name="city"
        placeholder="Город *"
        fullWidth
        required
        onChange={changeInput}
        value={form.city}
        margin="dense"
        label={"Город"}
      ></InputTextField>
      <InputTextField
        name="street"
        placeholder="Улица"
        fullWidth
        onChange={changeInput}
        value={form.street}
        margin="dense"
        label={"Улица"}
      ></InputTextField>
      <InputTextField
        name="house"
        placeholder="Дом"
        fullWidth
        onChange={changeInput}
        value={form.house}
        margin="dense"
        label={"Дом"}
      ></InputTextField>
    </LayoutStep>
  );
};

export default AddressStep;
