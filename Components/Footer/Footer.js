import QuestionWindow from "Components/QuestionWindow/QuestionWindow";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FooterConst } from "shared/constants/FooterConst";
import Button from "UI/Button/Button";
import Container from "UI/Container/Container";
import ModalWindow from "UI/Modal/ModalWindow";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "./footer.module.scss";

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const Footer = () => {
  const {
    list,
    adress,
    phone,
    email,
    workingTitle,
    workingTime,
    askButtonText,
    abilityButtonText,
    copyright,
  } = FooterConst;

  const array = sliceIntoChunks(list, 3);

  const [isOpen, setOpen] = useState(false);

  return (
    <footer>
      <Wrapper className={s.decoration} borderTop>
        <div className={s.square} />
      </Wrapper>

      <div className={s.footer}>
        <Container className={s.container}>
          <div className={s.topFooter}>
            {array.map((list, index) => (
              <ul className={s.list} key={`footerList${index}`}>
                {list.map(({ id, value, url }) => (
                  <li className={s.item} key={`footerItem${id}`}>
                    {url ? (
                      <Link href={url}>
                        <a className={s.link}>
                          {value}
                          <Image
                            className={s.icon}
                            src="/assets/icons/arrow.svg"
                            width={24}
                            height={10}
                          />
                        </a>
                      </Link>
                    ) : (
                      value
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className={s.botFooter}>
            <div className={s.working}>
              <span className={s.workingTitle}>{workingTitle}</span>
              <div className={s.workingMode}>
                <Image src="/assets/icons/clock.svg" width={18} height={18} />
                <span className={s.workingTime}>{workingTime}</span>
              </div>
            </div>
            <div className={s.contactMobile}>
              <span className={s.adress}>{adress}</span>
              <Link href={`tel:${phone}`}>
                <a className={s.link}>{phone}</a>
              </Link>
              <Link href={`mailto:${email}`}>
                <a className={s.link}>{email}</a>
              </Link>
            </div>
            <div className={s.actions}>
              <Button onClick={() => setOpen(true)}>{askButtonText}</Button>

              <ModalWindow
                title={askButtonText}
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                buttonText={"Оставить заявку"}
                copyright
              >
                <QuestionWindow />
              </ModalWindow>

              <Button className={s.abilityButton}>
                <Image src="/assets/icons/eye.svg" width={22} height={15} />
                {abilityButtonText}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Wrapper className={s.decoration} borderBottom>
        <div className={s.triangle} />
      </Wrapper>

      <Wrapper>
        <span className={s.copyrightText}>{copyright}</span>
      </Wrapper>
    </footer>
  );
};

export default Footer;
