import Button from "UI/Button/Button";
import s from "./buyTicketsWindow.module.scss";

const BuyTicketsWindow = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.datetime}>
                <div className={s.date}>
                    <span>18</span>
                    <span>Апреля</span>
                </div>
                <div className={s.time}>
                    <span>чт</span>
                    <span>18:00</span>
                </div>
            </div>
            <div className={s.header}>
                <span className={s.subtitle}>Лекция по истории Санкт-Петербурга </span>
                <span className={s.title}>"Прекрасная Франция и Туманный Альбион" </span>
            </div>
            <div className={s.details}>
                <div className={s.limits}>
                    <span className={s.price}>Бесплатно</span>
                    <span className={s.age}>12+</span>
                </div>
                <div className={s.place}>
                    <span>Место проведения:</span>
                    <span>Московский пр.152</span>
                </div>
                <img className={s.thumbnail} src="/assets/images/buyTicketPosterExample.jpg" />
            </div>
            <div className={s.description}>
                <p className={s.content}>В рамках проекта ведущая Оксана Анатольевна Гут - руководитель Образцового 
                коллектива детского ансамбля народной песни "Млада" КДЦ «Московский» - знакомит зрителей с песнями, 
                составляющими основу репертуара коллектива, рассказывает о жанрах, истории и областях России, в которых 
                эти песни были В рамках проекта ведущая Оксана Анатольевна Гут - руководитель Образцового коллектива 
                детского ансамбля народной песни "Млада" КДЦ «Московский» - знакомит зрителей с песнями.</p>
                <div className={s.footer}>
                    <Button className={s.button}>Приобрести билет</Button>
                </div>
            </div>
        </div>
    )
}

export default BuyTicketsWindow;