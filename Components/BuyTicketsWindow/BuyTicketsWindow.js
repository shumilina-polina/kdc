import moment from "moment";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import Button from "UI/Button/Button";

import { months } from "shared/constants/Month";

import s from "./buyTicketsWindow.module.scss";

const BuyTicketsWindow = (props) => {
  const {
    adress,
    content,
    date,
    time,
    limits,
    price,
    thumbnail,
    title,
    subtitle = "",
  } = props.data;

  const dataDate = moment(`${date} ${time}`);
  const monthsRU = months.split(",");

  return (
    <div className={s.wrapper}>
      <div className={s.datetime}>
        <div className={s.date}>
          <span>{dataDate.format("D")}</span>
          <span>{monthsRU[dataDate.format("M") - 1]}</span>
        </div>
        <div className={s.time}>
          <span>{``}</span>
          <span>{``}</span>
        </div>
      </div>
      <div className={s.header}>
        <span className={s.subtitle}>
          {subtitle ? useHtmlDecode(subtitle) : ""}{" "}
        </span>
        <span className={s.title}>{`${useHtmlDecode(title)} `}</span>
      </div>
      <div className={s.details}>
        <div className={s.limits}>
          <span className={s.price}>
            {price == 0 ? "Бесплатно" : `${price} руб.`}
          </span>
          <span className={s.age}>{`${limits}+`}</span>
        </div>
        <div className={s.place}>
          <span>Место проведения:</span>
          <span>{adress}</span>
        </div>
        <img className={s.thumbnail} src={thumbnail} />
      </div>
      <div className={s.description}>
        <p className={s.content}>{useHtmlDecode(content)}</p>
        <div className={s.footer}>
          <Button className={s.button}>Приобрести билет</Button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketsWindow;
