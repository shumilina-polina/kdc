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
import { HeaderConst, HOME_PAGE_STATE } from "shared/constants/HeaderConst";

import s from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { VISUALLY_IMPAIRED_VERSION_SWITCH } from "store/actionTypes/AbilityActionType";
import { UPDATE_ACTIVE_MENU } from "store/actionTypes/HeaderActionTypes";

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

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const { active } = useSelector((state) => state.header);

  const dispatch = useDispatch();
  const handleAbilityButton = () => {
    dispatch({
      type: VISUALLY_IMPAIRED_VERSION_SWITCH,
      payload: !v,
    });
  };

  const nextLayer = (pages) => {
    setNestedMenu(pages);
    setNextOpen(true);
  };

  return (
    <>
      <header className={s.header}>
        <Container className={s.container}>
          <div className={s.logo}>
            <Link href={routes.home}>
              <a
                onClick={() =>
                  dispatch({
                    type: UPDATE_ACTIVE_MENU,
                    payload: HOME_PAGE_STATE,
                  })
                }
              >
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
              {pages.map(({ id, value, url, state }) => (
                <li key={`pages${id}`} className={s.item}>
                  <Link href={url}>
                    <a
                      className={cn(
                        s.link,
                        v ? s.ability : null,
                        active === state ? s.active : null
                      )}
                      onClick={() =>
                        dispatch({
                          type: UPDATE_ACTIVE_MENU,
                          payload: state,
                        })
                      }
                    >
                      {value}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.contact}>
            <Image src="/assets/icons/phone.svg" width={20} height={20} />
            <Link href={`tel:${phone}`}>
              <a className={cn(s.link, v ? s.ability : null)}>{phone}</a>
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
                      <a className={cn(s.link, v ? s.ability : null)}>
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
                      <a className={cn(s.link, v ? s.ability : null)}>
                        {value}
                        <Image
                          src="/assets/icons/arrow.svg"
                          width={24}
                          height={10}
                        />
                      </a>
                    </Link>
                  ) : (
                    <a
                      className={cn(s.link, v ? s.ability : null)}
                      onClick={() => nextLayer(nextPages)}
                    >
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
            <div
              className={s.working}
              style={v ? { flexDirection: "column", gap: "5px" } : null}
            >
              <span className={v ? s.ability : null}>{workingMode.value}</span>
              <div className={s.workingMode}>
                <Image src="/assets/icons/clock.svg" width={18} height={18} />
                <span className={v ? s.ability : null}>{workingMode.mode}</span>
              </div>
            </div>
            <div className={s.adress}>
              <span className={v ? s.ability : null}>{adress}</span>
            </div>
            <div
              className={s.contactInfo}
              style={v ? { flexDirection: "column" } : null}
            >
              <Link href={`tel:${phone}`}>
                <a className={cn(s.contactLink, v ? s.ability : null)}>
                  {phone}
                </a>
              </Link>
              <Link href={`mailto:${email}`}>
                <a className={cn(s.contactLink, v ? s.ability : null)}>
                  {email}
                </a>
              </Link>
            </div>
            <Button className={s.abilityButton} onClick={handleAbilityButton}>
              {v ? "Обычная версия" : buttonText}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
