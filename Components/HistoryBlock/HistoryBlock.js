import cn from "classnames";
import { useSelector } from "react-redux";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "./historyBlock.module.scss";

const HistoryBlock = () => {
  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <Wrapper borderBottom>
          <div className={cn(s.title, s.padding)}>
            <span>СПБ ГБУ "КДЦ "МОСКОВСКИЙ" - Здесь царит творчество!</span>
          </div>
        </Wrapper>

        <Wrapper borderBottom>
          <div className={s.bio}>
            <div>
              <p className={cn(s.padding, v ? s.ability : null)}>
                Дом культуры имени Ильича был построен по проекту архитектора
                Н.Ф.Демкова и открыт{" "}
                <span className={s.bold}>2 мая 1931 года.</span>
              </p>
              <p className={cn(s.padding, v ? s.ability : null)}>
                Его помнят несколько поколений жителей Московского района. Сюда
                приходили работники объединения «Электросилы», профкому которого
                принадлежал Дом культуры, а также жители всего Московского
                района.{" "}
              </p>
            </div>
            <div className={s.poster}>
              <img src="/assets/images/demkovDecor.svg" />
              <span className={s.demkovName}>Н.Ф. Демков</span>
              <img src="/assets/images/demkov.jpg" />
            </div>
          </div>
        </Wrapper>
      </div>

      <Wrapper borderBottom>
        <p className={cn(s.padding, v ? s.ability : null)}>
          Проводились концерты, театральные постановки, демонстрировались
          художественные кинофильмы, шли занятия в детских <br /> и взрослых
          самодеятельных коллективах, которые много раз становились лауреатами
          Всесоюзных, Всероссийских и городских фестивалей и конкурсов.
        </p>
      </Wrapper>

      <Wrapper space borderBottom />

      <Wrapper borderBottom>
        <div className={s.house}>
          <div className={s.descroption}>
            <p className={cn(s.padding, s.oswald, v ? s.ability : null)}>
              История Дома культуры имени Ильича неразрывно связана с историей
              Московского района.
            </p>
            <p className={cn(s.padding, v ? s.ability : null)}>
              Именно у нас были проведены первые ночные шоу, <br /> на которые
              перенимать опыт приезжали специалисты <br /> со всего города. Несколько
              лет подряд в наших помещениях располагался театральный институт
              «Школа русской драмы», возглавляемый Народным артистом СССР
              профессором И.О.Горбачевым.
            </p>
          </div>
          <div>
            <img
              src="/assets/images/projectkdc.jpg"
              className={s.thumbnail}
              width={605}
              height={304}
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper borderBottom>
        <div className={s.famous}>
          <span className={cn(s.padding, s.oswald, v ? s.ability : null)}>
            <div>Здесь бывали</div>
            <div className={s.famousDecor}>
              <div className={s.quadrat} />
              <div className={s.round} />
            </div>
          </span>
          <span className={cn(s.padding, v ? s.ability : null)}>
            Знаменитый композитор И.О.Дунаевский, великий шахматист Анатолий
            Карпов, популярный артист Евгений Евстигнеев. Кинорежиссер Лузгин
            снимал эпизоды к фильму «Облако в штанах» в фойе Большого зала.
            Помнит наша сцена великие имена: Ольги Берггольц, Любови Орловой,
            Леонида Утёсова… В 1997 году Дом культуры имени Ильича был
            преобразован в Государственное учреждение "Культурно-досуговый центр
            "Московский".
          </span>
        </div>
      </Wrapper>

      <Wrapper>
        <div className={s.famousPosters}>
          <img className={s.famousPoster} src="/assets/images/famous1.jpg" />
          <img className={s.famousPoster} src="/assets/images/famous2.jpg" />
          <img className={s.famousPoster} src="/assets/images/famous3.jpg" />
          <img className={s.famousPoster} src="/assets/images/famous4.jpg" />
        </div>
      </Wrapper>
    </div>
  );
};

export default HistoryBlock;
