import cn from "classnames";
import JoinCollectiveWindow from "Components/JoinCollectiveWindow/JoinCollectiveWindow";
import { useState } from "react";
import { routes } from "shared/enums/pages";
import Button from "UI/Button/Button";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import ModalWindow from "UI/Modal/ModalWindow";

import s from "./collectivesCard.module.scss";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const CollectiveCard = (props) => {
  const { collective, className } = props;
  const { id, title, trend, price, kit, thumbnail } = collective;

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={cn(s.card, className)}>
        <div className={s.poster}>
          {kit ? <div className={s.label}>Открыт набор</div> : null}
          <img src={thumbnail} className={s.thumbnail} />
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
          <Button
            isOpen={isOpen}
            onClick={() => setOpen(true)}
            className={s.button}
          >
            Записаться
          </Button>
        </div>
      </div>
      <ModalWindow
        title="Записаться в коллектив"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <JoinCollectiveWindow collective={collective} />
      </ModalWindow>
    </>
  );
};

export default CollectiveCard;
