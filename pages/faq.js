import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import Acordion from "UI/Acordion/Acordion";
import { FaqData } from "shared/constants/pages/FaqData";

import s from "styles/pages/Faq.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Button from "UI/Button/Button";
import ModalWindow from "UI/Modal/ModalWindow";

const faq = () => {
  const { title, questions, footerTitle, footerSubTitle, buttonText } = FaqData;

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Header />

      <Container className={s.container}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.questions}>
          {questions.map(({ id, title, content }) => (
            <React.Fragment key={`question${id}`}>
              <Acordion title={title} content={content} />
            </React.Fragment>
          ))}
        </div>
      </Container>
      <Container className={s.decorations}>
        <Image
          src="/assets/images/faqDecorations.svg"
          alt="Набор фигур"
          width={994}
          height={300}
        />
        <div className={s.content}>
          <h2 className={s.cTitle}>{footerTitle}</h2>
          <p className={s.cSubtitle}>{footerSubTitle}</p>
          <Container>
            <Button className={s.button} onClick={() => setOpen(true)}>
              {buttonText}
            </Button>
          </Container>
        </div>
      </Container>

      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title={buttonText}
        buttonText={buttonText}
        copyright
      >
        Наверное лучше создать компанент
      </ModalWindow>

      <Footer />
    </>
  );
};

export default faq;
