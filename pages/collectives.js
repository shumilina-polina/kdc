import Head from "next/head";

import cn from "classnames";
import CollectiveCard from "Components/CollectiveCard/CollectiveCard";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Container from "UI/Container/Container";

import SelectInput from "UI/SelectInput/SelectInput";
import Button from "UI/Button/Button";

import s from "styles/pages/Collectives.module.scss";

const collectives = [
  {
    id: 1,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 2,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 3,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 4,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 5,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 6,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 7,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
  {
    id: 8,
    title: "Фейверк",
    category: "Детская цирковая студия",
    price: 200,
    adress: "Московский пр,152",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Collectives Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={s.container}>
            <div className={s.title}>
              <span className={s.text}>Коллективы</span>
              <span className={s.number}>28</span>
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.filters)}>
            <SelectInput
              label="Категории"
              variants={[
                "Вокальные",
                "Хореографические",
                "Хоровые",
                "Оркестровые",
                "Театральные",
                "Оригинального жанра",
              ]}
              className={s.select}
            />
            <SelectInput
              label="Стоимость"
              variants={["Платные", "Бесплатные"]}
              className={s.select}
            />
            <SelectInput
              label="Адрес"
              variants={["Московский пр,152", "Ул. Варшавская, 98"]}
              className={s.select}
            />
            <Button className={s.button}>Сбросить выбор</Button>
          </Container>
        </div>
      </div>

      <div className={s.wrapper}>
        <Container className={s.container}>
          <div className={s.collectives}>
            {collectives.map((collective) => (
              <CollectiveCard key={`list_collective${collective.id}`} className={s.card} />
            ))}
          </div>
          <div>
            <div className={s.loadWrapper}>
              <Button className={s.loadmore}>Показать еще</Button>
            </div>
          </div>
          
        </Container>
      </div>

      <Footer />
    </>
  );
}
