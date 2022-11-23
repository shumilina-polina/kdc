import useHtmlDecode from "shared/hooks/useHtmlDecode";
import s from "./newsWindow.module.scss";

const NewsWindow = (props) => {
  const { title, content, category, thumbnail } = props.item;

  return (
    <div className={s.project}>
      <div className={s.wrapper}>
        <div className={s.header}>
          {/* <span className={s.category}>{category}</span> */}
          <span className={s.title}>{useHtmlDecode(title)}</span>
        </div>
        <div
          className={s.content}
          dangerouslySetInnerHTML={{ __html: useHtmlDecode(content, true) }}
        ></div>
      </div>
      <img src={thumbnail} className={s.thumbnail} />
    </div>
  );
};

export default NewsWindow;
