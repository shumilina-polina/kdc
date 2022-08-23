import cn from "classnames";
import SuccessWindow from "Components/SuccessWindow/SuccessWindow";
import { useState } from "react";
import { useSelector } from "react-redux";
import apiService from "services/apiService";
import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./reserveSpaceWindow.module.scss";

const ReserveSpaceWindow = (props) => {
  const { title, thumbnail, adress, capacity, price } = props.space;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [request, setRequest] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const [isValidName, setValidName] = useState(false);
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPhone, setValidPhone] = useState(false);

  const buttonClickHandler = () => {
    if (!isValidName || !isValidEmail || !isValidPhone) {
      setError(true);
      return;
    }
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
            <div className={cn(s.table, v ? s.ability : null)}>
              <p className={cn(s.bold, s.title, v ? s.ability : null)}>{title}</p>
              <p className={cn(s.category, s.secondary, v ? s.ability : null)}>{adress}</p>
              <div className={s.details}>
                <span className={cn(s.role, v ? s.ability : null)}>
                  <p className={cn(s.secondary, v ? s.ability : null)}>Вместимость:</p>
                  <p className={cn(s.bold, v ? s.ability : null)}>{`${capacity} человек`}</p>
                </span>
                <span className={s.price}>
                  <p className={cn(s.secondary, v ? s.ability : null)}>Стоимость:</p>
                  <p className={cn(s.bold, v ? s.ability : null)}>{price}</p>
                </span>
              </div>
            </div>

            <div className={cn(s.tableMobile, v ? s.ability : null)}>
              <div className={cn(s.bold, s.titleMobile, v ? s.ability : null)}>
                <img src={thumbnail} className={s.mobilePoster} />
                <div className={s.mobileContain}>
                  <p className={v ? s.ability : null}>{title}</p>
                  <p className={cn(s.secondary, v ? s.ability : null)}>{adress}</p>
                </div>
              </div>
              <div className={cn(s.details, v ? s.ability : null)}>
                <span className={cn(s.role, v ? s.ability : null)}>
                  <p className={cn(s.secondary, v ? s.ability : null)}>Вместимость:</p>
                  <p className={cn(s.bold, v ? s.ability : null)}>{`${capacity} человек`}</p>
                </span>
                <span className={s.price}>
                  <p className={cn(s.secondary, v ? s.ability : null)}>Стоимость:</p>
                  <p className={cn(s.bold, v ? s.ability : null)}>{price}</p>
                </span>
              </div>
            </div>
          </div>
          <div className={s.fields}>
            <div className={s.fieldsWrapper}>
              <CustomInput
                error={error && !name.trim()}
                className={s.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                label="Как к вам обращаться?"
                isValid={isValidName}
                setValid={setValidName}
              />
              <CustomInput
                error={error && !email.trim()}
                className={s.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Ваша почта"
                isValid={isValidEmail}
                setValid={setValidEmail}
              />
              <CustomInput
                error={error && !phone.trim()}
                className={s.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                label="Номер телефона"
                isValid={isValidPhone}
                setValid={setValidPhone}
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
