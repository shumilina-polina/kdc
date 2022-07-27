import useHtmlDecode from "shared/hooks/useHtmlDecode";
import s from "./newsWindow.module.scss";

const NewsWindow = (props) => {
  const { title, content, category, thumbnail } = props.item;

  return (
    <div className={s.project}>
      <div>
        <div className={s.header}>
          <span className={s.category}>{category}</span>
          <span className={s.title}>{useHtmlDecode(title)}</span>
        </div>
        <div className={s.content}>
          <p>{useHtmlDecode(content)}</p>
        </div>
      </div>
      <img src={thumbnail} className={s.thumbnail} />
    </div>
  );
};

export default NewsWindow;
