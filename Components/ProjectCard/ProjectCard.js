import { useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import cn from "classnames";

import s from "./projectCard.module.scss";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ModalWindow from "UI/Modal/ModalWindow";
import ProjectWindow from "Components/ProjectWindow/ProjectWindow";
import { useSelector } from "react-redux";

const ProjectCard = (props) => {
  const { variant = 1, project } = props;

  const { title, content, category } = project;

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);
  const [isShow, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);

  String.prototype.trunc = function (n, useWordBoundary) {
    if (this.length <= n) {
      return this;
    }
    var subString = this.substr(0, n - 1);
    return (
      (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "&hellip;"
    );
  };

  return (
    <>
      <div
        className={s.card}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <div className={cn(s.hidden, isShow ? s.show : null)}>
          <p className={cn(s.description, v ? s.ability : null)}>
            {useHtmlDecode(content.trunc(v ? 150 : 300, true))}
          </p>
          <a className={s.read} onClick={() => setOpen(true)}>
            Продолжить чтение
            <ArrowForwardIcon />
          </a>
        </div>
        <div className={s.content}>
          <span className={cn(s.title, v ? s.ability : null)}>
            {useHtmlDecode(title)}
          </span>
          <span className={cn(s.category, v ? s.ability : null)}>
            {category}
          </span>
        </div>
        <img
          className={s.thumbnail}
          src={`/assets/images/projectvariant${variant}.svg`}
        />
      </div>

      <ModalWindow
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Проект"
      >
        <ProjectWindow project={project} />
      </ModalWindow>
    </>
  );
};

export default ProjectCard;
