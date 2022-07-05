import cn from "classnames";

import { routes } from "shared/enums/pages";
import { ContactConst } from "shared/constants/ContactConst";

import Container from "UI/Container/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import s from "./centerBlock.module.scss";
import Link from "next/link";
import Image from "next/image";
import CollectiveCard from "Components/CollectiveCard/CollectiveCard";

const CenterBlock = () => {
  return (
    <div className={s.main}>
      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight, s.header)}>
            <span className={cn(s.oswald, s.padding)}>
              Вторая площадка "КДЦ "МОСКОВСКИЙ"
            </span>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight, s.info)}>
            <div className={s.description}>
              <p className={cn(s.padding, s.borderBottom)}>
                С 2014 г. для жителей Московского района открыта ещё одна
                площадка Культурно-досугового центра «Московский», находящаяся
                по адресу{" "}
                <span className={s.oswald}>Варшавская улица дом 98.</span>
              </p>
              <p className={s.padding}>
                Теперь творчество живёт и здесь, на территории жилого массива,
                приблизив жителей района <br />к культуре шаговой доступности.
                На «Варшавской» регулярно проходят различные концерты,
                тематические мероприятия, игровые программы для детей,
                мастер-классы, а также мероприятия для молодёжи.
              </p>
            </div>
            <img
              src="/assets/images/centerTeam.jpg"
              className={s.thumbnail}
              width={516}
              height={312}
            />
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight, s.subtitle)}>
            <span className={cn(s.padding, s.oswald, s.title)}>
              Ждут на занятия новых участников кружки художественной
              самодеятельности:
            </span>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container
            className={cn(s.container, s.borderLeftRight, s.collectivesCards)}
          >
            <CollectiveCard />
            <CollectiveCard />
            <CollectiveCard />
            <CollectiveCard />
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={cn(s.wrapper)}>
          <Container className={cn(s.container, s.borderLeftRight, s.seeAll)}>
            <Link href={routes.collectives}>
              <a className={s.icon}>
                <span className={s.oswald}>Смотреть все коллективы</span>
                <ArrowForwardIcon />
              </a>
            </Link>
          </Container>
        </div>
      </div>

      <div>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <p className={cn(s.padding, s.borderBottom)}>
              Новая площадка оснащена самыми современными техническими
              возможностями. Уютная обстановка, комфортные условия для занятий,
              молодые сотрудники, современные направления деятельности,
              адаптированные под разновозрастную аудиторию, удобное
              местоположение – всё это говорит о том, что скоро «КДЦ на
              Варшавской» станет ещё одним излюбленным местом проведения досуга
              для жителей Московского района.
            </p>
            <div className={s.footer}>
              <p className={cn(s.padding, s.oswald, s.title, s.borderRight)}>
                Следите за нашими новостями!
              </p>
              <div className={cn(s.padding)}>
                <p>
                  «КДЦ на Варшавской» ждёт в гости всех, кто хочет прикоснуться
                  к творчеству и сделать свою жизнь интересней. Малыши и их
                  родители, школьники, молодёжь, бабушки и дедушки! Мы рады
                  всем!
                </p>
                <p className={cn(s.oswald)}>
                  Ждём Вас по адресу: Варшавская улица д. 98, вход со двора.
                </p>
                <div className={s.contacts}>
                  <div>
                    <Image
                      src="/assets/icons/phonedark.svg"
                      width={30}
                      height={30}
                    />
                    <Link href={`tel:${ContactConst.phone}`}>
                      <a className={cn(s.link, s.oswald)}>
                        {ContactConst.phone}
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/assets/icons/email.svg"
                      width={30}
                      height={30}
                    />
                    <Link href={`mailto:${ContactConst.email}`}>
                      <a className={cn(s.link, s.oswald)}>
                        {ContactConst.email}
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Image src="/assets/icons/vk.svg" width={30} height={30} />
                    <Link href={ContactConst.vk}>
                      <a className={cn(s.link, s.oswald)}>{ContactConst.vk}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CenterBlock;
