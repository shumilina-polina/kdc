import cn from "classnames";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import moment from "moment";
import "moment/locale/ru";
import s from "./galleryCard.module.scss";
import { useSelector } from "react-redux";

const GalleryCard = (props) => {
  const {
    gallery: { id, title, thumbnail, date },
  } = props;
  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  return (
    <div className={s.card}>
      <div className={s.shadow} />
      <img src={thumbnail} className={s.thumbnail} />
      <div className={s.content}>
        <div>
          <span className={cn(s.title, v ? s.ability : null)}>
            {useHtmlDecode(title)}
          </span>
          <ButtonArrow
            hasLink
            href={{
              pathname: "/about/gallery/[id]",
              query: { id: id },
            }}
            as={`/about/gallery/${id}`}
            direction="forward"
            color="red"
          />
        </div>
        <span className={cn(s.date, v ? s.ability : null)}>
          {moment(`${date} 12:00:00`).format("MMMM YYYY г.")}
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;
