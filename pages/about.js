import Head from "next/head";
import Image from "next/image";

import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";
import CustomTabs from "UI/CustomTabs/CustomTabs";
import HistoryBlock from "Components/HistoryBlock/HistoryBlock";
import ProjectsBlock from "Components/ProjectsBlock/ProjectsBlock";
import CenterBlock from "Components/CenterBlock/CenterBlock";
import GalleryBlock from "Components/GalleryBlock/GalleryBlock";
import { AboutData } from "shared/constants/pages/AboutData";

import s from "styles/pages/About.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";

export default function Home() {
  const {
    tabs: { titles },
  } = AboutData;

  return (
    <>
      <Head>
        <title>КДЦ Московский - О нас</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Wrapper>
        <div className={s.decorations}>
          <Image
            src="/assets/images/aboutDecorations.svg"
            width={1000}
            height={350}
          />
        </div>
      </Wrapper>

      <CustomTabs
        titles={titles}
        components={[
          <HistoryBlock key={`historyBlock`} />,
          <CenterBlock key={`centerBlock`} />,
          <ProjectsBlock key={`projectsBlock`} />,
          <GalleryBlock key={`galleryBlock`} />,
        ]}
      />

      <Footer />
    </>
  );
}
