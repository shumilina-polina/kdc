import { useState } from 'react';
import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import cn from "classnames";
import { routes } from 'shared/enums/pages';

import s from "./projectCard.module.scss";

const ProjectCard = (props) => {
  const {
    variant = 1,
    project: {
      title,
      category,
      description
    }
 } = props;

  const [isShow, setShow] = useState(false)

  return (
    <div className={s.card} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
      <div className={cn(s.hidden, isShow ? s.show : null)}>
        <p className={s.description}>{`${description.substr(0, 170)}...`}</p>
        <Link href={routes.projects}>
            <a  className={s.read}>
                Продолжить чтение
                <ArrowForwardIcon />
            </a>
        </Link>
      </div>
      <div className={s.content}>
        <span className={s.title}>{ 'title' }</span>
        <span className={s.category}>{ category }</span>
      </div>
      <img
        className={s.thumbnail}
        src={`/assets/images/projectvariant${variant}.svg`}
      />
    </div>
  );
};

export default ProjectCard;
