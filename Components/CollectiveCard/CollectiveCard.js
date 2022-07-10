import cn from "classnames";
import { routes } from "shared/enums/pages";
import Button from "UI/Button/Button";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";

import s from "./collectivesCard.module.scss";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const CollectiveCard = (props) => {
  const {
    collective: { id, title, trend, price, kit, thumbnail },
    className,
  } = props;

  return (
    <div className={cn(s.card, className)}>
      <div className={s.poster}>
        {kit ? <div className={s.label}>Открыт набор</div> : null}
        <img src={thumbnail} className={s.thumbnail} width={300} height={190} />
      </div>
      <div className={s.header}>
        <span className={s.title}>{htmlDecode(title)}</span>
        <ButtonArrow
          hasLink
          href={`${routes.collective}/${id}`}
          direction="forward"
          color="red"
        />
      </div>
      <div className={s.content}>
        <span className={s.text}>{trend}</span>
        <span className={s.price}>
          {price < 1 ? "Бесплатно" : `${price} р/мес`}
        </span>
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
