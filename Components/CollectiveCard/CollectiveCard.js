import { routes } from "shared/enums/pages";
import Button from "UI/Button/Button";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";

import s from "./collectivesCard.module.scss";

const CollectiveCard = () => {
  return (
    <div className={s.card}>
      <div className={s.poster}>
        <div className={s.label}>Открыт набор</div>
        <img
          src="/assets/images/collectiveCard.jpg"
          className={s.thumbnail}
          width={300}
          height={190}
        />
      </div>
      <div className={s.header}>
        <span className={s.title}>Фейерверк</span>
        <ButtonArrow
          hasLink
          href={routes.collectives}
          direction="forward"
          color="red"
        />
      </div>
      <div className={s.content}>
        <span className={s.text}>Детская цирковая студия</span>
        <span className={s.price}>200 р/мес</span>
      </div>
      <div className={s.footer}>
        <Button hasLink href={routes.collectives} className={s.button}>
          Записаться
        </Button>
      </div>
    </div>
  );
};

export default CollectiveCard;
