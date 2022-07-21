import Link from "next/link";

import moment from "moment";

import s from "./afficheCard.module.scss";
import { useState } from "react";
import ModalWindow from "UI/Modal/ModalWindow";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const AfficheCard = (props) => {
  moment.locale("ru")

  const [isOpen, setOpen] = useState(false)

  const {
    affiche
  } = props;

  const {
    title,
    thumbnail,
    date,
  } = affiche;

  const dataDate = new Date(date);
  const day = dataDate.getDate()

  return (
      <>
      <div className={s.card} onClick={() => setOpen(true)}>
        <img
          src={thumbnail}
          className={s.thumbnail}
        />
        <div className={s.date}>
          <span className={s.number}>{ dataDate.getDate() }</span>
          <span className={s.dtaeMonth}>{ moment(dataDate.getMonth(), 'M').add(1, 'M').format('MMMM') }</span>
          <span className={s.narrow}>{moment(dataDate.getDate(), 'D').format('dddd') }</span>
        </div>
        <div className={s.title}>
          <span>{htmlDecode(title)}</span>
        </div>
      </div>
      <ModalWindow isOpen={isOpen} onClose={() => setOpen(false)}>
        <BuyTicketsWindow affiche={affiche} />
      </ModalWindow>
      </>
  );
};

export default AfficheCard;
