import cn from "classnames";

import OutlinedInput from "@mui/material/OutlinedInput";
import ErrorIcon from "@mui/icons-material/Error";

import s from "./input.module.scss";

const CustomInput = (props) => {
  const {
    label,
    onChange,
    error = false,
    className,
    multiline = false,
    cols,
    rows,
  } = props;

  return (
    <div className={cn(s.inputContainer, className)}>
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
        multiline
        cols={cols}
        rows={rows}
        classes={{
          root: s.input,
          notchedOutline: s.inputBorder,
        }}
        sx={{outline: "none"}}
        className={error ? s.error : null}
      />
    </div>
  );
};

export default CustomInput;
