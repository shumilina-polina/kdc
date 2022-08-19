import { useRouter } from "next/router";
import cn from "classnames";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

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
import Wrapper from "UI/Wrapper/Wrapper";
import { useSelector } from "react-redux";
import Head from "next/head";

const htmlDecode = (content) => {
  const doc = new DOMParser().parseFromString(content, "text/html");
  return doc.documentElement.textContent;
};

const SingleColectivePage = () => {
  const {
    isReady,
    query: { id },
  } = useRouter();

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [loading, setLoading] = useState(true);
  const [collective, setCollective] = useState(null);
  const [isOpne, setOpen] = useState(false);

  useEffect(() => {
    if (isReady) {
      apiService
        .getCollectiveByID(id)
        .then((res) => setCollective(res))
        .finally(() => setLoading(false));
    }
  }, [isReady]);

  return (
    <>
      <Head>
        <title>{`КДЦ Московский - ${collective?.title || ""}`}</title>
      </Head>

      <Header />
      <Wrapper space borderBottom />
      {console.log(collective)}
      <div className={s.main}>
        <Wrapper>
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
                <div>
                  <img className={s.thumbnail} src={collective.thumbnail} />
                </div>
              )}
              {loading
                ? [...Array(4)].map((el, index) => (
                    <Skeleton
                      className={s.imageSkeleton}
                      key={`snapSkeleton_${index}`}
                    />
                  ))
                : collective.snaps.map((image, index) => (
                    <div key={`imageKey_${index}`}>
                      <img className={s.thumbnail} src={image} />
                    </div>
                  ))}
            </div>
            <div className={s.info}>
              <table className={s.table}>
                <tr>
                  <td className={s.title} colSpan={3}>
                    {loading ? <Skeleton /> : htmlDecode(collective.title)}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={s.secondary}>Направление:</span>
                    <p className={cn(s.bold, v ? s.ability : null)}>
                      {loading ? <Skeleton /> : collective.trend}
                    </p>
                  </td>

                  <td>
                    <span className={s.secondary}>Стоимость:</span>
                    <p className={cn(s.bold, v ? s.ability : null)}>
                      {loading ? (
                        <Skeleton />
                      ) : collective.price == 0 ? (
                        "Бесплатно"
                      ) : (
                        `${collective.price} руб.`
                      )}
                    </p>
                  </td>

                  <td>
                    <span className={s.secondary}>Групповые занятия:</span>
                    <p className={cn(s.bold, v ? s.ability : null)}>
                      {loading ? <Skeleton /> : collective.timetable}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className={s.secondary}>Контакты:</span>
                    <p className={cn(s.bold, v ? s.ability : null)}>
                      {loading ? <Skeleton /> : collective.phone}
                    </p>
                  </td>

                  <td>
                    <span className={s.secondary}>Категория:</span>
                    <p className={cn(s.bold, v ? s.ability : null)}>
                      {loading ? <Skeleton /> : collective.limits}
                    </p>
                  </td>

                  <td className={s.button}>
                    <Button onClick={() => setOpen(true)}>Записаться</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className={s.secondary}>Адрес: </span>
                    <span className={cn(s.bold, v ? s.ability : null)}>
                      {loading ? <Skeleton /> : collective.location}
                    </span>
                  </td>

                  <td colSpan={2}>
                    <div className={s.location}>
                      <span>
                        {loading ? <Skeleton /> : collective.classroom}
                      </span>
                    </div>
                  </td>
                </tr>
              </table>

              <div className={cn(s.description, s.borderBottom)}>
                <div className={cn(s.descTitle, s.border)}>
                  <span className={s.bold}>Руководитель</span>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <span className={cn(s.secondary, v ? s.ability : null)}>
                      {htmlDecode(collective.classroom)}
                    </span>
                  )}
                </div>
                <div className={cn(s.text, s.border)}>
                <span className={cn(s.bold, s.ticher)}>Описание</span>
                  {loading ? (
                    <Skeleton count={10} />
                  ) : (
                    <span className={cn(s.padding, s.about, v ? s.ability : null)}>
                      {htmlDecode(collective.content)}
                    </span>
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
                    {loading ? (
                      <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </>
                    ) : (
                      collective.program.map((item, index) => (
                        <li
                          key={`listItem_${index}`}
                          className={cn(s.item, v ? s.ability : null)}
                        >
                          <img src="/assets/icons/listmarker.svg" />
                          {item}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
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
