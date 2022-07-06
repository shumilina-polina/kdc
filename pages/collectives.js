import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import cn from "classnames";
import { CollectivesActionTypes } from "store/actionTypes/CollectivesActionTypes";
import ApiService from "services/apiService";
import Skeleton from 'react-loading-skeleton'

import CollectiveCard from "Components/CollectiveCard/CollectiveCard";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import SelectInput from "UI/SelectInput/SelectInput";
import Button from "UI/Button/Button";

import 'react-loading-skeleton/dist/skeleton.css'
import s from "styles/pages/Collectives.module.scss";
import CollectivesFilters from "Components/CollectivesFilters/CollectivesFilters";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    ApiService.getCollectives().then((res) =>
      dispatch({
        type: CollectivesActionTypes.FETCH_COLLECTIVES_SUCCESS,
        payload: res,
      })
    );
  }, []);

  const { loading, collectives } = useSelector((state) => state.collectives);

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
              <span className={s.number}>28</span>
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
            {collectives.map((collective) => loading ? <Skeleton count={15} /> :
              <CollectiveCard
                key={`list_collective${collective.id}`}
                collective={collective}
                className={s.card}
              />
          )}
          </div>
          <div>
            <div className={s.loadWrapper}>
              <Button className={s.loadmore}>Показать еще</Button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
