import cn from "classnames";
import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./reserveSpaceWindow.module.scss";

const ReserveSpaceWindow = (props) => {
  const { title, thumbnail, adress, capacity, price } = props.space;

  return (
    <div className={s.container}>
      <div className={s.info}>
        <img src={thumbnail} className={s.poster} />
        <div className={s.table}>
          <p className={cn(s.bold, s.title)}>{title}</p>
          <p className={cn(s.category, s.secondary)}>{adress}</p>
          <div className={s.details}>
            <span className={s.role}>
              <p className={s.secondary}>Вместимость:</p>
              <p className={s.bold}>{`${capacity} человек`}</p>
            </span>
            <span className={s.price}>
              <p className={s.secondary}>Стоимость:</p>
              <p className={s.bold}>{price}</p>
            </span>
          </div>
        </div>

        <div className={s.tableMobile}>
          <div className={cn(s.bold, s.titleMobile)}>
            <img src={thumbnail} className={s.mobilePoster} />
            <div className={s.mobileContain}>
              <p>{title}</p>
              <p className={s.secondary}>{adress}</p>
            </div>
          </div>
          <div className={s.details}>
            <span className={s.role}>
              <p className={s.secondary}>Вместимость:</p>
              <p className={s.bold}>{`${capacity} человек`}</p>
            </span>
            <span className={s.price}>
              <p className={s.secondary}>Стоимость:</p>
              <p className={s.bold}>{price}</p>
            </span>
          </div>
        </div>
      </div>
      <div className={s.fields}>
        <div className={s.fieldsWrapper}>
          <CustomInput className={s.input} label="Как к вам обращаться?" />
          <CustomInput className={s.input} label="Ваша почта" />
          <CustomInput className={s.input} label="Номер телефона" />
          <Button className={s.button}>Оставить заявку</Button>
        </div>
      </div>
    </div>
  );
};

export default ReserveSpaceWindow;
