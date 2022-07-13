import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Head from "next/head";

import cn from "classnames";

import Container from "UI/Container/Container";
import SpaceCard from "Components/SpaceCard/SpaceCard";

import s from "styles/pages/Spaces.module.scss";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";
import Button from "UI/Button/Button";
import { SPACES_PER_PAGE } from "services/config";

export default function Home() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [totalSpaces, setTotalSpaces] = useState(null);

  const onLoadMore = () => {
    if (totalSpaces > spaces.length) {
      setOffset((prevState) => prevState + SPACES_PER_PAGE);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading) {
      apiService
        .getSpaces(offset)
        .then((res) => {
          setTotalSpaces(Number(res.total));
          setSpaces([...spaces, ...res.spaces]);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Страница Пространства</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className={s.borderBottom}>
          <div className={s.padding}>
            <Container className={cn(s.container, s.borderLeftRight, s.title)}>
              <span className={cn(s.oswald)}>Карта КДЦ “Московский”</span>
            </Container>
          </div>
        </div>

        <div className={s.borderBottom}>
          <div className={s.padding}>
            <Container
              className={cn(s.container, s.borderLeftRight, s.map)}
            ></Container>
          </div>
        </div>

        <div className={s.borderBottom}>
          <div className={s.padding}>
            <Container
              className={cn(
                s.container,
                s.borderLeftRight,
                s.title,
                s.spacesTitle
              )}
            >
              <span className={cn(s.oswald)}>Пространства</span>
              {loading ? (
                <Skeleton />
              ) : (
                <span className={cn(s.oswald, s.counter)}>{totalSpaces}</span>
              )}
            </Container>
          </div>
        </div>

        <Container>
          <div className={s.borderLeftRight}>
            <Container className={cn(s.container, s.cards)}>
              {loading
                ? [...Array(spaces.length + SPACES_PER_PAGE)].map(
                    (skkeleton, i) => (
                      <Skeleton key={`skeleton${i}`} className={s.skeleton} />
                    )
                  )
                : spaces.map((space) => (
                    <SpaceCard key={`space${space.id}`} space={space} />
                  ))}
            </Container>
            <div className={s.buttonWrapper}>
              <Button
                className={s.button}
                onClick={onLoadMore}
                disable={loading}
              >
                Показать еще
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
