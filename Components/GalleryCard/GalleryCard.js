import { routes } from "shared/enums/pages";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import moment from "moment";
import "moment/locale/ru";
import s from "./galleryCard.module.scss";

const GalleryCard = (props) => {
  const {
    gallery: { id, title, thumbnail, date },
  } = props;

  return (
    <div className={s.card}>
      <div className={s.shadow} />
      <img src={thumbnail} className={s.thumbnail} />
      <div className={s.content}>
        <div>
          <span className={s.title}>{useHtmlDecode(title)}</span>
          <ButtonArrow
            hasLink
            href={`${routes.gallery}/${id}`}
            direction="forward"
            color="red"
          />
        </div>
        <span className={s.date}>
          {moment(`${date} 12:00:00`).format("MMMM YYYY г.")}
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;
