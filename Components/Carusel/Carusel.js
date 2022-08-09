import React, { useEffect, useState } from "react";
import cn from "classnames";

import ButtonArrow from "UI/ButtonArrow/ButtonArrow";

import s from "./carusel.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";
import apiService from "services/apiService";
import { Skeleton } from "@mui/material";
import CaruselSlide from "Components/CaruselSlide/CaruselSlide";

const Carusel = (props) => {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);
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

  useEffect(() => {
    apiService
      .getAffiches(0, 5)
      .then((res) => setSlides(res.data))
      .finally(() => setLoading(false));
  }, [loading]);

  useEffect(() => {
    let slideIndex = slideNumber;
    const autoPlay = setInterval(() => {
      if (slideIndex < slides.length - 1) {
        setSlideNumber((prev) => prev + 1);
        slideIndex = slideIndex + 1;
      } else {
        setSlideNumber((prev) => 0);
        slideIndex = 0;
      }
    }, 5000);

    return () => {
      clearInterval(autoPlay)
    }
  }, [slides])

  return (
    <div>
      <Wrapper>
        <div className={s.content}>
          {loading ? (
            <Skeleton sx={{ width: "100%", height: "500px" }} />
          ) : (
            slides.map((slide) => (
              <CaruselSlide
                key={`slide_${slide.id}`}
                slideNumber={slideNumber}
                setSlideNumber={setSlideNumber}
                slides={slides}
                slide={slide}
              />
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
