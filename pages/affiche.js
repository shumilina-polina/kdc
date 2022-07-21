import { useState } from "react";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Head from "next/head";

import cn from "classnames";
import Calendar from "UI/Calendar/Calendar";
import Container from "UI/Container/Container";

import s from "styles/pages/Affiche.module.scss";
import moment from "moment";
import AfficheCard from "Components/AfficheCard/AfficheCard";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import CustomCheckbox from "UI/CustomCheckbox/CustomCheckbox";
import EventCard from "Components/EventCard/EventCard";
import AfficheComponent from "Components/AfficheComponent/AfficheComponent";

export default function AffichePage() {
  const [date, setDate] = useState(new Date());

  const handleCheckbox = (value) => {};

  return (
    <>
      <Head>
        <title>Affiche Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AfficheComponent />

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={cn(s.calendarTitle, s.padding)}>
              <span>Календарь</span>
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={cn(s.calendarFilters)}>
              <div className={s.description}>
                Вы можете посмотреть все предстоящие мероприятия запланированые
                в один день и отсортировать их.
              </div>
              <div className={s.checkboxGroup}>
                <CustomCheckbox
                  onChange={handleCheckbox}
                  value={0}
                  label="Бесплатные"
                />
                <CustomCheckbox
                  onChange={handleCheckbox}
                  value={9999}
                  label="Платные"
                />
                <CustomCheckbox
                  onChange={handleCheckbox}
                  value={"all"}
                  label="Все"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className={s.wrapper}>
        <Container className={cn(s.container, s.borderLeftRight)}>
          <div className={s.footer}>
            <div className={s.calendar}>
              <Calendar date={date} setDate={setDate} />
            </div>
            <div className={s.eventsCards}>
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
