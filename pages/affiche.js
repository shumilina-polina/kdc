import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Head from "next/head";

import AfficheComponent from "Components/AfficheComponent/AfficheComponent";
import EventsComponent from "Components/EventsComponent/EventsComponent";

export default function AffichePage() {
  return (
    <>
      <Head>
        <title>КДЦ Московский - Афиша</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AfficheComponent />
      <EventsComponent />
      <Footer />
    </>
  );
}
