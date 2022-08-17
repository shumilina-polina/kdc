import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import HistoryBlock from "Components/HistoryBlock/HistoryBlock";
import Head from "next/head";

const HistoryPage = () => {
  return (
    <>
      <Head>
        <title>КДЦ Московский - История</title>
      </Head>

      <Header />
      <HistoryBlock />
      <Footer />
    </>
  );
};

export default HistoryPage;
