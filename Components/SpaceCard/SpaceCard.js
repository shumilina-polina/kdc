import cn from "classnames";
import { routes } from "shared/enums/pages";
import { useState } from "react";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import s from "./spaceCard.module.scss";
import ModalWindow from "UI/Modal/ModalWindow";
import ReserveSpaceWindow from "Components/ReserveSpaceWindow/ReserveSpaceWindow";

export default function SpaceCard(props) {
  const { space } = props;

  const { id, adress, capacity, footage, price, thumbnail, title, working } =
    space;

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={s.card}>
        <div className={s.thumbnail}>
          <img src={thumbnail} />
        </div>
        <div className={cn(s.info, s.borderLeftRight, s.borderBottom)}>
          <div className={s.header}>
            <span className={s.oswald}>{title}</span>
            <ButtonArrow
              direction="forward"
              color="red"
              href={`${routes.space}/${id}`}
              hasLink
            />
          </div>
          <div className={cn(s.section, s.borderBottom)}>
            <div className={s.block}>
              <span className={s.secondary}>Вместимость:</span>
              <span className={s.oswald}>
                <span className={s.bold}>{capacity} </span>
                <span>человек</span>
              </span>
            </div>
            <div className={s.block}>
              <span className={s.secondary}>Режим работы:</span>
              <span className={s.oswald}>{working}</span>
            </div>
            <div className={s.block}>
              <span className={s.secondary}>Стоимость аренды:</span>
              <span className={s.oswald}>{price}</span>
            </div>
          </div>
          <div className={cn(s.square, s.borderBottom)}>
            <span className={s.secondary}>Метраж:</span>
            <span className={s.oswald}>{`${footage} м2`}</span>
          </div>
          <div className={s.footer}>
            <span className={cn(s.oswald, s.adress)}>{adress}</span>
            <Button onClick={() => setOpen(true)}>Забронировать</Button>
          </div>
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        title="Забронировать пространство"
        onClose={() => setOpen(false)}
      >
        <ReserveSpaceWindow space={space} />
      </ModalWindow>
    </>
  );
}
