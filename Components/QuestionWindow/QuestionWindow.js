import SuccessWindow from "Components/SuccessWindow/SuccessWindow";
import { useState } from "react";
import apiService from "services/apiService";
import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./questionWindow.module.scss";

const QuestionWindow = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [request, setRequest] = useState(false);

  const buttonClickHandler = () => {
    apiService.postEmailAskQuestion(name, email, phone, message).then(() => setRequest(true))
  }

  return (
    <>
      {!request ? (
        <div className={s.container}>
          <div className={s.inputGroup}>
            <CustomInput label={"Как к вам обращаться?"} onChange={(e) => setName(e.target.value)} />
            <CustomInput label={"Ваша почта"} onChange={(e) => setEmail(e.target.value)} />
            <CustomInput label={"Номер телефона"} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className={s.textareaGroup}>
            <CustomInput label={"Сообщение"} onChange={(e) => setMessage(e.target.value)} cols={1} rows={5.5} multiline />
            <Button className={s.button} onClick={buttonClickHandler}>Оставить заявку</Button>
          </div>
        </div>
      ) : (
        <SuccessWindow />
      )}
    </>
  );
};

export default QuestionWindow;
