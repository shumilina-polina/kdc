import Head from "next/head";
import Image from "next/image";

import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import CustomTabs from "UI/CustomTabs/CustomTabs";
import HistoryBlock from "Components/HistoryBlock/HistoryBlock";
import { AboutData } from "shared/constants/pages/AboutData";
import ProjectsBlock from "Components/ProjectsBlock/ProjectsBlock";

import s from "styles/pages/About.module.scss";
import GalleryCard from "Components/GalleryCard/GalleryCard";

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
      </Container>

      <div className={s.tabsContainer}>
        <CustomTabs
          titles={titles}
          components={[
            <HistoryBlock key={`historyBlock`} />,
            2,
            <ProjectsBlock key={`projectsBlock`} />,
            <GalleryCard />,
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
