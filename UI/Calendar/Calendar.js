import { ru } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import moment from "moment";

import s from "./calendar.module.scss";

//Picker background style locates in globals.scss

const Calendar = (props) => {
  const { setDate, setLoading, disablePast } = props;
  const maxDate = new Date(moment().add(11, "M").format("YYYY-MM-DD"));
  const minDate = new Date(moment().format("YYYY-MM-DD"));

  return (
    <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
      <CalendarPicker
        onChange={(newDate) => {
          setDate(moment(newDate).format("YYYY-MM-DD"));
          setLoading(true);
        }}
        minDate={minDate}
        maxDate={maxDate}
        disablePast={disablePast}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
