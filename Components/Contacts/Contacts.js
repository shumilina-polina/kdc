import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import Title from "UI/Title/Title";

import s from "./contacts.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";
import { useState } from "react";
import { useSelector } from "react-redux";

const Contacts = (props) => {
  const {
    data: { title, adressTitle, adressMain, adressSecondary, phone, email },
  } = props;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [isMainAdress, setAdress] = useState(true);

  return (
    <>
      <Wrapper>
        <div className={s.contacts}>
          <div className={s.header}>
            <Title>{title}</Title>
            <div
              className={cn(s.adress, isMainAdress ? s.red : null)}
              onClick={() => setAdress((prev) => !prev)}
            >
              <span>{adressTitle}</span>
              <span>{adressMain}</span>
            </div>
            <div
              className={cn(s.adress, !isMainAdress ? s.red : null)}
              onClick={() => setAdress((prev) => !prev)}
            >
              <span>{adressTitle}</span>
              <span>{adressSecondary}</span>
            </div>
          </div>
          <div className={s.footer}>
            <div className={s.info}>
              <img
                className={s.poster}
                src="/assets/images/phone.svg"
                width={345}
                height={236}
              />
              <div className={cn(s.access, s.phone)}>
                <Image src="/assets/icons/handy.svg" width={40} height={40} />
                <Link href={`tel:${phone}`}>
                  <a className={cn(s.link, v ? s.ability : null)}>{phone}</a>
                </Link>
              </div>
              <div className={cn(s.access, s.email)}>
                <Image src="/assets/icons/email.svg" width={40} height={40} />
                <Link href={`mailto:${email}`}>
                  <a className={cn(s.link, v ? s.ability : null)}>{email}</a>
                </Link>
              </div>
            </div>

            <div className={s.mapContainer}>
              <iframe
                src={
                  isMainAdress
                    ? "https://yandex.ru/map-widget/v1/?um=constructor%3A9f741aba777413724574c83e342dc21bcd2ab21036e2ac2a9b93b4a09c1394dd&amp;source=constructor"
                    : "https://yandex.ru/map-widget/v1/?um=constructor%3A04a0db7da35f364309d245a1e3994d9487378e536de1b066d115fb3ead1acb93&amp;source=constructor"
                }
                className={s.map}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className={s.contactsMobile}>
          <Title>{title}</Title>
          <div className={s.wrapperMobile}>
            <div className={s.infoMobile}>
              <div className={s.contentWrapperMobile}>
                <Image src="/assets/icons/handy.svg" width={40} height={40} />
                <Link href={`tel:${phone}`}>
                  <a className={cn(s.link, v ? s.ability : null)}>{phone}</a>
                </Link>
              </div>
            </div>
            <div className={s.infoMobile}>
              <div className={s.contentWrapperMobile}>
                <Image src="/assets/icons/email.svg" width={40} height={40} />
                <Link href={`mailto:${email}`}>
                  <a className={cn(s.link, v ? s.ability : null)}>{email}</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={s.posterMobile}>
            <img
              className={s.poster}
              src="/assets/images/phone.svg"
              width={345}
              height={236}
            />
          </div>
          <Title>{adressTitle}</Title>
          <div className={s.mapContainer}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f741aba777413724574c83e342dc21bcd2ab21036e2ac2a9b93b4a09c1394dd&amp;source=constructor"
              className={s.mapMobile}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contacts;
