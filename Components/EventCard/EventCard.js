import Link from "next/link";
import Button from "UI/Button/Button";
import s from "./eventCard.module.scss";

const EventCard = () => {
  return (
    <div className={s.card}>
      <div className={s.date}>
        <span className={s.number}>18</span>
        <span className={s.month}>Апреля</span>
      </div>
      <div className={s.time}>
        <span>18:00</span>
        <span className={s.price}>Бесплатно</span>
      </div>
      <div className={s.about}>
        <div className={s.limits}>
          <span>Категория: 6+</span>
        </div>
        <div className={s.description}>
          <span>
            Флэш-моб, посвящённый Международному дню "спасибо" /
            Интернет-сообщество...
          </span>
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
