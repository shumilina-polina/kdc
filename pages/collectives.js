import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import { CollectivesActionTypes } from "store/actionTypes/CollectivesActionTypes";
import { COLLECTIVES_PER_PAGE } from "services/config";
import Skeleton from "react-loading-skeleton";

import CollectivesFilters from "Components/CollectivesFilters/CollectivesFilters";
import CollectiveCard from "Components/CollectiveCard/CollectiveCard";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import Button from "UI/Button/Button";

import "react-loading-skeleton/dist/skeleton.css";
import s from "styles/pages/Collectives.module.scss";

export default function Home() {
  const dispatch = useDispatch();

  const {
    total,
    loading,
    collectives,
    offset,
    filters: { trend, price, location },
  } = useSelector((state) => state.collectives);

  useEffect(() => {
    if (loading) {
      ApiService.getCollectives(offset, trend, price, location).then((res) => {
        dispatch({
          type: CollectivesActionTypes.UPDATE_COLLECTIVES,
          payload: res,
        });
      });
    }
  }, [loading]);

  const loadMoreCollectives = () => {
    if (Number(total) > offset + COLLECTIVES_PER_PAGE) {
      dispatch({
        type: CollectivesActionTypes.FETCHING_COLLECTIVES,
      });
      ApiService.getCollectives(offset, trend, price, location).then((res) => {
        dispatch({
          type: CollectivesActionTypes.UPDATE_COLLECTIVES,
          payload: {
            total: res.total,
            collectives: [...collectives, ...res.collectives],
          },
        });
      });
    }
  };

  return (
    <>
      <Head>
        <title>Collectives Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={s.container}>
            <div className={s.title}>
              <span className={s.text}>Коллективы</span>
              {loading ? (
                <Skeleton count={3} />
              ) : (
                <span className={s.number}>{total}</span>
              )}
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <CollectivesFilters />
      </div>

      <div className={s.wrapper}>
        <Container className={s.container}>
          <div className={s.collectives}>
            {loading
              ? [...Array(collectives.length + COLLECTIVES_PER_PAGE)].map(
                  (e, index) => (
                    <Skeleton
                      key={`collectiveCardSkeleton${index}`}
                      count={15}
                    />
                  )
                )
              : collectives
              ? collectives.map((collective) => (
                  <CollectiveCard
                    key={`list_collective_${collective.id}`}
                    collective={collective}
                    className={s.card}
                  />
                ))
              : "Записей не найдено"}
          </div>
          <div>
            <div className={s.loadWrapper}>
              <Button
                className={s.loadmore}
                onClick={() => loadMoreCollectives()}
                disable={loading}
              >
                Показать еще
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
