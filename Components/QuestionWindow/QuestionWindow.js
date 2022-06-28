import Button from "UI/Button/Button";
import CustomInput from "UI/CustomInput/CustomInput";

import s from "./questionWindow.module.scss";

const QuestionWindow = () => {
  return (
    <div className={s.container}>
      <div className={s.inputGroup}>
        <CustomInput label={"Как к вам обращаться?"} />
        <CustomInput label={"Ваша почта"} />
        <CustomInput label={"Номер телефона"} />
      </div>
      <div className={s.textareaGroup}>
        <CustomInput label={"Номер телефона"} cols={1} rows={5.5} multiline />
        <Button className={s.button}>Остаить заявку</Button>
      </div>
    </div>
  );
};

export default QuestionWindow;
