import { Checkbox, FormControlLabel } from "@mui/material";
import s from "./customcheckbox.module.scss";

const CustomCheckbox = (props) => {
  const { onChange, value, label } = props;

  return (
    <FormControlLabel
      className={s.checkbox}
      value={value}
      control={
        <Checkbox
          checkedIcon={<img src="/assets/icons/checked.svg" />}
          onChange={(e) => onChange(e.target.checked)}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;
