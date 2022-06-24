import { routes } from "shared/enums/pages";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";

import s from "./affichePerfomance.module.scss";

const AffichePerfomance = (props) => {
  const {
    post: { id, date, time, title, content },
  } = props;

  return (
    <div className={s.perfomance}>
      <div className={s.header}>
        <span className={s.date}>{date}</span>
        <span className={s.time}>{time}</span>
      </div>
      <div className={s.main}>
        <span className={s.title}>{title}</span>
        <p className={s.content}>{content}</p>
      </div>
      <div className={s.footer}>
        <ButtonArrow
          direction="forward"
          color="red"
          hasLink
          href={`${routes.affiche}/${id}`}
        />
      </div>
    </div>
  );
};

export default AffichePerfomance;
