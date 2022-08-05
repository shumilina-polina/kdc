import { Checkbox, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";
import cn from "classnames";

import s from "./customcheckbox.module.scss";

const CustomCheckbox = (props) => {
  const { onChange, value, label, checked } = props;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  return (
    <FormControlLabel
      className={cn(s.checkbox, v ? s.ability : null)}
      value={value}
      control={
        <Checkbox
          checkedIcon={<img src="/assets/icons/checked.svg" />}
          onChange={(e) => onChange(e.target.checked)}
          defaultChecked={checked}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;
