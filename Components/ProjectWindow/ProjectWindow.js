import useHtmlDecode from "shared/hooks/useHtmlDecode";
import s from "./projectWindow.module.scss";

const ProjectWindow = (props) => {
  const { title, content, category, snaps } = props.project;

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
      <img src={snaps[0]} className={s.thumbnail} />
    </div>
  );
};

export default ProjectWindow;
