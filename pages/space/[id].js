import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Container from "UI/Container/Container";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import apiService from "services/apiService";
import { Skeleton } from "@mui/material";

import "react-loading-skeleton/dist/skeleton.css";
import { routes } from "shared/enums/pages";
import ModalWindow from "UI/Modal/ModalWindow";

import s from "styles/pages/SingleSpace.module.scss";
import ReserveSpaceWindow from "Components/ReserveSpaceWindow/ReserveSpaceWindow";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const SingleColectivePage = (props) => {
  const {
    isReady,
    query: { id },
  } = useRouter();

  const [loading, setLoading] = useState(true);
  const [space, setSpace] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isReady) {
      apiService.getSpaceByID(id).then((res) => {
        setLoading(false);
        setSpace(res);
      });
    }
  }, [isReady]);

  return (
    <>
      <Header />

      <div className={cn(s.borderBottom)}>
        <div className={s.padding}>
          <Container
            className={cn(s.borderLeftRight, s.container, s.space)}
          ></Container>
        </div>
      </div>
      <div className={cn(s.borderBottom)}>
        <div className={s.padding}>
          <Container className={cn(s.borderLeftRight, s.container, s.header)}>
            <ButtonArrow direction="back" color="red" hasLink href={routes.spaces} />
            <span className={s.headerText}>Все пространства</span>
          </Container>
        </div>
      </div>

      <div className={s.padding}>
        <Container className={cn(s.container, s.borderLeftRight, s.main)}>
          <div>
            {loading ? (
              <Skeleton className={s.skeleton} />
            ) : (
              <img className={s.thumbnail} src={space.thumbnail} />
            )}
          </div>
          <div className={cn(s.info)}>
            <div className={cn(s.cardHeader, s.borderBottom)}>
              {loading ? (
                <Skeleton className={s.skeleton} />
              ) : (
                <span className={s.cardTitle}>{space.title}</span>
              )}
              <Button onClick={() => setOpen(true)} className={s.button}>
                Забронировать
              </Button>
            </div>
            <div className={cn(s.other, s.borderBottom, s.padding)}>
              <div className={s.block}>
                <span className={s.secondary}>Вместимость:</span>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <span className={s.value}>
                    <span className={s.oswald}>{space.capacity}</span>
                    <span>человек</span>
                  </span>
                )}
              </div>
              <div className={s.block}>
                <span className={s.secondary}>Режим работы:</span>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <span className={s.oswald}>{space.working}</span>
                )}
              </div>
              <div className={s.block}>
                <span className={s.secondary}>Стоимость аренды:</span>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <span className={s.oswald}>{space.price}</span>
                )}
              </div>
            </div>
            <div className={cn(s.location, s.borderBottom)}>
              <div className={s.adress}>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <>
                    <span className={s.secondary}>Адрес:</span>
                    <span className={s.oswald}>{space.adress}</span>
                  </>
                )}
              </div>
              <div className={s.coordsIcon}>
                <img src="/assets/icons/location.svg" />
              </div>
            </div>
            <div className={cn(s.facility, s.borderBottom)}>
              <span className={s.oswald}>
                Организационно-техническое обеспечение мероприятия
              </span>
              <Link href="">
                <span className={s.link}>
                  <a>Смотреть PDF-файл</a>
                  <img className={s.icon} src="/assets/icons/arrowRight.svg" />
                </span>
              </Link>
            </div>
            <div className={cn(s.snaps, loading ? s.loading : null)}>
              {loading ? (
                <Skeleton
                  className={cn(s.skeleton, loading ? s.loadingImg : null)}
                />
              ) : (
                <img src={space.snaps[0]} />
              )}
              {loading ? (
                <Skeleton
                  className={cn(s.skeleton, loading ? s.loadingImg : null)}
                />
              ) : (
                <img src={space.snaps[1]} />
              )}
              {loading ? (
                <Skeleton
                  className={cn(s.skeleton, loading ? s.loadingImg : null)}
                />
              ) : (
                <img src={space.snaps[2]} />
              )}
            </div>
          </div>
        </Container>
      </div>

      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Забронировать пространство"
      >
        <ReserveSpaceWindow space={space} />
      </ModalWindow>

      <Footer />
    </>
  );
};

export default SingleColectivePage;
