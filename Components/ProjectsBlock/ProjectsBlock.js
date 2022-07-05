import ProjectCard from "Components/ProjectCard/ProjectCard";
import Container from "UI/Container/Container";

import s from "./projectsBlock.module.scss";

const projects = [
  {
    id: 1,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description: 
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России."      
  },
  {
    id: 2,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
  {
    id: 3,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
  {
    id: 4,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
  {
    id: 5,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
  {
    id: 6,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
  {
    id: 7,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
  {
    id: 8,
    title: '"Современная петербургская драматургия"',
    category: "Театральный проект",
    description:
      "В 2003 году Народный коллектив театр Под самой крышей стал инициатором творческого проекта «Современная петербургская драматургия». Проект осуществляется совместно с Драматургической мастерской СТД Санкт-Петербурга, при участии центрального отделения СТД России.",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const ProjectsBlock = () => {
  return (
    <Container className={s.container} noPaddingMobile>
      <div className={s.wrapper}>
        {projects.map((project) => (
          <ProjectCard
            key={`project${project.id}`}
            project={project}
            variant={getRandomInt(4) + 1}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsBlock;
