import Head from "next/head";
import Image from "next/image";

import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import CustomTabs from "UI/CustomTabs/CustomTabs";
import HistoryBlock from "Components/HistoryBlock/HistoryBlock";
import { AboutData } from "shared/constants/pages/AboutData";
import ProjectsBlock from "Components/ProjectsBlock/ProjectsBlock";
import CenterBlock from "Components/CenterBlock/CenterBlock";
import GalleryCard from "Components/GalleryCard/GalleryCard";

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
      </Container>

      <div className={s.tabsContainer}>
        <CustomTabs
          titles={titles}
          components={[
            <HistoryBlock key={`historyBlock`} />,
            <CenterBlock key={`centerBlock`} />,
            <ProjectsBlock key={`projectsBlock`} />,
            <GalleryCard key={`galleryBlock`} />,
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
