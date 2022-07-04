import s from "./projectCard.module.scss";

const ProjectCard = (props) => {
  const { variant = 1 } = props;

  return (
    <div className={s.card}>
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
