import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import moment from "moment";
import "moment/locale/ru";

import s from "./newsItem.module.scss";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ModalWindow from "UI/Modal/ModalWindow";
import { useState } from "react";
import NewsWindow from "Components/NewsWindow/NewsWindow";

const NewsItem = (props) => {
  const { post } = props;

  const { date, title, content, thumbnail, category } = post;

  const [isOpen, setOpen] = useState(false);

  const dataDate = moment(Number(`${date}000`));

  return (
    <>
      <div className={s.item}>
        <div className={s.posterBlock}>
          <span className={s.date}>{dataDate.format("D MMMM")}</span>
          <img className={s.poster} src={thumbnail} />
        </div>
        <div className={s.title}>
          <h4>{useHtmlDecode(title)}</h4>
        </div>
        <div className={s.content}>
          <p>{`${useHtmlDecode(content).substr(0, 225)}...`}</p>
        </div>
        <div className={s.footer}>
          <div className={s.category}>
            <span>{useHtmlDecode(category)}</span>
          </div>
          <ButtonArrow
            direction="forward"
            color="red"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Новости"
      >
        <NewsWindow item={post} />
      </ModalWindow>
    </>
  );
};

export default NewsItem;
