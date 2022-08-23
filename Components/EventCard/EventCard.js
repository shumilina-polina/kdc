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
  const { title, content, datetime, price, limits } = event;

  const dataDate = moment(datetime);
  const monthsRU = months.split(",");

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [isOpen, setOpen] = useState(false);
  const [isBuy, setBuy] = useState(false);

  String.prototype.trunc = function (n, useWordBoundary) {
    if (this.length <= n) {
      return this;
    }
    var subString = this.substr(0, n - 1);
    return (
      (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "&hellip;"
    );
  };

  return (
    <>
      <div className={cn(s.card, v ? s.ability : null)}>
        <div className={cn(s.date, v ? s.ability : null)}>
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
          <div className={cn(s.title, v ? s.ability : null)}>
            <span>{useHtmlDecode(title.trunc(80, true))}</span>
          </div>
          <div className={cn(s.description, v ? s.ability : null)}>
            <span>{useHtmlDecode(content.trunc(115, true))}</span>
          </div>
        </div>
        <div className={s.more}>
          <Button
            className={cn(s.knowmore, v ? s.ability : null)}
            onClick={() => setOpen(true)}
          >
            Узнать больше
          </Button>
          <Button className={s.button} onClick={() => setBuy(true)}>
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
      <ModalWindow
        isOpen={isBuy}
        onClose={() => setBuy(false)}
        title="Приобрести билет"
      >
        <BuyTicketsWindow defaultBuy={true} data={event} />
      </ModalWindow>
    </>
  );
};

export default EventCard;
