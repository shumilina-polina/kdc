import NewsWindow from "Components/NewsWindow/NewsWindow";
import moment from "moment";
import "moment/locale/ru";
import { useState } from "react";
import useHtmlDecode from "shared/hooks/useHtmlDecode";

import Button from "UI/Button/Button";
import ModalWindow from "UI/Modal/ModalWindow";
import s from "./newsCard.module.scss";

const NewsCard = (props) => {
  const { item } = props;
  const { title, content, thumbnail, category, date } = item;

  const [isOpen, setOpen] = useState(false);

  const dataDate = Number(date + "000");
  moment.locale("ru");

  return (
    <>
      <div className={s.card}>
        <div className={s.date}>
          <div>
            <span className={s.day}>{moment(dataDate).format("DD")}</span>
            <span className={s.month}>{moment(dataDate).format("MMMM")}</span>
          </div>
          <span className={s.year}>{moment(dataDate).format("YYYY")}</span>
        </div>
        <div className={s.thumbnail}>
          <img className={s.image} src={thumbnail} />
        </div>
        <div className={s.main}>
          <div className={s.header}>
            <span className={s.title}>{`${moment(dataDate).format(
              "DD"
            )} ${moment(dataDate).format("MMMM")} / ${useHtmlDecode(
              title
            )}`}</span>
          </div>
          <div className={s.content}>
            <p>{`${useHtmlDecode(content).substr(0, 225)}...`}</p>
          </div>
          <div className={s.footer}>
            <span className={s.category}>{useHtmlDecode(category)}</span>
            <Button onClick={() => setOpen(true)}>Читать подробнее</Button>
          </div>
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Новости"
      >
        <NewsWindow item={item} />
      </ModalWindow>
    </>
  );
};

export default NewsCard;
