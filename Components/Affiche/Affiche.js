import moment from "moment";
import "moment/locale/ru";
import { routes } from "shared/enums/pages";
import AffichePerfomance from "Components/AffichePerfomance/AffichePerfomance";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";
import Title from "UI/Title/Title";

import s from "./affiche.module.scss";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";
import Wrapper from "UI/Wrapper/Wrapper";
import { months } from "shared/constants/Month";

const Affiche = (props) => {
  const {
    data: { title, viewAllButtonText },
  } = props;

  const AFFICHES_ON_PAGE = 3;

  const [affiche, setAffiche] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);

  const monthsRU = months.split(",");
  moment.locale("ru");

  useEffect(() => {
    if (loading) {
      apiService
        .getAffiches(offset, AFFICHES_ON_PAGE)
        .then((res) => {
          setTotal(res.total);
          setAffiche(res.data);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  const onLoadNext = () => {
    if (offset + AFFICHES_ON_PAGE < total) {
      setOffset(offset + AFFICHES_ON_PAGE);
      setLoading(true);
    }
  };

  const onLoadPrev = () => {
    if (offset >= AFFICHES_ON_PAGE) {
      setOffset(offset - AFFICHES_ON_PAGE);
      setLoading(true);
    }
  };

  return (
    <div>
      <Wrapper space borderBottom />
      <Wrapper borderBottom>
        <div className={s.afficheContainer}>
          <div className={s.mobileCarusel}>
            <Title>{title}</Title>
            <div className={s.flex}>
              <div className={s.info}>
                <span className={s.day}>
                  {loading ? "--" : moment(affiche[0].datetime).format("D")}
                </span>
                <span className={s.divider} />
                <span className={s.day}>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    moment(affiche[affiche.length - 1].datetime).format("D")
                  )}
                </span>
                <span className={s.month}>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    monthsRU[
                      moment(affiche[affiche.length - 1].datetime).format("M") -
                        1
                    ]
                  )}
                </span>
              </div>
              <div className={s.flex}>
                <ButtonArrow
                  color="red"
                  direction="back"
                  onClick={onLoadPrev}
                />
                <ButtonArrow
                  color="red"
                  direction="forward"
                  onClick={onLoadNext}
                />
              </div>
            </div>
          </div>

          <div className={s.carusel}>
            <div className={s.flex}>
              <ButtonArrow color="red" direction="back" onClick={onLoadPrev} />
              <ButtonArrow
                color="red"
                direction="forward"
                onClick={onLoadNext}
              />
            </div>
            <div className={s.content}>
              <span className={s.title}>{title}</span>
              <div className={s.period}>
                <div className={s.from}>
                  <span className={s.day}>
                    {loading ? (
                      <Skeleton className={s.daySkeleton} />
                    ) : (
                      moment(affiche[0].datetime).format("DD")
                    )}
                  </span>
                  <span className={s.month}>
                    {loading ? (
                      <Skeleton className={s.monthSkeleton} />
                    ) : (
                      monthsRU[moment(affiche[0].datetime).format("M") - 1]
                    )}
                  </span>
                </div>
                <span className={s.divider} />
                <div className={s.to}>
                  <span className={s.day}>
                    {loading ? (
                      <Skeleton className={s.daySkeleton} />
                    ) : (
                      moment(affiche[affiche.length - 1].datetime).format("DD")
                    )}
                  </span>
                  <span className={s.month}>
                    {loading ? (
                      <Skeleton className={s.monthSkeleton} />
                    ) : (
                      monthsRU[
                        moment(affiche[affiche.length - 1].datetime).format(
                          "M"
                        ) - 1
                      ]
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className={s.footer}>
              <Button className={s.button} hasLink href={routes.affiche}>
                {viewAllButtonText}
              </Button>
            </div>
          </div>
          <div className={s.perfomances}>
            {loading ? (
              <>
                {[...Array(AFFICHES_ON_PAGE)].map((el, index) => (
                  <Skeleton
                    key={`afficheSkeleton_${index}`}
                    className={s.skeleton}
                  />
                ))}
              </>
            ) : (
              affiche &&
              affiche.map((post) => (
                <AffichePerfomance post={post} key={`affiche${post.id}`} />
              ))
            )}
          </div>
          <Button className={s.mobileButton} hasLink href={routes.affiche}>
            {viewAllButtonText}
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Affiche;
