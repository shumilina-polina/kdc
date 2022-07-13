import cn from "classnames";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import s from "./spaceCard.module.scss";

export default function SpaceCard(props) {
  return (
    <div className={s.card}>
      <div className={s.thumbnail}>
        <img src="/assets/images/zal1.jpg" />
      </div>
      <div className={cn(s.info, s.borderLeftRight, s.borderBottom)}>
        <div className={s.header}>
          <span className={s.oswald}>Большой зал</span>
          <ButtonArrow direction="forward" color="red" />
        </div>
        <div className={cn(s.section, s.borderBottom)}>
          <div className={s.block}>
            <span className={s.secondary}>Вместимость:</span>
            <span className={s.oswald}>
              <span className={s.bold}>900 </span>
              <span>человек</span>
            </span>
          </div>
          <div className={s.block}>
            <span className={s.secondary}>Режим работы:</span>
            <span className={s.oswald}>с 11:00 до 22:00 </span>
          </div>
          <div className={s.block}>
            <span className={s.secondary}>Стоимость аренды:</span>
            <span className={s.oswald}>1 час — 20 000 р.</span>
          </div>
        </div>
        <div className={cn(s.square, s.borderBottom)}>
          <span className={s.secondary}>Метраж:</span>
          <span className={s.oswald}>?</span>
        </div>
        <div className={s.footer}>
          <span className={cn(s.oswald, s.adress)}>Московский пр., д. 152</span>
          <Button>Забронировать</Button>
        </div>
      </div>
    </div>
  );
}
