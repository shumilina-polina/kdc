import cn from "classnames";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

import Container from "UI/Container/Container";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import s from "styles/pages/SingleCollective.module.scss";

const SingleColectivePage = () => {
  return (
    <>
      <Header />

      <div className={s.borderBottom}>
        <div className={s.wrapper}>
          <Container className={cn(s.borderLeftRight, s.space)} />
        </div>
      </div>

      <div className={s.main}>
        <Container>
          <div className={s.header}>
            <ButtonArrow direction="back" color="red" />
            <span>Все коллективы</span>
          </div>
          <div className={s.content}>
            <div className={s.gallery}>
              <img
                className={s.thumbnail}
                src="/assets/images/singlecollective1.jpg"
              />
              <img
                className={s.thumbnail}
                src="/assets/images/singlecollective2.jpg"
              />
              <img
                className={s.thumbnail}
                src="/assets/images/singlecollective3.jpg"
              />
              <img
                className={s.thumbnail}
                src="/assets/images/singlecollective4.jpg"
              />
              <img
                className={s.thumbnail}
                src="/assets/images/singlecollective2.jpg"
              />
            </div>
            <div className={s.info}>
              <div className={cn(s.title, s.borderBottom)}>
                <h2>Ясные ночи</h2>
              </div>
              <div className={s.table}>
                <div className={s.column}>
                  <span className={s.secondary}>Направление:</span>
                  <span className={s.bold}>Вокальные</span>
                </div>
                <div className={s.column}>
                  <span className={s.secondary}>Стоимость:</span>
                  <span className={s.bold}>Бесплатно</span>
                </div>
                <div className={s.column}>
                  <span className={s.secondary}>Групповые занятия:</span>
                  <span className={s.bold}>11.00- 14.00 (вт, ср, пт)</span>
                </div>
                <div>
                  <span className={s.secondary}>Контакты:</span>
                  <span className={s.bold}>241-54-81</span>
                </div>
                <div>
                  <span className={s.secondary}>Категория:</span>
                  <span className={s.bold}>16 – 35 лет</span>
                </div>
                <div className={s.button}>
                  <Button>Записаться</Button>
                </div>
                <div>
                  <span className={s.secondary}>Адрес:</span>
                  <span className={s.bold}>Московский пр. 152 </span>
                </div>
                <div className={s.location}>
                  <span>25 кл., Малый зал, Большой зал, Арт-пространство</span>
                  <span className={s.icon}>
                    <img src="/assets/icons/location.svg" />
                  </span>
                </div>
              </div>
              <div className={cn(s.description, s.borderBottom)}>
                <div
                  className={cn(s.descTitle, s.borderBottom, s.borderLeftRight)}
                >
                  <span className={s.bold}>Описание</span>
                  <span className={s.secondary}>
                    Народный коллектив театр песни
                  </span>
                </div>
                <div className={s.text}>
                  <p className={s.padding}>
                    Ясные ночи — это яркий сплочённый коллектив молодых
                    современных людей, создающих незабываемое, доброе и умное
                    шоу. Авторские песни и оригинальные каверы, складываются в
                    единую сюжетную линию. Сохраняя общую тенденцию ансамбля,
                    коллектив постоянно расширяет свой репертуар, ищет новые
                    сценические формы, объединяя в своих выступлениях вокальное,
                    хореографическое и театральное искусство. Театр песни «Ясные
                    ночи» постоянный участник различных городских мероприятий.
                  </p>
                </div>
              </div>
              <div className={s.timetable}>
                <div
                  className={cn(s.descTitle, s.borderBottom, s.borderLeftRight)}
                >
                  <span className={s.bold}>Программа</span>
                </div>
                <div>
                  <ul className={s.list}>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Выявление внутреннего слуха
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Расширение диапозона певческих голосов{" "}
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Основы актерского мастерства
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Сценическое движение{" "}
                    </li>
                    <li className={s.item}>
                      <img src="/assets/icons/listmarker.svg" />
                      Индивидуальный подход к каждому участнику
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default SingleColectivePage;
