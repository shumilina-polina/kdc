import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import NewsCard from "Components/NewsCard/NewsCard";
import NewsList from "Components/NewsList/NewsList";
import Head from "next/head";

import s from "styles/pages/News.module.scss";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Title from "UI/Title/Title";
import Wrapper from "UI/Wrapper/Wrapper";

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>КДЦ Московский - Дополнительно</title>
      </Head>

      <Header />
      <Wrapper space borderBottom />

      <Wrapper>
        <div className={s.header}>
          <ButtonArrow hasLink href="/" color="red" />
          <span className={s.navigation}>Главная</span>
        </div>
      </Wrapper>

      <Wrapper borderTop borderBottom>
        <Title>Новости</Title>
      </Wrapper>

      <Wrapper>
        <div className={s.cards}>
          <NewsList />
        </div>
      </Wrapper>

      <Footer />
    </>
  );
};

export default FaqPage;
