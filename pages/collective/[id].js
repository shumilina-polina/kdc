import { useRouter } from "next/router";
import cn from "classnames";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

import Container from "UI/Container/Container";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import { useEffect, useState } from "react";
import apiService from "services/apiService";
import Skeleton from "react-loading-skeleton";
import { Skeleton as ImageSkeleton } from "@mui/material";

import "react-loading-skeleton/dist/skeleton.css";
import s from "styles/pages/SingleCollective.module.scss";
import { routes } from "shared/enums/pages";
import ModalWindow from "UI/Modal/ModalWindow";
import JoinCollectiveWindow from "Components/JoinCollectiveWindow/JoinCollectiveWindow";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const SingleColectivePage = () => {
  const {
    isReady,
    query: { id },
  } = useRouter();
  const [loading, setLoading] = useState(true);
  const [collective, setCollective] = useState(null);
  const [isOpne, setOpen] = useState(false);

  useEffect(() => {
    if (isReady) {
      apiService.getCollectiveByID(id).then((res) => {
        setLoading(false);
        setCollective(res);
      });
    }
  }, [isReady]);

  return (
    <>
      <Header />

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.borderLeftRight, s.space)} />
        </div>
      </div>

      <div className={s.main}>
        <Container>
          <div className={s.header}>
            <ButtonArrow
              direction="back"
              color="red"
              href={routes.collectives}
              hasLink
            />
            <span>Все коллективы</span>
          </div>
          <div className={s.content}>
            <div className={cn(s.gallery, loading ? s.loading : null)}>
              {loading ? (
                <ImageSkeleton className={s.imageSkeleton} />
              ) : (
                <img className={s.thumbnail} src={collective.thumbnail} />
              )}
              {loading ? (
                <ImageSkeleton className={s.skeleton} />
              ) : (
                <img className={s.thumbnail} src={collective.snap1} />
              )}
              {loading ? (
                <ImageSkeleton className={s.skeleton} />
              ) : (
                <img className={s.thumbnail} src={collective.snap2} />
              )}
              {loading ? (
                <ImageSkeleton className={s.skeleton} />
              ) : (
                <img className={s.thumbnail} src={collective.snap3} />
              )}
              {loading ? (
                <ImageSkeleton className={s.skeleton} />
              ) : (
                <img className={s.thumbnail} src={collective.snap4} />
              )}
            </div>
            <div className={s.info}>
              <div className={cn(s.title, s.borderBottom)}>
                {loading ? (
                  <Skeleton />
                ) : (
                  <h2>{htmlDecode(collective.title)}</h2>
                )}
              </div>
              <div className={s.table}>
                <div className={s.column}>
                  <span className={s.secondary}>Направление:</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.bold}>{collective.trend}</span>
                  )}
                </div>
                <div className={s.column}>
                  <span className={s.secondary}>Стоимость:</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.bold}>
                      {collective.price == 0
                        ? "Бесплатно"
                        : `${collective.price} руб.`}
                    </span>
                  )}
                </div>
                <div className={s.column}>
                  <span className={s.secondary}>Групповые занятия:</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.bold}>{collective.timetable}</span>
                  )}
                </div>
                <div>
                  <span className={s.secondary}>Контакты:</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.bold}>{collective.phone}</span>
                  )}
                </div>
                <div>
                  <span className={s.secondary}>Категория:</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.bold}>{collective.limits}</span>
                  )}
                </div>
                <div className={s.button}>
                  <Button onClick={() => setOpen(true)}>Записаться</Button>
                </div>
                <div>
                  <span className={s.secondary}>Адрес:</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.bold}>{collective.location}</span>
                  )}
                </div>
                <div className={s.location}>
                  {loading ? <Skeleton /> : <span>{collective.classroom}</span>}
                  <span className={s.icon}>
                    <img src="/assets/icons/location.svg" />
                  </span>
                </div>
              </div>
              <div className={cn(s.description, s.borderBottom)}>
                <div
                  className={cn(s.descTitle, s.borderBottom, s.borderLeftRight)}
                >
                  <span className={s.bold}>Описание</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={s.secondary}>
                      {htmlDecode(collective.title)}
                    </span>
                  )}
                </div>
                <div className={s.text}>
                  {loading ? (
                    <Skeleton count={10} />
                  ) : (
                    <p className={s.padding}>
                      {htmlDecode(collective.content)}
                    </p>
                  )}
                </div>
              </div>
              <div className={s.timetable}>
                <div
                  className={cn(s.descTitle, s.borderBottom, s.borderLeftRight)}
                >
                  <span className={s.bold}>Программа</span>
                </div>
                <div>
                  <ul className={s.list}>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Выявление внутреннего слуха
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Расширение диапозона певческих голосов{" "}
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Основы актерского мастерства
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Сценическое движение{" "}
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Индивидуальный подход к каждому участнику
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ModalWindow
        title="Запись в коллектив"
        isOpen={isOpne}
        onClose={() => setOpen(false)}
      >
        <JoinCollectiveWindow collective={collective} />
      </ModalWindow>

      <Footer />
    </>
  );
};

export default SingleColectivePage;
