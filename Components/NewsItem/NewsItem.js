import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import moment from "moment";
import "moment/locale/ru";

import s from "./newsItem.module.scss";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ModalWindow from "UI/Modal/ModalWindow";
import { useState } from "react";
import NewsWindow from "Components/NewsWindow/NewsWindow";
import { useSelector } from "react-redux";
import cn from "classnames";

const NewsItem = (props) => {
  const { post } = props;
  const { date, title, content, thumbnail, category } = post;
  const dataDate = moment(Number(`${date}000`));

  const [isOpen, setOpen] = useState(false);
  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  return (
    <>
      <div className={s.item}>
        <div className={s.posterBlock}>
          <span className={cn(s.date, v ? s.ability : null)}>
            {dataDate.format("D MMMM")}
          </span>
          <img className={s.poster} src={thumbnail} />
        </div>
        <div className={cn(s.title, v ? s.ability : null)}>
          <h4>{useHtmlDecode(title)}</h4>
        </div>
        <div className={cn(s.content, s.ability)}>
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
