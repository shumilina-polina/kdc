import moment from "moment";
import Button from "UI/Button/Button";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import { months } from "shared/constants/Month";

import s from "./eventCard.module.scss";
import ModalWindow from "UI/Modal/ModalWindow";
import { useState } from "react";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";

const EventCard = (props) => {
  const { event } = props;
  const { title, date, time, price, limits } = event;

  const dataDate = moment(`${date} ${time}`);
  const monthsRU = months.split(",");

  console.log(event);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={s.card}>
        <div className={s.date}>
          <span className={s.number}>{dataDate.format("DD")}</span>
          <span className={s.month}>
            {monthsRU[dataDate.add(-1, "M").format("M")]}
          </span>
        </div>
        <div className={s.time}>
          <span>{dataDate.format("HH:mm")}</span>
          <span className={s.price}>
            {price === "0" ? "Бесплатно" : `${price} руб.`}
          </span>
        </div>
        <div className={s.about}>
          <div className={s.limits}>
            <span>{`Категория: ${limits}+`}</span>
          </div>
          <div className={s.description}>
            <span>{useHtmlDecode(title)}</span>
          </div>
        </div>
        <div className={s.more}>
          <span className={s.knowmore}>Узнать больше</span>
          <Button className={s.button} onClick={() => setOpen(true)}>
            Приобрести билет
          </Button>
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Приобрести билет"
      >
        <BuyTicketsWindow data={event} />
      </ModalWindow>
    </>
  );
};

export default EventCard;
