import { useEffect, useState } from "react";
import Head from "next/head";

import ApiService from "services/apiService";
import { COLLECTIVES_PER_PAGE } from "services/config";

import CollectivesFilters from "Components/CollectivesFilters/CollectivesFilters";
import CollectiveCard from "Components/CollectiveCard/CollectiveCard";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Button from "UI/Button/Button";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "styles/pages/Collectives.module.scss";
import { Skeleton } from "@mui/material";

const CollectivesPage = () => {
  const POSTS_PER_PAGE = COLLECTIVES_PER_PAGE;

  const [loading, setLoading] = useState(true);
  const [collectives, setCollectives] = useState([]);
  const [total, setTotal] = useState(null);
  const [offset, setOffset] = useState(0);
  const [trends, setTrends] = useState([]);
  const [locations, setLocations] = useState([]);
  const [price, setPrice] = useState([]);

  const loadMoreCollectives = () => {
    if (offset < total) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading) {
      ApiService.getCollectives(
        offset,
        POSTS_PER_PAGE,
        trends,
        locations,
        price.includes("Бесплатные") ? true : false,
        price.includes("Платные") ? true : false
      )
        .then((res) => {
          setCollectives([...collectives, ...res.data]);
          setTotal(res.total);
          setOffset(POSTS_PER_PAGE + offset);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  useEffect(() => {
    setOffset(0);
    setCollectives([]);
    setLoading(true);
  }, [trends, locations, price]);

  return (
    <>
      <Head>
        <title>Коллективы</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Wrapper borderBottom>
        <div className={s.title}>
          <span className={s.text}>Коллективы</span>
          {loading ? <Skeleton /> : <span className={s.number}>{total}</span>}
        </div>
      </Wrapper>

      <div className={s.borderBottom}>
        <CollectivesFilters
          trends={trends}
          setTrends={setTrends}
          locations={locations}
          setLocations={setLocations}
          price={price}
          setPrice={setPrice}
        />
      </div>

      <Wrapper>
        <div className={s.collectives}>
          {loading
            ? [...Array(collectives.length + POSTS_PER_PAGE)].map(
                (e, index) => (
                  <Skeleton
                    sx={{ height: "200px" }}
                    key={`collectiveCardSkeleton${index}`}
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
      </Wrapper>
      <Footer />
    </>
  );
};

export default CollectivesPage;
