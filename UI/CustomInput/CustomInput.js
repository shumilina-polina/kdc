import { useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import ErrorIcon from "@mui/icons-material/Error";

import s from "./input.module.scss";

const CustomInput = (props) => {
  const { label, onChange, error = false } = props;

  return (
    <div className={s.inputContainer}>
      <div className={s.inputHeader}>
        <span className={s.title}>{label}</span>
        {error ? (
          <span className={s.errorMessage}>Обязательное поле</span>
        ) : null}
      </div>
      <OutlinedInput
        variant="outlined"
        endAdornment={error ? <ErrorIcon className={s.icon} /> : null}
        onChange={onChange}
        classes={{
          root: s.input,
          notchedOutline: s.inputBorder,
        }}
        className={error ? s.error : null}
      />
    </div>
  );
};

export default CustomInput;
