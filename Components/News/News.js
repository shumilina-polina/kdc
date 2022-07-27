import { routes } from "shared/enums/pages";
import Title from "UI/Title/Title";
import Button from "UI/Button/Button";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import NewsItem from "Components/NewsItem/NewsItem";

import s from "./news.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";

const News = (props) => {
  const {
    data: { title, viewAllNewsButtonText },
  } = props;

  const POSTS_ON_PAGE = 4;

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    apiService
      .getNews(offset, POSTS_ON_PAGE)
      .then((res) => {
        setNews(res.data);
        setTotal(res.total);
      })
      .finally(() => setLoading(false));
  }, [loading]);

  const onLoadNext = () => {
    if (offset + POSTS_ON_PAGE < total) {
      setOffset(offset + POSTS_ON_PAGE);
      setLoading(true);
    }
  };

  const onLoadPrev = () => {
    if (offset >= POSTS_ON_PAGE) {
      setOffset(offset - POSTS_ON_PAGE);
      setLoading(true);
    }
  };

  return (
    <div className={s.news}>
      <Wrapper borderBottom>
        <Title className>{title}</Title>
      </Wrapper>

      <Wrapper borderBottom className={s.newBackground}>
        <div className={s.flexGap}>
          {loading
            ? [...Array(POSTS_ON_PAGE)].map((el, index) => (
                <Skeleton
                  key={`newsCardSkeleton_${index}`}
                  className={s.skeleton}
                />
              ))
            : news.map((post) => (
                <NewsItem post={post} key={`newsCard_${post.id}`} />
              ))}
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.flexSpaceBetween}>
          <div className={s.tumblers}>
            <ButtonArrow
              direction="back"
              color="red"
              onClick={onLoadPrev}
              disable={loading}
            />
            <ButtonArrow
              direction="forward"
              color="red"
              onClick={onLoadNext}
              disable={loading}
            />
          </div>
          <Button className={s.offset} href={routes.news} hasLink>
            {viewAllNewsButtonText}
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
