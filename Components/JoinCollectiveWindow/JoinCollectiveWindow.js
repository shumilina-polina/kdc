import cn from "classnames";

import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./joinCollectiveWindow.module.scss";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const JoinCollectiveWindow = (props) => {
  const {
    collective: { title, trend, price, thumbnail },
  } = props;

  return (
    <div className={s.container}>
      <div className={s.info}>
        <img src={thumbnail} className={s.poster} />
        <div className={s.table}>
          <p className={cn(s.bold, s.title)}>{htmlDecode(title)}</p>
          <p className={cn(s.category, s.secondary)}>{htmlDecode(title)}</p>
          <div className={s.details}>
            <span className={s.role}>
              <p className={s.secondary}>Направление:</p>
              <p className={s.bold}>{trend}</p>
            </span>
            <span className={s.price}>
              <p className={s.secondary}>Стоимость:</p>
              <p className={s.bold}>
                {price == 0 ? "Бесплатно" : `${price} руб`}
              </p>
            </span>
          </div>
        </div>

        <div className={s.tableMobile}>
          <div className={cn(s.bold, s.titleMobile)}>
            <img src={thumbnail} className={s.mobilePoster} />
            <div className={s.mobileContain}>
              <p>{htmlDecode(title)}</p>
              <p className={s.secondary}>{htmlDecode(title)}</p>
            </div>
          </div>
          <div className={s.details}>
            <span className={s.role}>
              <p className={s.secondary}>Направление:</p>
              <p className={s.bold}>{htmlDecode(trend)}</p>
            </span>
            <span className={s.price}>
              <p className={s.secondary}>Стоимость:</p>
              <p className={s.bold}>
                {price == 0 ? "Бесплатно" : `${price} руб`}
              </p>
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
