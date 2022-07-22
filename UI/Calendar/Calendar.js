import { ru } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

import s from "./calendar.module.scss";

//Picker background style locates in globals.scss

const Calendar = (props) => {
  const { date, setDate, setLoading } = props;

  return (
    <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
      <CalendarPicker
        date={date}
        onChange={(newDate) => {
          setDate(newDate);
          setLoading();
        }}
        disablePast
      />
    </LocalizationProvider>
  );
};

export default Calendar;
