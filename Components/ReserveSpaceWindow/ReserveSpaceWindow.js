import cn from "classnames";
import SuccessWindow from "Components/SuccessWindow/SuccessWindow";
import { useState } from "react";
import apiService from "services/apiService";
import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./reserveSpaceWindow.module.scss";

const ReserveSpaceWindow = (props) => {
  const { title, thumbnail, adress, capacity, price } = props.space;

  const [request, setRequest] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const buttonClickHandler = () => {
    apiService
      .postEmailReserveSpace(name, email, phone)
      .then(() => setRequest(true));
  };

  return (
    <>
      {!request ? (
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
              <CustomInput
                className={s.input}
                onChange={(e) => setName(e.target.value)}
                label="Как к вам обращаться?"
              />
              <CustomInput
                className={s.input}
                onChange={(e) => setEmail(e.target.value)}
                label="Ваша почта"
              />
              <CustomInput
                className={s.input}
                onChange={(e) => setPhone(e.target.value)}
                label="Номер телефона"
              />
              <Button className={s.button} onClick={buttonClickHandler}>
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <SuccessWindow />
      )}
    </>
  );
};

export default ReserveSpaceWindow;
