import Link from "next/link";
import moment from "moment";
import Button from "UI/Button/Button";
import s from "./eventCard.module.scss";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const EventCard = (props) => {
  const { id, title, date, price, limits } = props.event;

  const day = date.substr(0, 2);
  const month = date.substr(3, 2);
  const time = date.substr(-8, 8);
  const minutes = date.substr(13, 2);
  let hours;

  if (time.indexOf("пп") !== -1) {
    hours = Number(time.substr(0, 2).trim()) + 12;
    hours === 24 ? (hours = "00") : null;
  } else {
    time.substr(0, 2).trim().length === 2
      ? (hours = time.substr(0, 2).trim())
      : `0${time.substr(0, 2).trim()}`;
  }

  return (
    <div className={s.card}>
      <div className={s.date}>
        <span className={s.number}>{day}</span>
        <span className={s.month}>{moment(month, "M").format("MMMM")}</span>
      </div>
      <div className={s.time}>
        <span>{`${hours}:${minutes}`}</span>
        <span className={s.price}>Бесплатно</span>
      </div>
      <div className={s.about}>
        <div className={s.limits}>
          <span>Категория: 6+</span>
        </div>
        <div className={s.description}>
          <span>{htmlDecode(title)}</span>
        </div>
      </div>
      <div className={s.more}>
        <Link href={"#"}>
          <a className={s.link}>
            <span>Узнать больше</span>
            <img src="/assets/icons/arrow.svg" className={s.arrowRight} />
          </a>
        </Link>
        <Button className={s.button}>Приобрести билет</Button>
      </div>
    </div>
  );
};

export default EventCard;
