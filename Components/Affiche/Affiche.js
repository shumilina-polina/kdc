import { routes } from "shared/enums/pages";
import AffichePerfomance from "Components/AffichePerfomance/AffichePerfomance";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";
import Title from "UI/Title/Title";

import s from "./affiche.module.scss";

const affiche = [
  {
    id: 1,
    date: "Сегодня",
    time: "18:00",
    title: "Спектакль “Мойдодыр”",
    content: "Мини-опера на стихи Корнея Чуковского — это настоящий...",
  },
  {
    id: 2,
    date: "Сегодня",
    time: "18:00",
    title: "Спектакль “Мойдодыр”",
    content: "Мини-опера на стихи Корнея Чуковского — это настоящий...",
  },
  {
    id: 3,
    date: "Сегодня",
    time: "18:00",
    title: "Спектакль “Мойдодыр”",
    content: "Мини-опера на стихи Корнея Чуковского — это настоящий...",
  },
];

const Affiche = (props) => {
  const {
    data: { title, viewAllButtonText },
  } = props;

  return (
    <div className={s.affiche}>
      <div className={s.mobileCarusel}>
        <div className={s.titleMobile}>
          <Title>{title}</Title>
        </div>
        <div className={s.wrapper}>
          <div className={s.info}>
            <span className={s.day}>24</span>
            <span className={s.divider} />
            <span className={s.day}>26</span>
            <span className={s.month}>февраля</span>
          </div>
          <div className={s.actions}>
            <ButtonArrow color="red" direction="back" />
            <ButtonArrow color="red" direction="forward" />
          </div>
        </div>
      </div>

      <div className={s.carusel}>
        <div className={s.header}>
          <ButtonArrow color="red" direction="back" />
          <ButtonArrow color="red" direction="forward" />
        </div>
        <div className={s.content}>
          <span className={s.title}>{title}</span>
          <div className={s.period}>
            <div className={s.from}>
              <span className={s.day}>24</span>
              <span className={s.month}>Февраля</span>
            </div>
            <span className={s.divider} />
            <div className={s.to}>
              <span className={s.day}>26</span>
              <span className={s.month}>Февраля</span>
            </div>
          </div>
        </div>
        <div className={s.footer}>
          <Button className={s.button} hasLink href={routes.affiche}>
            {viewAllButtonText}
          </Button>
        </div>
      </div>
      <div className={s.perfomances}>
        {affiche.map((post) => (
          <AffichePerfomance post={post} key={`affiche${post.id}`} />
        ))}
      </div>
      <Button className={s.mobileButton} hasLink href={routes.affiche}>
        {viewAllButtonText}
      </Button>
    </div>
  );
};

export default Affiche;
