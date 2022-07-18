import { useState } from "react";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Head from "next/head";

import cn from "classnames";
import Calendar from "UI/Calendar/Calendar";
import Container from "UI/Container/Container";

import s from "styles/pages/Affiche.module.scss";
import moment from "moment";
import "moment/locale/ru";
import AfficheCard from "Components/AfficheCard/AfficheCard";

export default function AffichePage() {
  moment.locale("ru");

  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(moment().format("MMMM"));
  console.log(month);
  

  return (
    <>
      <Head>
        <title>Affiche Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={cn(s.header, s.padding)}>
              <span className={s.oswald}>2022</span>
              <span className={s.oswald}>Афиша</span>
              <span className={s.oswald}>2023</span>
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight, s.monthContainer)}>
          <div className={s.monthClicker}>
              {[...Array(12)].map((m, index) => (
                <span
                  key={`monthSlider_${index}`}
                  className={cn(
                    s.month,
                    month === moment().add(index, "M").format("MMMM")
                      ? s.active
                      : null
                  )}
                  onClick={() =>
                    setMonth(moment().add(index, "M").format("MMMM"))
                  }
                >
                  {console.log(
                    month === moment().add(index, "M").format("MMMM")
                  )}
                  {moment().add(index, "M").format("MMMM")}
                </span>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={cn(s.cards)}>
              <AfficheCard />
              <AfficheCard />
              <AfficheCard />
              <AfficheCard />
              <AfficheCard />
            </div>
          </Container>
        </div>
      </div>

      <Calendar date={date} setDate={setDate} />

      <Footer />
    </>
  );
}
