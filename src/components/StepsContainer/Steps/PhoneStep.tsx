import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formActions } from "../../../services/reducers";
import { Button, TextField } from "@mui/material";
import LayoutStep from "./LayoutStep";

const PhoneStep = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((store) => store.formState);

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

  // пока не знаю как правильно типизировать
  const checkRequired = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === "") {
        dispatch(formActions.isNoActivButtonNext());
        return;
      }
    }
    dispatch(formActions.isActiveButtonNext());
  };

  useEffect(() => {
    console.log(checkRequired(inputsRequired));
  }, [inputsRequired]);

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
        onChange={(e) => changeInput(e)}
        value={form.code}
      ></TextField>
    </LayoutStep>
  );
};

export default PhoneStep;
