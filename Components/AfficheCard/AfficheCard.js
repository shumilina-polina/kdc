import moment from "moment";

import s from "./afficheCard.module.scss";
import { useState } from "react";
import ModalWindow from "UI/Modal/ModalWindow";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import { months } from "shared/constants/Month";

const AfficheCard = (props) => {
  moment.locale("ru");

  const [isOpen, setOpen] = useState(false);

  const { affiche } = props;
  const { title, thumbnail, date, time } = affiche;

  const dataDate = moment(`${date} ${time}`);
  const monthsRU = months.split(",");

  return (
    <>
      <div className={s.card} onClick={() => setOpen(true)}>
        <img src={thumbnail} className={s.thumbnail} />
        <div className={s.date}>
          <span className={s.number}>{dataDate.format("DD")}</span>
          <span className={s.dtaeMonth}>
            {monthsRU[dataDate.format("M") - 1]}
          </span>
          <span className={s.narrow}>{dataDate.format("dddd")}</span>
        </div>
        <div className={s.title}>
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
