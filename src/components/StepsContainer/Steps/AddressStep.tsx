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

  return (
    <LayoutStep>
      <TextField
        name="country"
        placeholder="Страна *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.country}
      ></TextField>
      <TextField
        name="city"
        placeholder="Город *"
        fullWidth
        required
        onChange={(e) => changeInput(e)}
        value={form.city}
      ></TextField>
      <TextField
        name="street"
        placeholder="Улица"
        fullWidth
        onChange={(e) => changeInput(e)}
        value={form.street}
      ></TextField>
      <TextField
        name="house"
        placeholder="Дом"
        fullWidth
        onChange={(e) => changeInput(e)}
        value={form.house}
      ></TextField>
    </LayoutStep>
  );
};

export default AddressStep;
