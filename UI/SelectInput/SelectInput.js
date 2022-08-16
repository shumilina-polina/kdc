import { useState } from "react";

import cn from "classnames";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import s from "./selectInput.module.scss";

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      boxShadow: "none",
      border: "1px solid black",
      borderTop: "none",
      borderRadius: "0",
    },
  },
};

const SelectInput = (props) => {
  const { label, variants, className, data = [], setData } = props;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setData(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl className={cn(s.form, className)}>
      {data.length < 1 ? (
        <InputLabel classes={{ root: s.root }} shrink={false}>
          {label}
        </InputLabel>
      ) : null}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={data}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        className={s.select}
        classes={{ icon: s.icon }}
      >
        {variants.map((name) => (
          <MenuItem key={name} value={name} className={s.item}>
            <Checkbox
              checked={data.indexOf(name) > -1}
              checkedIcon={<img src="/assets/icons/checked.svg" />}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
