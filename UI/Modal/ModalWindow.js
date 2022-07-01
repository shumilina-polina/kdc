import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import Title from "UI/Title/Title";
import Button from "UI/Button/Button";

import s from "./modal.module.scss";

const ModalWindow = (props) => {
  const {
    isOpen,
    onClose,
    title,
    children,
    copyright = false,
    buttonText = "",
  } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Modal open={isOpen} classes={{ root: s.root }}>
          <div className={s.modal}>
            <div className={s.modalWrapper}>
              <div className={s.header}>
                <div className={s.container}>
                  <Title className={s.title}>{title}</Title>
                  <button className={s.close} onClick={onClose}>
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className={s.content}>{children}</div>

              {copyright ? (
                <div className={s.footerTop}>
                  <div className={s.footerTopContainer}>
                    <span className={s.secondary}>
                      Отправляя заявку вы соглашаетесь с политикой
                      конфиденциальности.
                    </span>
                    <span className={s.primary}>
                      Мы Вам перезвоним, чтобы подтвердить вашу запись.
                    </span>
                  </div>
                </div>
              ) : null}
              <div className={s.footerBot}>
                <div className={s.footerBotContainer} />
              </div>

              {buttonText ? (
                <div className={s.mobileBtnWrapper}>
                  <Button className={s.mobileBtn}>{buttonText}</Button>
                </div>
              ) : null}
            </div>
          </div>
        </Modal>,
        document.getElementById("modal__root")
      )
    : null;
};

export default ModalWindow;
