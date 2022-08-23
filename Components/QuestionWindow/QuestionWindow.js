import SuccessWindow from "Components/SuccessWindow/SuccessWindow";
import { useState } from "react";
import apiService from "services/apiService";
import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./questionWindow.module.scss";

const QuestionWindow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [request, setRequest] = useState(false);
  const [error, setError] = useState(false);

  const [isValidName, setValidName] = useState(false);
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPhone, setValidPhone] = useState(false);
  const [isValidMessage, setValidMessage] = useState(false);

  const buttonClickHandler = () => {
    if (
      !isValidName ||
      !isValidEmail ||
      !isValidPhone ||
      !message.trim().length
    ) {
      setError(true);
      return;
    }
    apiService
      .postEmailAskQuestion(name, email, phone, message)
      .then(() => setRequest(true));
  };

  return (
    <>
      {!request ? (
        <div className={s.container}>
          <div className={s.inputGroup}>
            <CustomInput
              error={error && !name.trim()}
              label={"Как к вам обращаться?"}
              value={name}
              type="name"
              onChange={(e) => setName(e.target.value)}
              isValid={isValidName}
              setValid={setValidName}
            />
            <CustomInput
              error={error && !email.trim()}
              label={"Ваша почта"}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              isValid={isValidEmail}
              setValid={setValidEmail}
            />
            <CustomInput
              error={error && !phone.trim()}
              label={"Номер телефона"}
              value={phone}
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              isValid={isValidPhone}
              setValid={setValidPhone}
            />
          </div>
          <div className={s.textareaGroup}>
            <CustomInput
              type="message"
              value={message}
              error={error && !message.trim()}
              label={"Сообщение"}
              onChange={(e) => setMessage(e.target.value)}
              cols={1}
              rows={5.5}
              multiline
              isValid={isValidMessage}
              setValid={setValidMessage}
            />
            <Button className={s.button} onClick={buttonClickHandler}>
              Оставить заявку
            </Button>
          </div>
        </div>
      ) : (
        <SuccessWindow />
      )}
    </>
  );
};

export default QuestionWindow;
