import cn from "classnames";
import SuccessWindow from "Components/SuccessWindow/SuccessWindow";
import { useState } from "react";
import apiService from "services/apiService";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import { useForm } from "react-hook-form";

import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./joinCollectiveWindow.module.scss";

const JoinCollectiveWindow = (props) => {
  const {
    collective: { title, trend, price, thumbnail },
  } = props;

  const { register } = useForm();
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
      .postEmailJoinCollective(name, email, phone)
      .then(() => setRequest(true));
  };

  return (
    <div className={s.container}>
      {!request ? (
        <>
          <div className={s.info}>
            <img src={thumbnail} className={s.poster} />
            <div className={s.table}>
              <p className={cn(s.bold, s.title)}>{useHtmlDecode(title)}</p>
              <p className={cn(s.category, s.secondary)}>
                {useHtmlDecode(title)}
              </p>
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
                  <p>{useHtmlDecode(title)}</p>
                  <p className={s.secondary}>{useHtmlDecode(title)}</p>
                </div>
              </div>
              <div className={s.details}>
                <span className={s.role}>
                  <p className={s.secondary}>Направление:</p>
                  <p className={s.bold}>{useHtmlDecode(trend)}</p>
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
            <CustomInput
              error={error && !name.trim()}
              className={s.input}
              type="name"
              value={name}
              label="Как к вам обращаться?"
              onChange={(e) => setName(e.target.value)}
              isValid={isValidName}
              setValid={setValidName}
            />
            <CustomInput
              error={error && !email.trim()}
              className={s.input}
              type="email"
              value={email}
              label="Ваша почта"
              onChange={(e) => setEmail(e.target.value)}
              isValid={isValidEmail}
              setValid={setValidEmail}
            />
            <CustomInput
              error={error && !phone.trim()}
              className={s.input}
              type="phone"
              value={phone}
              label="Номер телефона"
              onChange={(e) => setPhone(e.target.value)}
              isValid={isValidPhone}
              setValid={setValidPhone}
            />
            <Button className={s.button} onClick={buttonClickHandler}>
              Оставить заявку
            </Button>
          </div>
        </>
      ) : (
        <SuccessWindow />
      )}
    </div>
  );
};

export default JoinCollectiveWindow;
