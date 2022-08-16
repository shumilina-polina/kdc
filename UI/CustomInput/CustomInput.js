import cn from "classnames";

import OutlinedInput from "@mui/material/OutlinedInput";
import ErrorIcon from "@mui/icons-material/Error";

import s from "./input.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const CustomInput = (props) => {
  const {
    label,
    onChange,
    type = "text",
    error = false,
    value,
    className,
    multiline = false,
    cols,
    rows,
  } = props;

  const [isValid, setValid] = useState(false)

  useEffect(() => {
    let reg;
    switch (type) {
      case "email":
        reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        setValid(reg.test(value) || !value.trim())
        return
      case "name":
        reg = /^([а-яё А-ЯЁ]{1,15}|[a-z A-Z]{1,15})$/;
        setValid(reg.test(value) || !value.trim())
        return
      case "phone":
        reg = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
        setValid(reg.test(value) || !value.trim())
        return
      case "message":
        setValid(true)
        return
    }
  }, [value])

  return (
    <div className={cn(s.inputContainer, className)}>
      <div className={s.inputHeader}>
        <span className={s.title}>{label}</span>
        {error ? (
          <span className={s.errorMessage}>Обязательное поле</span>
        ) : null}
      </div>
      <OutlinedInput
        type={type}
        variant="outlined"
        value={value}
        endAdornment={error || !isValid ? <ErrorIcon className={s.icon} /> : null}
        onChange={onChange}
        multiline
        cols={cols}
        rows={rows}
        classes={{
          root: s.input,
          notchedOutline: s.inputBorder,
        }}
        sx={{ outline: "none" }}
        className={error || !isValid ? s.error : null}
      />
    </div>
  );
};

export default CustomInput;
