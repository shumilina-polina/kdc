import Image from "next/image";
import Link from "next/link";

import { FooterConst } from "shared/constants/FooterConst";
import Button from "UI/Button/Button";
import Container from "UI/Container/Container";

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

  return (
    <footer className={s.footerTag}>
      <div className={s.decorationTop}>
        <div className={s.square} />
      </div>
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
              <Button>{askButtonText}</Button>
              <Button className={s.abilityButton}>
                <Image src="/assets/icons/eye.svg" width={22} height={15} />
                {abilityButtonText}
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className={s.decoration}>
        <div className={s.triangle} />
      </div>
      <div className={s.copyright}>
        <span className={s.copyrightWrapper}>{copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
