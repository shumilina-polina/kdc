import { Skeleton } from "@mui/material";
import cn from "classnames";
import AfficheCard from "Components/AfficheCard/AfficheCard";
import moment from "moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { AFFICHES_PER_PAGE } from "services/config";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "./afficheComponent.module.scss";

const AfficheComponent = () => {
  moment.locale("ru");
  const POSTS_PER_PAGE = AFFICHES_PER_PAGE;

  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [affiches, setAffiches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);

  const onLoadPrev = () => {
    if (offset - POSTS_PER_PAGE >= 0) {
      setOffset(offset - POSTS_PER_PAGE);
      setLoading(true);
    }
  };

  const onLoadNext = () => {
    console.log(total);
    console.log(offset);
    if (offset + POSTS_PER_PAGE < total) {
      setOffset(offset + POSTS_PER_PAGE);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading) {
      const requestDate =
        moment(`${date} 00:00:00`).format("MM") === moment().format("MM")
          ? moment(`${date} 00:00:00`).format("YYYY-MM-DD")
          : moment(`${date} 00:00:00`).format("YYYY-MM-01");
      apiService
        .getAffichesByMonth(requestDate, offset)
        .then((res) => {
          setAffiches([...res.data]);
          setTotal(res.total);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <>
      <Wrapper borderBottom>
        <div className={s.header}>
          <span className={s.oswald}>{moment().format("YYYY")}</span>
          <span className={s.oswald}>Афиша</span>
          <span className={s.oswald}>
            {moment().add(1, "Y").format("YYYY")}
          </span>
        </div>
      </Wrapper>

      <Wrapper className={s.monthContainer} borderBottom>
        <div className={s.monthClicker}>
          {[...Array(12)].map((m, index) => (
            <span
              key={`monthSlider_${index}`}
              className={cn(
                s.month,
                moment().add(index, "M").format("MM") ==
                  moment(`${date} 00:00:00`).format("MM")
                  ? s.active
                  : null
              )}
              onClick={() => {
                setDate(moment().add(index, "M").format("YYYY-MM-DD"));
                setLoading(true);
                setOffset(0);
              }}
            >
              {moment().add(index, "M").format("MMMM")}
            </span>
          ))}
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.cards}>
          {loading ? (
            <>
              {[...Array(5)].map((el, index) => (
                <Skeleton
                  key={`afficheSkeleton_${index}`}
                  className={s.skeletonAffiche}
                />
              ))}
            </>
          ) : affiches.length === 0 ? (
            <span className={s.noAfficheTitle}>
              В данном периоде ничего не найдено.
            </span>
          ) : (
            affiches.map((affiche) => (
              <AfficheCard key={`affiche_${affiche.id}`} affiche={affiche} />
            ))
          )}
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.swiper}>
          <div className={s.swiperTitle}>
            <ButtonArrow direction="back" color="red" onClick={onLoadPrev} />
            <span>
              {loading ? (
                <Skeleton sx={{ width: "20px", height: "40px" }} />
              ) : (
                `${moment(`${date} 00:00:00`).add(-1, "M").format("MMMM")}`
              )}
            </span>
          </div>
          <div className={s.swiperTitle}>
            <span>
              {loading ? (
                <Skeleton sx={{ width: "20px", height: "40px" }} />
              ) : (
                `${moment(`${date} 00:00:00`).add(1, "M").format("MMMM")}`
              )}
            </span>
            <ButtonArrow direction="forward" color="red" onClick={onLoadNext} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AfficheComponent;
