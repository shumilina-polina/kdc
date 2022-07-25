import { routes } from "shared/enums/pages";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";

import s from "./newsItem.module.scss";

const NewsItem = (props) => {
  const {
    post: { id, date, poster, title, content, category },
  } = props;

  return (
    <div className={s.item}>
      <div className={s.posterBlock}>
        <span className={s.date}>{date}</span>
        <img className={s.poster} src={poster} />
      </div>
      <div className={s.title}>
        <h4>{title}</h4>
      </div>
      <div className={s.content}>
        <p>{content}</p>
      </div>
      <div className={s.footer}>
        <div className={s.category}>
          <span>{category}</span>
        </div>
        <ButtonArrow
          direction="forward"
          color="red"
          href={`${routes.news}/${id}`}
          hasLink
        />
      </div>
    </div>
  );
};

export default NewsItem;
