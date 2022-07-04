import { useState } from 'react';
import cn from "classnames";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import s from "./projectCard.module.scss";
import Link from 'next/link';
import { routes } from 'shared/enums/pages';

const ProjectCard = (props) => {
  const { variant = 1 } = props;

  const [isShow, setShow] = useState(false)

  return (
    <div className={s.card} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
      <div className={cn(s.hidden, isShow ? s.show : null)}>
        <p className={s.description}>В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная 
            петербургская драматургия». Проект осуществляется совместно...</p>
        <Link href={routes.projects}>
            <a  className={s.read}>
                Продолжить чтение
                <ArrowForwardIcon />
            </a>
        </Link>
      </div>
      <div className={s.content}>
        <span className={s.title}>"Современная петербургская драматургия"</span>
        <span className={s.category}>Театральный проект</span>
      </div>
      <img
        className={s.thumbnail}
        src={`/assets/images/projectvariant${variant}.svg`}
      />
    </div>
  );
};

export default ProjectCard;
