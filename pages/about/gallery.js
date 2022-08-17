import Footer from "Components/Footer/Footer";
import GalleryBlock from "Components/GalleryBlock/GalleryBlock";
import Header from "Components/Header/Header";
import Head from "next/head";

const GalleryPage = () => {
  return (
    <>
      <Head>
        <title>КДЦ Московский - Галлереи</title>
      </Head>

      <Header />
      <GalleryBlock />
      <Footer />
    </>
  );
};

export default GalleryPage;
