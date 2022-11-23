import { useState } from "react";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import s from "./projectWindow.module.scss";

const ProjectWindow = (props) => {
  const { title, content, category, snaps } = props.project;
  const [image, setImage] = useState(0);

  return (
    <div className={s.project}>
      <div className={s.wrapper}>
        <div className={s.header}>
          {/* <span className={s.category}>{category}</span> */}
          <span className={s.title}>{useHtmlDecode(title)}</span>
        </div>
      </div>
      <div className={s.img}>
        <img src={snaps[image]} className={s.thumbnail} />
        <div className={s.buttons}>
          <ButtonArrow
            direction="back"
            color="red"
            onClick={() => setImage(image === 0 ? 2 : 0)}
          />
          <ButtonArrow
            direction="forward"
            color="red"
            onClick={() => setImage(image === 0 ? 2 : 0)}
          />
        </div>
      </div>

      <div className={s.content}>
        <p>{useHtmlDecode(content)}</p>
      </div>
    </div>
  );
};

export default ProjectWindow;
