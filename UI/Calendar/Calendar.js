import { ru } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import moment from "moment";

import s from "./calendar.module.scss";

//Picker background style locates in globals.scss

const Calendar = (props) => {
  const { setDate, setLoading } = props;

  return (
    <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
      <CalendarPicker
        onChange={(newDate) => {
          setDate(moment(newDate).format("YYYY-MM-DD"));
          setLoading(true);
        }}
        disablePast
      />
    </LocalizationProvider>
  );
};

export default Calendar;
