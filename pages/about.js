import Header from "Components/Header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
