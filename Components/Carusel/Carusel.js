import React, { useEffect, useState } from "react";
import cn from "classnames";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import ModalWindow from "UI/Modal/ModalWindow";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";

import s from "./carusel.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";
import apiService from "services/apiService";
import moment from "moment";
import { Skeleton } from "@mui/material";

const Carusel = (props) => {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [isOpen, setOpen] = useState(false);

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

  const [startCoordsX, setStartCoordsX] = useState(null);

  const onSwipeSart = (e) => {
    setStartCoordsX(e.changedTouches[0].clientX);
  };

  const onSwipeEnd = (e) => {
    if (startCoordsX - e.changedTouches[0].clientX > 0) {
      if (slideNumber < slides.length - 1) {
        setSlideNumber((prev) => prev + 1);
      }
    } else {
      if (slideNumber > 0) {
        setSlideNumber((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    apiService
      .getAffiches(0, 5)
      .then((res) => setSlides(res.data))
      .finally(() => setLoading(false));
  }, [loading]);

  return (
    <div>
      <Wrapper>
        <div className={s.content}>
          {loading ? (
            <Skeleton sx={{ width: "100%", height: "500px" }} />
          ) : (
            slides.map(slide => (
              <React.Fragment key={`slide_${slide.id}`}>
                <div
                  className={s.slide}
                  onTouchStart={() => onSwipeSart(event)}
                  onTouchEnd={() => onSwipeEnd(event)}
                  style={{
                    transform: `translateX(-${slideNumber * 100}%)`,
                  }}
                >
                  <div className={s.slideContent}>
                    <div className={s.wrapper}>
                      <div className={s.concertActions}>
                        <span className={s.slideTitle}>{slide.title}</span>
                      </div>
                      <div className={s.concertDate}>
                        <span>
                          {moment(`${slide.date} 12:00:00`).format(
                            "D MMMM в hh:mm"
                          )}
                        </span>
                      </div>
                    </div>
                    <div className={s.container}>
                      <Button
                        className={s.slideButton}
                        onClick={() => setOpen(true)}
                      >
                        {getTicketButtonText}
                      </Button>
                    </div>
                  </div>
                  <img src={slide.thumbnail} className={s.poster} />
                </div>
                <ModalWindow
                  isOpen={isOpen}
                  onClose={() => setOpen(false)}
                  title={getTicketButtonText}
                >
                  <BuyTicketsWindow data={slide} />
                </ModalWindow>
              </React.Fragment>
            ))
          )}
        </div>
      </Wrapper>

      <Wrapper borderTop>
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
                <span
                  className={s.breadcrumb}
                  key={slide.id}
                  onClick={() => setSlideNumber(index)}
                />
              )
            )}
          </div>
          <ButtonArrow onClick={nextSlide} direction="forward" color="red" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Carusel;
