import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import { routes } from "shared/enums/pages";
import { ContactConst } from "shared/constants/ContactConst";

import Skeleton from "react-loading-skeleton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CollectiveCard from "Components/CollectiveCard/CollectiveCard";

import "react-loading-skeleton/dist/skeleton.css";
import s from "./centerBlock.module.scss";
import apiService from "services/apiService";
import Wrapper from "UI/Wrapper/Wrapper";
import { useSelector } from "react-redux";

const CenterBlock = () => {
  const [loading, setLoading] = useState(true);
  const [collectives, setCollectives] = useState([]);

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  useEffect(() => {
    apiService
      .getCollectives(0, 4)
      .then((res) => setCollectives(res.data))
      .finally(setLoading(false));
  }, []);

  return (
    <div className={s.main}>
      <Wrapper borderBottom>
        <div className={s.header}>
          <span className={cn(s.oswald, s.padding)}>
            Вторая площадка "КДЦ "МОСКОВСКИЙ"
          </span>
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.info}>
          <div className={s.description}>
            <p className={v ? s.ability : null}>
              С 2014 г. для жителей Московского района открыта ещё одна площадка
              Культурно-досугового центра «Московский», находящаяся по адресу{" "}
              <span className={s.oswald}>Варшавская улица дом 98.</span>
            </p>
            <p className={cn(s.padding, v ? s.ability : null)}>
              Теперь творчество живёт и здесь, на территории жилого массива,
              приблизив жителей района <br />к культуре шаговой доступности. На
              «Варшавской» регулярно проходят различные концерты, тематические
              мероприятия, игровые программы для детей, мастер-классы, а также
              мероприятия для молодёжи.
            </p>
          </div>
          <img
            src="/assets/images/centerTeam.jpg"
            className={s.thumbnail}
            width={516}
            height={312}
          />
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div>
          <span className={cn(s.oswald, s.title, s.subtitle)}>
            Ждут на занятия новых участников кружки художественной
            самодеятельности:
          </span>
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.collectivesCards}>
          {loading
            ? [...Array(collectives.length)].map((el, index) => (
                <Skeleton key={`collectiveCardSkeleton${{ index }}`} />
              ))
            : collectives.map((collective) => (
                <CollectiveCard
                  key={`collectiveCard${collective.id}`}
                  collective={collective}
                />
              ))}
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.seeAll}>
          <Link href={routes.collectives}>
            <a className={s.icon}>
              <span className={s.oswald}>Смотреть все коллективы</span>
              <ArrowForwardIcon />
            </a>
          </Link>
        </div>
      </Wrapper>

      <Wrapper>
        <p className={cn(s.about, v ? s.ability : null)}>
          Новая площадка оснащена самыми современными техническими
          возможностями. Уютная обстановка, комфортные условия для занятий,
          молодые сотрудники, современные направления деятельности,
          адаптированные под разновозрастную аудиторию, удобное местоположение –
          всё это говорит о том, что скоро «КДЦ на Варшавской» станет ещё одним
          излюбленным местом проведения досуга для жителей Московского района.
        </p>
        <div className={s.footer}>
          <p className={cn(s.padding, s.oswald, s.title, s.borderRight)}>
            Следите за нашими новостями!
          </p>
          <div className={cn(s.padding)}>
            <p className={v ? s.ability : null}>
              «КДЦ на Варшавской» ждёт в гости всех, кто хочет прикоснуться к
              творчеству и сделать свою жизнь интересней. Малыши и их родители,
              школьники, молодёжь, бабушки и дедушки! Мы рады всем!
            </p>
            <p className={cn(s.oswald, v ? s.ability : null)}>
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
                  <a className={cn(s.link, s.oswald, v ? s.ability : null)}>
                    {ContactConst.phone}
                  </a>
                </Link>
              </div>
              <div>
                <Image src="/assets/icons/email.svg" width={30} height={30} />
                <Link href={`mailto:${ContactConst.email}`}>
                  <a className={cn(s.link, s.oswald, v ? s.ability : null)}>
                    {ContactConst.email}
                  </a>
                </Link>
              </div>
              <div>
                <Image src="/assets/icons/vk.svg" width={30} height={30} />
                <Link href={ContactConst.vk}>
                  <a className={cn(s.link, s.oswald, v ? s.ability : null)}>
                    {ContactConst.vk}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CenterBlock;
