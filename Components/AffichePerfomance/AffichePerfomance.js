import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";
import moment from "moment";
import "moment/locale/ru";
import { useState } from "react";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import ModalWindow from "UI/Modal/ModalWindow";

import s from "./affichePerfomance.module.scss";

const AffichePerfomance = (props) => {
  const { post } = props;

  const { date, time, title, content } = post;
  const dataDate = moment(`${date} ${time}`);

  const [isOpen, setOpen] = useState(false);

  moment.locale("ru");

  return (
    <>
      <div className={s.perfomance}>
        <div className={s.header}>
          <span className={s.date}>{dataDate.format("D MMMM")}</span>
          <span className={s.time}>{`${dataDate.format("HH")}:${dataDate.format(
            "MM"
          )}`}</span>
        </div>
        <div className={s.main}>
          <span className={s.title}>{useHtmlDecode(title)}</span>
          <p className={s.content}>
            {useHtmlDecode(content).substr(0, 200) + "..."}
          </p>
        </div>
        <div className={s.footer}>
          <ButtonArrow
            onClick={() => setOpen(true)}
            direction="forward"
            color="red"
          />
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Приобрести билет"
      >
        <BuyTicketsWindow data={post} />
      </ModalWindow>
    </>
  );
};

export default AffichePerfomance;
