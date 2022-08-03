import moment from "moment";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import Button from "UI/Button/Button";

import { months } from "shared/constants/Month";

import s from "./buyTicketsWindow.module.scss";
import Link from "next/link";
import React, { useEffect, useState, Fragment, useRef } from "react";
import Script from "next/script";

const BuyTicketsWindow = (props) => {
  const {
    adress,
    content,
    date,
    time,
    limits,
    price,
    thumbnail,
    title,
    subtitle = "",
    code,
  } = props.data;

  const [isBuy, setBuy] = useState(false);

  const dataDate = moment(`${date} ${time}`);
  const monthsRU = months.split(",");

  console.log(code);

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
          <div className={s.datetime}>
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
            <span className={s.subtitle}>{`${useHtmlDecode(subtitle)} `}</span>
            <span className={s.title}>{`${useHtmlDecode(title)} `}</span>
          </div>
          <div className={s.details}>
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
            <img className={s.thumbnail} src={thumbnail} />
          </div>
          <div className={s.description}>
            <p className={s.content}>{useHtmlDecode(content)}</p>
            <div className={s.footer}>
              <a onClick={() => setBuy(true)} className={s.button}>
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
