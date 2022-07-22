import { useEffect, useState } from "react";

import cn from "classnames";
import moment from "moment";
import Calendar from "UI/Calendar/Calendar";
import Container from "UI/Container/Container";

import CustomCheckbox from "UI/CustomCheckbox/CustomCheckbox";
import EventCard from "Components/EventCard/EventCard";

import s from "./eventsComponent.module.scss";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";

const EventsComponent = () => {
  const [date, setDate] = useState(new Date());
  const [free, setFree] = useState(false);
  const [pay, setPay] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (loading) {
      const requestDate = moment(date).format("DD/MM/YYYY");
      if (free & !pay) {
        apiService
          .getEventsByDate(requestDate, 0)
          .then((res) => setEvents(res))
          .finally(() => setLoading(false));
      } else if (!free & pay) {
        apiService
          .getEventsByDate(requestDate, 1)
          .then((res) => setEvents(res))
          .finally(() => setLoading(false));
      } else {
        apiService
          .getEventsByDate(requestDate)
          .then((res) => setEvents(res))
          .finally(() => setLoading(false));
      }
    }
  }, [loading]);

  return (
    <>
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
                  onChange={(value) => {
                    setLoading(true);
                    setFree(value);
                  }}
                  value={0}
                  label="Бесплатные"
                />
                <CustomCheckbox
                  onChange={(value) => {
                    setLoading(true);
                    setPay(value);
                  }}
                  value={9999}
                  label="Платные"
                />
                <CustomCheckbox
                  onChange={(value) => {
                    setLoading(true);
                  }}
                  value={9999}
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
              <Calendar
                date={date}
                setDate={setDate}
                setLoading={() => setLoading(true)}
              />
            </div>
            <div className={s.eventsCards}>
              {loading ? (
                <>
                  <Skeleton className={s.skeleton} />
                  <Skeleton className={s.skeleton} />
                  <Skeleton className={s.skeleton} />
                  <Skeleton className={s.skeleton} />
                  <Skeleton className={s.skeleton} />
                </>
              ) : events.length === 0 ? (
                <span className={s.noEventsTitle}>
                  В данном периоде ничего не найдено.
                </span>
              ) : (
                events.map((event) => (
                  <EventCard key={`eventcard_${event.id}`} event={event} />
                ))
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EventsComponent;
