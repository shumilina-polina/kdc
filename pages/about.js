import Head from "next/head";
import Image from "next/image";

import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import CustomTabs from "UI/CustomTabs/CustomTabs";
import { AboutData } from "shared/constants/pages/AboutData";

import s from "styles/pages/About.module.scss";

export default function Home() {
  const {
    tabs: { titles },
  } = AboutData;

  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container className={s.container}>
        <div className={s.decorations}>
          <Image
            src="/assets/images/aboutDecorations.svg"
            width={1000}
            height={350}
          />
        </div>

        <div className={s.tabsContainer}>
          <CustomTabs titles={titles} components={[1, 2, 3, 4]} />
        </div>
      </Container>

      <Footer />
    </>
  );
}
