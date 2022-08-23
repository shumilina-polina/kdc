import moment from "moment";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import Button from "UI/Button/Button";

import { months } from "shared/constants/Month";

import s from "./buyTicketsWindow.module.scss";
import Link from "next/link";
import React, { useEffect, useState, Fragment, useRef } from "react";
import Script from "next/script";
import cn from "classnames"
import { useSelector } from "react-redux";

const BuyTicketsWindow = (props) => {
  const {
    adress,
    content,
    datetime,
    limits,
    price,
    thumbnail,
    title,
    subtitle = "",
    code,
  } = props.data;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  const { defaultBuy = false } = props;

  const [isBuy, setBuy] = useState(defaultBuy);

  const dataDate = moment(datetime);
  const monthsRU = months.split(",");

  useEffect(() => {
    if (isBuy) {
      const script = document.createElement("script");
      const widget = document.getElementById("widget");

      script.innerHTML = `radario.Widgets.Event({"params":{},"standalone":true,"createButton":false,"eventId": ${code}})`;
      widget.appendChild(script);
    }
  }, [isBuy]);

  return (
    <Fragment>
      {isBuy ? (
        <div id="widget" className={s.widget}></div>
      ) : (
        <div className={s.wrapper}>
          <div className={cn(s.datetime, v ? s.ability : null)}>
            <div className={s.date}>
              <span>{dataDate.format("D")}</span>
              <span>{monthsRU[dataDate.format("M") - 1]}</span>
            </div>
            <div className={s.time}>
              <span>{dataDate.format("dd")}</span>
              <span>{dataDate.format("hh:mm")}</span>
            </div>
          </div>
          <div className={s.header}>
            <span className={cn(s.subtitle, v ? s.ability : null)}>{`${useHtmlDecode(subtitle)} `}</span>
            <span className={cn(s.title, v ? s.ability : null)}>{`${useHtmlDecode(title)} `}</span>
          </div>
          <div className={cn(s.details, v ? s.ability : null)}>
            <div className={s.limits}>
              <span className={s.price}>
                {price == 0 ? "Бесплатно" : `${price} руб.`}
              </span>
              <span className={s.age}>{`${limits}+`}</span>
            </div>
            <div className={s.place}>
              <span>Место проведения:</span>
              <span>{adress}</span>
            </div>
            <img className={s.thumbnail} src={thumbnail} style={v ? { display: "none" } : null} />
          </div>
          <div className={s.description}>
            <div className={s.contentBlock}>
              <p className={cn(s.content, v ? s.ability : null)}>{useHtmlDecode(content)}</p>
            </div>
            <div className={s.footer}>
              <a onClick={() => setBuy(true)} className={cn(s.button, v ? s.ability : null)}>
                Приобрести билет
              </a>
            </div>
          </div>
        </div>
      )}
      <Script src="https://radario.ru/frontend/src/api/openapi/openapi.js"></Script>
    </Fragment>
  );
};

export default BuyTicketsWindow;
