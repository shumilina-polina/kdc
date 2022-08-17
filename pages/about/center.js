import CenterBlock from "Components/CenterBlock/CenterBlock";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Head from "next/head";

const CenterPage = () => {
  return (
    <>
      <Head>
        <title>КДЦ Московский - Вторая площадка</title>
      </Head>

      <Header />
      <CenterBlock />
      <Footer />
    </>
  );
};

export default CenterPage;
