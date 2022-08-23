import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import apiService from "services/apiService";
import { Skeleton } from "@mui/material";

import "react-loading-skeleton/dist/skeleton.css";
import { routes } from "shared/enums/pages";
import ModalWindow from "UI/Modal/ModalWindow";

import s from "styles/pages/SingleSpace.module.scss";
import ReserveSpaceWindow from "Components/ReserveSpaceWindow/ReserveSpaceWindow";
import Wrapper from "UI/Wrapper/Wrapper";
import Head from "next/head";
import { useSelector } from "react-redux";

const SingleColectivePage = (props) => {
  const {
    isReady,
    query: { id },
  } = useRouter();

  const [loading, setLoading] = useState(true);
  const [space, setSpace] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

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
      <Head>
        <title>{`КДЦ Московский - ${space?.title || ""}`}</title>
      </Head>

      <Header />

      <Wrapper space borderBottom />

      <Wrapper borderBottom>
        <div className={s.header}>
          <ButtonArrow
            direction="back"
            color="red"
            hasLink
            href={routes.spaces}
          />
          <span className={cn(s.headerText, v ? s.ability : null)}>
            Все пространства
          </span>
        </div>
      </Wrapper>

      <Wrapper>
        <div className={s.main}>
          <div>
            {loading ? (
              <Skeleton className={s.skeleton} />
            ) : (
              <img className={s.thumbnail} src={space.thumbnail} />
            )}
          </div>
          <div className={s.info}>
            <div className={cn(s.cardHeader, s.borderBottom)}>
              {loading ? (
                <Skeleton className={s.skeleton} />
              ) : (
                <span className={cn(s.cardTitle, v ? s.ability : null)}>
                  {space.title}
                </span>
              )}
              <Button onClick={() => setOpen(true)} className={s.button}>
                Забронировать
              </Button>
            </div>
            <div className={cn(s.other, s.borderBottom, v ? s.ability : null)}>
              <div className={s.block}>
                <span className={cn(s.secondary, v ? s.ability : null)}>
                  Вместимость:
                </span>
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
                <span className={cn(s.secondary, v ? s.ability : null)}>
                  Режим работы:
                </span>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <span className={s.oswald}>{space.working}</span>
                )}
              </div>
              <div className={s.block}>
                <span className={cn(s.secondary, v ? s.ability : null)}>
                  Организационно-техническое обеспечение мероприятия:
                </span>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <span className={s.oswald}>{space.price}</span>
                )}
              </div>
            </div>
            <div
              className={cn(s.location, s.borderBottom, v ? s.ability : null)}
            >
              <div className={s.adress}>
                {loading ? (
                  <Skeleton className={s.skeleton} />
                ) : (
                  <>
                    <span className={cn(s.secondary, v ? s.ability : null)}>
                      Адрес:
                    </span>
                    <span className={s.oswald}>{space.adress}</span>
                  </>
                )}
              </div>
              <div className={s.coordsIcon}>
                {space?.panorama ? (
                  <span className={cn(s.panoramaText, v ? s.ability : null)}>
                    3d-панорама
                    <Link
                      href={{
                        pathname: "/panarama",
                        query: {
                          url: space?.panorama,
                        },
                      }}
                    >
                      <a target="_blank" className={s.iconPanorama}>
                        <img src="/assets/icons/panorama.svg" />
                      </a>
                    </Link>
                    <ButtonArrow
                      direction="forward"
                      color="red"
                      className={s.arrowButtonPanoram}
                      blank
                      hasLink
                      href={{
                        pathname: "/panarama",
                        query: {
                          url: space?.panorama,
                        },
                      }}
                    />
                  </span>
                ) : null}
              </div>
            </div>
            <div className={cn(s.facility, s.borderBottom)}>
              <span className={cn(s.oswald, v ? s.ability : null)}>
                Организационно-техническое обеспечение мероприятия
              </span>
              {loading ? (
                <Skeleton sx={{ width: "50px" }} />
              ) : (
                <span className={s.link}>
                  <Link href={space.file}>
                    <a
                      target="_blank"
                      className={cn(s.link, v ? s.ability : null)}
                    >
                      Подробнее
                    </a>
                  </Link>
                  <img className={s.icon} src="/assets/icons/arrowRight.svg" />
                </span>
              )}
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
        </div>
      </Wrapper>

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
