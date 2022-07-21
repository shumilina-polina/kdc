import { Skeleton } from "@mui/material";
import cn from "classnames";
import AfficheCard from "Components/AfficheCard/AfficheCard";
import moment from "moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Container from "UI/Container/Container";

import s from "./afficheComponent.module.scss";

const AfficheComponent = () => {
  moment.locale("ru");

  const [month, setMonth] = useState(moment().format("MMMM"));
  const [affiches, setAffiches] = useState([]);
  const [loading, setLoading] = useState(true)

  const prevMonth = () => {
    setLoading(true)
    switch (month) {
        case "август":
            setMonth("июль")
            break
        case "сентябрь":
            setMonth("август")
            break
        case "октябрь":
            setMonth("сентябрь")
            break
        case "ноябрь":
            setMonth("октябрь")
            break
        case "декабрь":
            setMonth("ноябрь")
            break
        case "январь":
            setMonth("декабрь")
            break
        case "февраль":
            setMonth("январь")
            break
        case "март":
            setMonth("февраль")
            break
        case "апрель":
            setMonth("март")
            break
        case "май":
            setMonth("апрель")
            break
        case "июнь":
            setMonth("май")
            break
        case "июль":
            setMonth("июнь")
            break
    }
  }

  const nextMonth = () => {
    setLoading(true)
    switch (month) {
        case "июль":
            setMonth("август")
            break
        case "август":
            setMonth("сентябрь")
            break
        case "сентябрь":
            setMonth("октябрь")
            break
        case "октябрь":
            setMonth("ноябрь")
            break
        case "ноябрь":
            setMonth("декабрь")
            break
        case "декабрь":
            setMonth("январь")
            break
        case "январь":
            setMonth("февраль")
            break
        case "февраль":
            setMonth("март")
            break
        case "март":
            setMonth("апрель")
            break
        case "апрель":
            setMonth("май")
            break
        case "май":
            setMonth("июнь")
            break
        case "июнь":
            setMonth("июль")
            break
    }
  }

  useEffect(() => {
    switch (month) {
        case "июль":
            month = "july"
            break
        case "август":
            month = "august"
            break
        case "сентябрь":
            month = "september"
            break
        case "октябрь":
            month = "october"
            break
        case "ноябрь":
            month = "november"
            break
        case "декабрь":
            month = "december"
            break
        case "январь":
            month = "january"
            break
        case "февраль":
            month = "february"
            break
        case "март":
            month = "march"
            break
        case "апрель":
            month = "april"
            break
        case "май":
            month = "may"
            break
        case "июнь":
            month = "june"
            break
    }
    apiService.getAffichesByMonth(month).then(res => setAffiches(res)).finally(() => setLoading(false))
  }, [month])

  return (
    <>
      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={cn(s.header, s.padding)}>
              <span className={s.oswald}>{moment().format('YYYY')}</span>
              <span className={s.oswald}>Афиша</span>
              <span className={s.oswald}>{moment().add(1, "Y").format('YYYY')}</span>
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container
            className={cn(s.container, s.borderLeftRight, s.monthContainer)}
          >
            <div className={s.monthClicker}>
              {[...Array(12)].map((m, index) => (
                <span
                  key={`monthSlider_${index}`}
                  className={cn(
                    s.month,
                    month === moment().add(index, "M").format("MMMM")
                      ? s.active
                      : null
                  )}
                  onClick={() => {
                    setMonth(moment().add(index, "M").format("MMMM"))
                    setLoading(true)
                  }
                  }
                >
                  {moment().add(index, "M").format("MMMM")}
                </span>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={cn(s.cards)}>
                {loading ? (
                    <>
                    <Skeleton className={s.skeletonAffiche} />
                    <Skeleton className={s.skeletonAffiche} />
                    <Skeleton className={s.skeletonAffiche} />
                    <Skeleton className={s.skeletonAffiche} />
                    <Skeleton className={s.skeletonAffiche} />
                    </>
                ) : (
                    affiches.map(affiche => <AfficheCard key={`affiche_${affiche.id}`} affiche={affiche} />)
                )}
            </div>
          </Container>
        </div>
      </div>

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.container, s.borderLeftRight)}>
            <div className={s.swiper}>
              <div className={s.swiperTitle}>
                <ButtonArrow direction="back" color="red" onClick={prevMonth} />
                <span>{loading ? <Skeleton sx={{width: '20px', height: '40px'}} /> : `1-3 ${month}`}</span>
              </div>
              <div className={s.swiperTitle}>
                <span>{loading ? <Skeleton sx={{width: '20px', height: '40px'}} /> : `25-28 ${month}`}</span>
                <ButtonArrow direction="forward" color="red" onClick={nextMonth}/>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AfficheComponent;
