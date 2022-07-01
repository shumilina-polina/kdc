import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { routes } from "shared/enums/pages";
import Container from "UI/Container/Container";
import Button from "UI/Button/Button";
import { HeaderConst } from "shared/constants/HeaderConst";

import s from "./header.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [nextOpen, setNextOpen] = useState(false);
  const [nestedMenu, setNestedMenu] = useState(null);

  const {
    pages,
    mobilePages,
    workingMode,
    phone,
    adress,
    email,
    buttonText,
    logotypeTitle,
  } = HeaderConst;

  const nextLayer = (pages) => {
    setNestedMenu(pages);
    setNextOpen(true);
  };

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.logo}>
          <Link href={routes.home}>
            <a>
              <Image
                src="/assets/images/logo.svg"
                alt={logotypeTitle}
                width={187}
                height={42}
              />
            </a>
          </Link>
        </div>
        <div className={s.nav}>
          <ul className={s.navList}>
            {pages.map(({ id, value, url }) => (
              <li key={`pages${id}`} className={s.item}>
                <Link href={url}>
                  <a className={s.link}>{value}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.contact}>
          <Image src="/assets/icons/phone.svg" width={20} height={20} />
          <Link href={`tel:${phone}`}>
            <a className={s.link}>{phone}</a>
          </Link>
        </div>
        <div className={s.menuIcon}>
          <MenuIcon onClick={() => setOpen(true)} />
        </div>
      </Container>

      <div className={cn(s.mobileMenu, open ? s.show : null)}>
        <div className={s.top}>
          <Link href="/">
            <a>
              <Image src="/assets/images/logo.svg" width={187} height={42} />
            </a>
          </Link>
          <CloseIcon className={s.closeIcon} onClick={() => setOpen(false)} />
        </div>

        {nextOpen ? (
          <>
            <button
              className={s.backMenuButton}
              onClick={() => setNextOpen(false)}
            >
              <ArrowBackIosNewIcon />
            </button>
            <ul className={s.mobileList}>
              {nestedMenu.map(({ id, value, url }) => (
                <li key={`nestedMenu${id}`} className={s.item}>
                  <Link href={url}>
                    <a className={s.link}>
                      {value}
                      <Image
                        src="/assets/icons/arrow.svg"
                        width={24}
                        height={10}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className={s.mobileList}>
            {mobilePages.map(({ id, value, url, nested, nextPages }) => (
              <li key={`headerMenu${id}`} className={s.item}>
                {!nested ? (
                  <Link href={url}>
                    <a className={s.link}>
                      {value}
                      <Image
                        src="/assets/icons/arrow.svg"
                        width={24}
                        height={10}
                      />
                    </a>
                  </Link>
                ) : (
                  <a className={s.link} onClick={() => nextLayer(nextPages)}>
                    {value}
                    <Image
                      src="/assets/icons/arrow.svg"
                      width={24}
                      height={10}
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className={s.details}>
          <div className={s.working}>
            <span>{workingMode.value}</span>
            <div className={s.workingMode}>
              <Image src="/assets/icons/clock.svg" width={18} height={18} />
              <span>{workingMode.mode}</span>
            </div>
          </div>
          <div className={s.adress}>
            <span>{adress}</span>
          </div>
          <div className={s.contactInfo}>
            <Link href={`tel:${phone}`}>
              <a className={s.contactLink}>{phone}</a>
            </Link>
            <Link href={`mailto:${email}`}>
              <a className={s.contactLink}>{email}</a>
            </Link>
          </div>
          <Button className={s.abilityButton}>{buttonText}</Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
