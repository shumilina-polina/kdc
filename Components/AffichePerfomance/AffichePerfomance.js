import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";
import moment from "moment";
import "moment/locale/ru";
import { useState } from "react";
import { useSelector } from "react-redux";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import ModalWindow from "UI/Modal/ModalWindow";
import cn from "classnames";

import s from "./affichePerfomance.module.scss";

const AffichePerfomance = (props) => {
  const { post } = props;

  const { datetime, title, content } = post;
  const dataDate = moment(datetime);

  const [isOpen, setOpen] = useState(false);
  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  moment.locale("ru");

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
      <div className={s.perfomance}>
        <div className={s.header}>
          <span className={v ? s.ability : null}>
            {dataDate.format("D MMMM")}
          </span>
          <span
            className={cn(s.time, v ? s.ability : null)}
          >{`${dataDate.format("HH")}:${dataDate.format("MM")}`}</span>
        </div>
        <div className={s.main}>
          <span className={s.title}>{useHtmlDecode(title)}</span>
          <p className={cn(s.content, v ? s.ability : null)}>
            {useHtmlDecode(content.trunc(185, true))}
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
