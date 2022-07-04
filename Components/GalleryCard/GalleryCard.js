import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import s from "./galleryCard.module.scss";

const GalleryCard = () => {
  return (
    <div className={s.card}>
      <div className={s.shadow} />
      <img src="/assets/images/galleryposter.jpg" className={s.thumbnail} />
      <div className={s.content}>
        <div>
          <span className={s.title}>ПРАЗДНИЧНЫЙ КОНЦЕРТ "ДРУЖИЩЕ ПИТЕР!"</span>
          <ButtonArrow hasLink href={"#"} direction="forward" color="red" />
        </div>
        <span className={s.date}>май 2021 г.</span>
      </div>
    </div>
  );
};

export default GalleryCard;
