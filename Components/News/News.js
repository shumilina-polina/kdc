import { routes } from "shared/enums/pages";
import Title from "UI/Title/Title";
import Button from "UI/Button/Button";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";

import Container from "UI/Container/Container";
import NewsItem from "Components/NewsItem/NewsItem";

import s from "./news.module.scss";

const news = [
  {
    id: 1,
    date: "22 апреля",
    poster: "https://dkmiit.ru/wp-content/uploads/2020/05/Balet-3.jpg",
    title: "Спектакль “ Мойдодыр”",
    content: 'Эстрадный театр малых форм "Петрополь-Арт" был основан в 2004 г.',
    category: "Новости учреждения",
  },
  {
    id: 2,
    date: "22 апреля",
    poster: "https://one-life.lviv.ua/assets/images/blog/balet/2-min.jpg",
    title: "Спектакль “ Мойдодыр”",
    content: 'Эстрадный театр малых форм "Петрополь-Арт" был основан в 2004 г.',
    category: "Новости города",
  },
  {
    id: 3,
    date: "22 апреля",
    poster: "https://www.balet-spb.ru/upload/iblock/bd0/_-_6.jpg",
    title: "Спектакль “ Мойдодыр”",
    content: 'Эстрадный театр малых форм "Петрополь-Арт" был основан в 2004 г.',
    category: "Новости города",
  },
  {
    id: 4,
    date: "22 апреля",
    poster:
      "https://bolshoi.ru/media/performances/ballet/290_ru_hxmgbcdrkiyfjdo_1440x896_p.jpg",
    title: "Спектакль “ Мойдодыр”",
    content: 'Эстрадный театр малых форм "Петрополь-Арт" был основан в 2004 г.',
    category: "Новости учреждения",
  },
];

const News = (props) => {
  const {
    data: { title, viewAllNewsButtonText },
  } = props;

  return (
    <div className={s.news}>
      <Container className={s.titleContainer}>
        <Title className>{title}</Title>
      </Container>
      <div className={s.newBackground}>
        <Container className={s.container}>
          {news.map((post) => (
            <div className={s.wrapper} key={`news${post.id}`}>
              <NewsItem post={post} />
            </div>
          ))}
        </Container>
      </div>
      <div className={s.actions}>
        <Container className={s.manage}>
          <div className={s.tumblers}>
            <ButtonArrow direction="back" color="red" />
            <ButtonArrow direction="forward" color="red" />
          </div>
          <Button className={s.offset} href={routes.news} hasLink>
            {viewAllNewsButtonText}
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default News;
