import { useState } from "react";

import { ru } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

import s from "styles/pages/Affiche.module.scss";

//Picker background style locates in globals.scss

const minDate = new Date("2020-01-01T00:00:00.000");
const maxDate = new Date("2034-01-01T00:00:00.000");

const Calendar = (props) => {
  const { date, setDate } = props;

  return (
    <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
      <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  );
};

export default Calendar;
