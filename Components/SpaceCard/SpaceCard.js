import cn from "classnames";
import { routes } from "shared/enums/pages";
import { useState } from "react";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import s from "./spaceCard.module.scss";
import ModalWindow from "UI/Modal/ModalWindow";
import ReserveSpaceWindow from "Components/ReserveSpaceWindow/ReserveSpaceWindow";
import { useSelector } from "react-redux";

export default function SpaceCard(props) {
  const { space } = props;

  const { id, adress, capacity, footage, price, thumbnail, title, working } =
    space;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={s.card}>
        <div className={s.thumbnail}>
          <img src={thumbnail} />
        </div>
        <div className={cn(s.info, s.borderLeftRight, s.borderBottom)}>
          <div className={s.header}>
            <span className={cn(s.oswald, v ? s.ability : null)}>{title}</span>
            <ButtonArrow
              direction="forward"
              color="red"
              href={`${routes.space}/${id}`}
              hasLink
            />
          </div>
          <div className={s.section}>
            <div className={s.block}>
              <span className={cn(s.secondary, v ? s.ability : null)}>
                Вместимость:
              </span>
              <span className={cn(s.oswald, v ? s.ability : null)}>
                <span className={s.bold}>{capacity} </span>
                <span className={v ? s.ability : null}>человек</span>
              </span>
            </div>
            <div className={s.block}>
              <span className={cn(s.secondary, v ? s.ability : null)}>
                Режим работы:
              </span>
              <span className={cn(s.oswald, v ? s.ability : null)}>
                {working}
              </span>
            </div>
            <div className={s.block}>
              <span className={cn(s.secondary, v ? s.ability : null)}>
                Стоимость аренды:
              </span>
              <span className={cn(s.oswald, v ? s.ability : null)}>
                {price}
              </span>
            </div>
          </div>
          <div className={cn(s.square, s.borderBottom)}>
            <span className={cn(s.secondary, v ? s.ability : null)}>
              Метраж:
            </span>
            <span
              className={cn(s.oswald, v ? s.ability : null)}
              style={{ position: "relative" }}
            >
              {footage} м
              <sup style={{ fontSize: "10px", position: "absolute" }}>2</sup>
            </span>
          </div>
          <div className={s.footer}>
            <span className={cn(s.oswald, s.adress, v ? s.ability : null)}>
              {adress}
            </span>
            <Button className={s.button} onClick={() => setOpen(true)}>
              Забронировать
            </Button>
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
