import moment from "moment";
import "moment/locale/ru";
import { routes } from "shared/enums/pages";
import AffichePerfomance from "Components/AffichePerfomance/AffichePerfomance";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Container from "UI/Container/Container";
import Button from "UI/Button/Button";
import Title from "UI/Title/Title";

import s from "./affiche.module.scss";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";
import Wrapper from "UI/Wrapper/Wrapper";

const Affiche = (props) => {
  const {
    data: { title, viewAllButtonText },
  } = props;

  const [affiche, setAffiche] = useState([]);
  const [loading, setLoading] = useState(true);

  moment.locale("ru");

  useEffect(() => {
    apiService
      .getAffiches()
      .then((res) => setAffiche(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Wrapper space borderBottom />
      <Wrapper borderBottom>
        <div className={s.afficheContainer}>
          <div className={s.mobileCarusel}>
            <Title>{title}</Title>
            <div className={s.flex}>
              <div className={s.info}>
                <span className={s.day}>{moment().format("DD")}</span>
                <span className={s.divider} />
                <span className={s.day}>
                  {moment().add(3, "d").format("DD")}
                </span>
                <span className={s.month}>
                  {moment().add(3, "d").format("MMMM")}
                </span>
              </div>
              <div className={s.flex}>
                <ButtonArrow color="red" direction="back" />
                <ButtonArrow color="red" direction="forward" />
              </div>
            </div>
          </div>

          <div className={s.carusel}>
            <div className={s.flex}>
              <ButtonArrow color="red" direction="back" />
              <ButtonArrow color="red" direction="forward" />
            </div>
            <div className={s.content}>
              <span className={s.title}>{title}</span>
              <div className={s.period}>
                <div className={s.from}>
                  <span className={s.day}>{moment().format("DD")}</span>
                  <span className={s.month}>{moment().format("MMMM")}</span>
                </div>
                <span className={s.divider} />
                <div className={s.to}>
                  <span className={s.day}>
                    {moment().add(3, "d").format("DD")}
                  </span>
                  <span className={s.month}>
                    {moment().add(3, "d").format("MMMM")}
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
                <Skeleton className={s.skeleton} />
                <Skeleton className={s.skeleton} />
                <Skeleton className={s.skeleton} />
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
