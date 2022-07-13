import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Head from "next/head";

import cn from "classnames";

import Container from "UI/Container/Container";
import SpaceCard from "Components/SpaceCard/SpaceCard";

import s from "styles/pages/Spaces.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spaces Page</title>
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
              <span className={cn(s.oswald, s.counter)}>7</span>
            </Container>
          </div>
        </div>

        <Container>
          <Container className={cn(s.container, s.borderLeftRight, s.cards)}>
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
          </Container>
        </Container>
      </main>

      <Footer />
    </>
  );
}
