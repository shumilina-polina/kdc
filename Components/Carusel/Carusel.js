import { useState } from "react";
import cn from "classnames";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import s from "./carusel.module.scss";

const slides = [
  {
    id: 1,
    title: "Спектакль “Мойдодыр”",
    image: "https://musicaltheatre.by/d/komediya-glavnaya.jpg",
    date: "Cегодня в 12:00",
  },
  {
    id: 2,
    title: "Спектакль “Мойдодыр”",
    image: "https://amurteatr.ru/uploads/articles/tartyuf-ili-obmanshhik.jpg",
    date: "Cегодня в 12:00",
  },
  {
    id: 3,
    title: "Спектакль “Мойдодыр”",
    image:
      "https://net-volgograd.ru/wp-content/uploads/2021/12/kzilejpfnuk.jpg",
    date: "Cегодня в 12:00",
  },
];

const Carusel = (props) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const {
    data: { getTicketButtonText },
  } = props;

  const prevSlide = () => {
    if (slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (slideNumber < slides.length - 1) {
      setSlideNumber((prev) => prev + 1);
    }
  };

  const handleClick = (e) => {};

  return (
    <div className={s.carusel}>
      <div className={s.content}>
        {slides.map((slide) => (
          <div
            className={s.slide}
            style={{
              transform: `translateX(-${slideNumber * 100}%)`,
            }}
            key={`slide_${slide.id}`}
          >
            <div className={s.slideContent}>
              <div className={s.wrapper}>
                <div className={s.concertActions}>
                  <span className={s.slideTitle}>{slide.title}</span>
                </div>
                <div className={s.concertDate}>
                  <span>{slide.date}</span>
                </div>
              </div>
              <div className={s.container}>
                <Button
                  className={s.slideButton}
                  onClick={(e) => handleClick(e)}
                >
                  {getTicketButtonText}
                </Button>
              </div>
            </div>
            <img src={slide.image} className={s.poster} />
          </div>
        ))}
      </div>
      <div className={s.actions}>
        <ButtonArrow onClick={prevSlide} direction="back" color="red" />
        <div className={s.breadcrumbs}>
          {slides.map((slide, index) =>
            index === slideNumber ? (
              <span
                className={cn(s.breadcrumb, s.active)}
                key={slide.id}
              ></span>
            ) : (
              <span className={s.breadcrumb} key={slide.id}></span>
            )
          )}
        </div>
        <ButtonArrow onClick={nextSlide} direction="forward" color="red" />
      </div>
    </div>
  );
};

export default Carusel;
