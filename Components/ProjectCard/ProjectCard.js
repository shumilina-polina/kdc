import { useState } from "react";
import Link from "next/link";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import cn from "classnames";
import { routes } from "shared/enums/pages";

import s from "./projectCard.module.scss";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import ModalWindow from "UI/Modal/ModalWindow";
import ProjectWindow from "Components/ProjectWindow/ProjectWindow";

const ProjectCard = (props) => {
  const { variant = 1, project } = props;

  const { title, content, category } = project;

  const [isShow, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className={s.card}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <div className={cn(s.hidden, isShow ? s.show : null)}>
          <p className={s.description}>{`${useHtmlDecode(content).substr(
            0,
            300
          )}...`}</p>
          <a className={s.read} onClick={() => setOpen(true)}>
            Продолжить чтение
            <ArrowForwardIcon />
          </a>
        </div>
        <div className={s.content}>
          <span className={s.title}>{useHtmlDecode(title)}</span>
          <span className={s.category}>{category}</span>
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
