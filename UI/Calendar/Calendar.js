import { ru } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import moment from "moment";

import s from "./calendar.module.scss";
import { useSelector } from "react-redux";

//Picker background style locates in globals.scss

const Calendar = (props) => {
  const { setDate, setLoading, disablePast } = props;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  const maxDate = new Date(moment().add(11, "M").format("YYYY-MM-DD"));
  const minDate = new Date( !disablePast ? (moment().format("2022-01-01")) : ( moment().format("YYYY-MM-DD") ));

  return (
    <div className={v ? s.ability : null}>
      <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
        <CalendarPicker
          className={v ? s.ability : null}
          onChange={(newDate) => {
            setDate(moment(newDate).format("YYYY-MM-DD"));
            setLoading(true);
          }}
          minDate={minDate}
          maxDate={maxDate}
          disablePast={disablePast}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
