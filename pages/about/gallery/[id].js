import { useRouter } from "next/router";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

import { useEffect, useState } from "react";
import apiService from "services/apiService";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "styles/pages/SingleGallery.module.scss";
import Title from "UI/Title/Title";
import { Skeleton } from "@mui/material";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import Link from "next/link";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import { routes } from "shared/enums/pages";

const SingleColectivePage = () => {
  const {
    isReady,
    query: { id },
  } = useRouter();
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (isReady) {
      apiService
        .getGalleryById(id)
        .then((res) => setGallery(res))
        .finally(() => setLoading(false));
    }
  }, [isReady]);

  return (
    <>
      <Header />

      <Wrapper borderBottom>
        {loading ? (
          <Skeleton sx={{ height: "300px" }} />
        ) : (
          <div className={s.slide}>
            <div className={s.wrapper}>
              <div className={s.info}>
                <span className={s.title}>{useHtmlDecode(gallery.title)}</span>
                <span className={s.date}>{gallery.date}</span>
                <div className={s.shadow} />
              </div>
            </div>

            <img className={s.poster} src={gallery.thumbnail} />
          </div>
        )}
      </Wrapper>

      <Wrapper>
        {loading ? (
          <Skeleton sx={{ height: "100px" }} />
        ) : (
          <div className={s.header}>
            <ButtonArrow color="red" href={routes.gallery} hasLink />
            <Title className={s.headerTitle}>
              {useHtmlDecode(gallery.title)}
            </Title>
          </div>
        )}
      </Wrapper>

      <Wrapper>
        <div className={s.images}>
          {loading
            ? [...Array(8)].map((el, index) => (
                <Skeleton
                  key={`imageSkeleton_${index}`}
                  sx={{ height: "200px" }}
                />
              ))
            : gallery.images.map((image) => (
                <div className={s.image}>
                  <Link href={image}>
                    <a className={s.link}>
                      <img src={image} />
                    </a>
                  </Link>
                </div>
              ))}
        </div>
      </Wrapper>

      <Footer />
    </>
  );
};

export default SingleColectivePage;
