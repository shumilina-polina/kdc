import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Head from "next/head";

import cn from "classnames";
import SpaceCard from "Components/SpaceCard/SpaceCard";

import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";
import Button from "UI/Button/Button";
import { SPACES_PER_PAGE } from "services/config";

import s from "styles/pages/Spaces.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";
import BuildingMap from "Components/BuildingMap/BuildingMap";

export default function Home() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);

  const onLoadMore = () => {
    if (offset + SPACES_PER_PAGE < total) {
      setOffset(offset + SPACES_PER_PAGE);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading) {
      apiService
        .getSpaces(offset, SPACES_PER_PAGE)
        .then((res) => {
          if (res.data.length > 0)
            [res.data[0], res.data[1]] = [res.data[1], res.data[0]];
          setSpaces([...spaces, ...res.data]);
          setTotal(res.total);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>КДЦ Московский - Пространства</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Wrapper borderBottom>
          <div className={cn(s.padding, s.title)}>
            <span className={cn(s.oswald)}>Карта КДЦ “Московский”</span>
          </div>
        </Wrapper>

        <Wrapper borderBottom>
          <BuildingMap />
        </Wrapper>

        <Wrapper borderBottom>
          <div className={cn(s.padding, s.title, s.spacesTitle)}>
            <span className={s.oswald}>Пространства </span>
            <span className={cn(s.oswald, s.counter)}>
              {loading ? <Skeleton /> : total}
            </span>
          </div>
        </Wrapper>

        <Wrapper>
          <div className={s.cards}>
            {loading
              ? [...Array(spaces.length + SPACES_PER_PAGE)].map(
                  (skkeleton, i) => (
                    <Skeleton key={`skeleton${i}`} className={s.skeleton} />
                  )
                )
              : spaces.map((space) => (
                  <SpaceCard key={`space${space.id}`} space={space} />
                ))}
          </div>
          <div className={s.buttonWrapper}>
            <Button className={s.button} onClick={onLoadMore} disable={loading}>
              Показать еще
            </Button>
          </div>
        </Wrapper>
      </main>

      <Footer />
    </>
  );
}
