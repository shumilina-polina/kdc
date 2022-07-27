import { Skeleton } from "@mui/material";
import NewsCard from "Components/NewsCard/NewsCard";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { NEWS_PER_PAGE } from "services/config";
import Button from "UI/Button/Button";
import s from "./newsList.module.scss";

const NewsList = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);

  const onLoadMore = () => {
    console.log(total);
    console.log(offset);
    if (offset + NEWS_PER_PAGE < total) {
      setLoading(true);
      setOffset(offset + NEWS_PER_PAGE);
    }
  };

  useEffect(() => {
    if (loading) {
      apiService
        .getNews(offset)
        .then((res) => {
          setNews([...news, ...res.data]);
          setTotal(res.total);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <>
      <div className={s.cards}>
        {loading
          ? [...Array(offset + 3)].map((el, index) => (
              <Skeleton
                className={s.skeleton}
                key={`newsCardSkeleton_${index}`}
              />
            ))
          : news.map((item) => (
              <NewsCard key={`newsCard_${item.id}`} item={item} />
            ))}
      </div>
      <div className={s.buttonWrapper}>
        <Button className={s.button} onClick={onLoadMore} disable={loading}>
          Показать еще
        </Button>
      </div>
    </>
  );
};

export default NewsList;
