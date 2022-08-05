import moment from "moment";
import Button from "UI/Button/Button";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import { months } from "shared/constants/Month";

import cn from "classnames";
import ModalWindow from "UI/Modal/ModalWindow";
import { useState } from "react";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";
import { useSelector } from "react-redux";

import s from "./eventCard.module.scss";

const EventCard = (props) => {
  const { event } = props;
  const { title, date, time, price, limits } = event;

  const dataDate = moment(`${date} ${time}`);
  const monthsRU = months.split(",");

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={s.card}>
        <div className={s.date}>
          <span className={s.number}>{dataDate.format("DD")}</span>
          <span className={cn(s.month, v ? s.ability : null)}>
            {monthsRU[dataDate.add(-1, "M").format("M")]}
          </span>
        </div>
        <div className={s.time}>
          <span className={v ? s.ability : null}>
            {dataDate.format("HH:mm")}
          </span>
          <span className={cn(s.price, v ? s.ability : null)}>
            {price === "0" ? "Бесплатно" : `${price} руб.`}
          </span>
        </div>
        <div className={s.about}>
          <div className={cn(s.limits, v ? s.ability : null)}>
            <span>{`Категория: ${limits}+`}</span>
          </div>
          <div className={cn(s.description, v ? s.ability : null)}>
            <span>{useHtmlDecode(title)}</span>
          </div>
        </div>
        <div className={s.more}>
          <span className={cn(s.knowmore, v ? s.ability : null)}>
            Узнать больше
          </span>
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
