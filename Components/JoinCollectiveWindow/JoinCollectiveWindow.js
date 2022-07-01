import cn from "classnames";

import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./joinCollectiveWindow.module.scss";

const JoinCollectiveWindow = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img src="/assets/images/joinColectivePost.jpg" className={s.poster} />
        <div className={s.table}>
          <p className={cn(s.bold, s.title)}>Ясные ночи</p>
          <p className={cn(s.category, s.secondary)}>
            Народный коллектив театр песни
          </p>
          <div className={s.details}>
            <span className={s.role}>
              <p className={s.secondary}>Направление:</p>
              <p className={s.bold}>Вокальные</p>
            </span>
            <span className={s.price}>
              <p className={s.secondary}>Стоимость:</p>
              <p className={s.bold}>Вокальные</p>
            </span>
          </div>
        </div>

        <div className={s.tableMobile}>
          <div className={cn(s.bold, s.titleMobile)}>
            <img
              src="/assets/images/joinColectivePost.jpg"
              className={s.mobilePoster}
            />
            <div className={s.mobileContain}>
              <p>Ясные ночи</p>
              <p className={s.secondary}>Народный коллектив театр песни</p>
            </div>
          </div>
          <div className={s.details}>
            <span className={s.role}>
              <p className={s.secondary}>Направление:</p>
              <p className={s.bold}>Вокальные</p>
            </span>
            <span className={s.price}>
              <p className={s.secondary}>Стоимость:</p>
              <p className={s.bold}>Вокальные</p>
            </span>
          </div>
        </div>
      </div>
      <div className={s.fields}>
        <CustomInput className={s.input} label="Как к вам обращаться?" />
        <CustomInput className={s.input} label="Ваша почта" />
        <CustomInput className={s.input} label="Номер телефона" />
        <Button className={s.button}>Оставить заявку</Button>
      </div>
    </div>
  );
};

export default JoinCollectiveWindow;
