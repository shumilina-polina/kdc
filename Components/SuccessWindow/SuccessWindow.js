import s from "./successWindow.module.scss";

const SuccessWindow = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.iconSuccess}>
        <img src="/assets/icons/successIcon.svg" className={s.icon} />
      </span>
      <span className={s.thx}>Спасибо за ваше обращение</span>
      <span className={s.feedback}>Мы свяжемся с Вами в ближайшее время</span>
    </div>
  );
};

export default SuccessWindow;
