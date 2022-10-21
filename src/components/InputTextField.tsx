import React, { FC } from "react";
import type { TInputTextField } from "../types";

import { TextField } from "@mui/material";

const InputTextField: FC<TInputTextField> = React.memo(
  ({
    name,
    placeholder,
    value,
    margin,
    label,
    required,
    fullWidth,
    onChange,
  }) => {
    return (
      <TextField
        name={name}
        placeholder={placeholder}
        value={value}
        margin={margin}
        label={label}
        required={required}
        fullWidth={fullWidth}
        onChange={(e) => onChange(e)}
      />
    );
  }
);

export default InputTextField;
