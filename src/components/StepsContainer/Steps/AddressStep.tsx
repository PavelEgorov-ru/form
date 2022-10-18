import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const AddressStep = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((store) => store.formState);

  const [inputsRequired, setInputsRequired] = useState({
    country: form.country,
    city: form.city,
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

  const checkRequired = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isDisabledButtonNext());
        return;
      }
    }
    dispatch(formActions.isNoDisabledButtonNext());
  };

  useEffect(() => {
    checkRequired(inputsRequired);
  }, [inputsRequired]);

  return (
    <LayoutStep>
      <TextField
        name="country"
        placeholder="Страна *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.country}
        margin="dense"
        label={"Страна"}
      ></TextField>
      <TextField
        name="city"
        placeholder="Город *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.city}
        margin="dense"
        label={"Город"}
      ></TextField>
      <TextField
        name="street"
        placeholder="Улица"
        fullWidth
        onChange={(e) => changeInput(e)}
        value={form.street}
        margin="dense"
        label={"Улица"}
      ></TextField>
      <TextField
        name="house"
        placeholder="Дом"
        fullWidth
        onChange={(e) => changeInput(e)}
        value={form.house}
        margin="dense"
        label={"Дом"}
      ></TextField>
    </LayoutStep>
  );
};

export default AddressStep;
