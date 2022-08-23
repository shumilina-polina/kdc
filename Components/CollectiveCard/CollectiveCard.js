import cn from "classnames";
import JoinCollectiveWindow from "Components/JoinCollectiveWindow/JoinCollectiveWindow";
import { useState } from "react";
import { useSelector } from "react-redux";
import { routes } from "shared/enums/pages";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import Button from "UI/Button/Button";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import ModalWindow from "UI/Modal/ModalWindow";

import s from "./collectivesCard.module.scss";

const CollectiveCard = (props) => {
  const { collective, className } = props;
  const { id, title, thumbnail, trend, kit, price, location } = collective;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={cn(s.card, className)}>
        <div className={s.poster}>
          {kit ? (
            <div className={cn(s.label, v ? s.ability : null)}>
              Открыт набор
            </div>
          ) : null}
          <img src={thumbnail} className={s.thumbnail} />
        </div>
        <div className={s.header}>
          <span className={cn(s.title, v ? s.ability : null)}>
            {useHtmlDecode(title)}
          </span>
          <ButtonArrow
            hasLink
            href={`${routes.collective}/${id}`}
            direction="forward"
            color="red"
            className={s.buttonArrow}
          />
        </div>
        <div className={s.content}>
          <span className={cn(s.text, v ? s.ability : null)}>{trend}</span>
          <span className={cn(s.price, v ? s.ability : null)}>
            {price < 1 ? "Бесплатно" : `${price} р/мес`}
          </span>
          <span className={s.secondary}>{location}</span>
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
