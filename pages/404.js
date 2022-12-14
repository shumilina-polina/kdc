import Head from "next/head";
import Image from "next/image";

import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import { NotFoundConst } from "shared/constants/NotFoundConst";

import s from "styles/pages/NotFound.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";

const FourOhFour = () => {
  const {
    head: { title },
    content: { image, title: mainTitle, subtitle, secondaryTitle },
    decorationsAlt,
  } = NotFoundConst;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <Wrapper space borderBottom />
      <Wrapper>
        <div className={s.container}>
          <div className={s.content}>
            <h1>{mainTitle}</h1>
            <span className={s.subtitle}>{subtitle}</span>
            <span className={s.secondaryTitle}>{secondaryTitle}</span>
          </div>
          <Image src={image} alt={decorationsAlt} width={994} height={471} />
        </div>
      </Wrapper>

      <Footer />
    </>
  );
};

export default FourOhFour;
