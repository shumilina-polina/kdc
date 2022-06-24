import { useState } from "react";
import Header from "Components/Header/Header";
import Head from "next/head";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

const minDate = new Date("2020-01-01T00:00:00.000");
const maxDate = new Date("2034-01-01T00:00:00.000");

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Head>
        <title>Affiche Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        {console.log(date)}
      </LocalizationProvider>
    </>
  );
}
