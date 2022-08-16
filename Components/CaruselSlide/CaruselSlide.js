import Button from "UI/Button/Button";

import ModalWindow from "UI/Modal/ModalWindow";
import BuyTicketsWindow from "Components/BuyTicketsWindow/BuyTicketsWindow";

import moment from "moment";
import s from "./caruselSlide.module.scss";
import { useState } from "react";

const CaruselSlide = (props) => {
  const { setSlideNumber, setStopAutoPlay, slideNumber, slides, slide } = props;

  const [isOpen, setOpen] = useState(false);
  const [startCoordsX, setStartCoordsX] = useState(0);

  const onSwipeSart = (e) => {
    setStartCoordsX(e.changedTouches[0].clientX);
  };

  const onSwipeEnd = (e) => {
    setStopAutoPlay(true);
    if (startCoordsX - e.changedTouches[0].clientX > 100) {
      if (slideNumber < slides.length - 1) {
        setSlideNumber((prev) => prev + 1);
      }
    } else {
      if (slideNumber > 0) {
        console.log(2);
        setSlideNumber((prev) => prev - 1);
      }
    }
  };

  return (
    <>
      <div
        className={s.slide}
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
                {moment(`${slide.datetime}`).format("D MMMM в hh:mm")}
              </span>
            </div>
          </div>
          <div className={s.container}>
            <Button className={s.slideButton} onClick={() => setOpen(true)}>
              Приобрести билет
            </Button>
          </div>
        </div>
        <img
          src={slide.thumbnail}
          className={s.poster}
          onTouchStart={() => onSwipeSart(event)}
          onTouchEnd={() => onSwipeEnd(event)}
        />
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Приобрести билет"
      >
        <BuyTicketsWindow data={slide} />
      </ModalWindow>
    </>
  );
};

export default CaruselSlide;
