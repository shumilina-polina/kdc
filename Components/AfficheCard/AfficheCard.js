import moment from "moment";

import cn from "classnames";
import { useState } from "react";
import ModalWindow from "UI/Modal/ModalWindow";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import { months } from "shared/constants/Month";
import { useSelector } from "react-redux";

import s from "./afficheCard.module.scss";

const AfficheCard = (props) => {
  moment.locale("ru");

  const [isOpen, setOpen] = useState(false);

  const { affiche } = props;
  const { title, thumbnail, date, time } = affiche;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const dataDate = moment(`${date} ${time}`);
  const monthsRU = months.split(",");

  return (
    <>
      <div className={s.card} onClick={() => setOpen(true)}>
        <img src={thumbnail} className={s.thumbnail} />
        <div className={s.date}>
          <span className={s.number}>{dataDate.format("DD")}</span>
          <span className={cn(s.dtaeMonth, v ? s.ability : null)}>
            {monthsRU[dataDate.format("M") - 1]}
          </span>
          <span className={cn(s.narrow, v ? s.ability : null)}>
            {dataDate.format("dddd")}
          </span>
        </div>
        <div className={cn(s.title, v ? s.ability : null)}>
          <span>{useHtmlDecode(title)}</span>
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Приобрести билет"
      >
        <BuyTicketsWindow data={affiche} />
      </ModalWindow>
    </>
  );
};

export default AfficheCard;
