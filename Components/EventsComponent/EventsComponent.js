import { useEffect, useState } from "react";

import moment from "moment";
import Calendar from "UI/Calendar/Calendar";
import cn from "classnames";

import CustomCheckbox from "UI/CustomCheckbox/CustomCheckbox";
import EventCard from "Components/EventCard/EventCard";

import s from "./eventsComponent.module.scss";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";
import Wrapper from "UI/Wrapper/Wrapper";
import { useSelector } from "react-redux";

const EventsComponent = (props) => {
  const {
    title = "Календарь",
    disableFilters = false,
    disablePast = true,
  } = props;

  const POST_ON_PAGE = 5;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [free, setFree] = useState(false);
  const [paid, setPaid] = useState(false);
  const [all, setAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (loading) {
      apiService
        .getEventsByDate(date, (free = free), (paid = paid), (all = all))
        .then((res) => setEvents(res.data))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <>
      <Wrapper borderBottom>
        <div className={s.padding}>
          <span className={s.title}>{title}</span>
        </div>
      </Wrapper>

      {!disableFilters ? (
        <Wrapper borderBottom>
          <div className={s.calendarFilters}>
            <div className={cn(s.description, v ? s.ability : null)}>
              Вы можете посмотреть все предстоящие мероприятия, запланированые в
              один день и отсортировать их.
            </div>
            <div className={s.checkboxGroup}>
              <CustomCheckbox
                onChange={() => {
                  setLoading(true);
                  setFree((prev) => !prev);
                }}
                value={free}
                label="Бесплатные"
              />
              <CustomCheckbox
                onChange={() => {
                  setLoading(true);
                  setPaid((prev) => !prev);
                }}
                value={paid}
                label="Платные"
              />
              <CustomCheckbox
                onChange={() => {
                  setLoading(true);
                  setAll((prev) => !prev);
                }}
                value={all}
                label="Все"
              />
            </div>
          </div>
        </Wrapper>
      ) : null}

      <Wrapper>
        <div
          className={s.footer}
          style={!events.length ? { alignItems: "center" } : null}
        >
          <div className={s.calendar}>
            <Calendar
              setDate={setDate}
              setLoading={() => setLoading(true)}
              disablePast={disablePast}
            />
          </div>
          <div className={s.eventsCards}>
            {loading ? (
              <>
                {[...Array(POST_ON_PAGE)].map((el, index) => (
                  <Skeleton
                    key={`eventSkeleton_${index}`}
                    className={s.skeleton}
                  />
                ))}
              </>
            ) : events.length === 0 ? (
              <span className={s.noEventsTitle}>
                В данном периоде ничего не найдено.
              </span>
            ) : (
              events.map((event) => (
                <EventCard key={`eventCard_${event.id}`} event={event} />
              ))
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EventsComponent;
