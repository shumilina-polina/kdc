import { Skeleton } from "@mui/material";
import ProjectCard from "Components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apiService from "services/apiService";
import Container from "UI/Container/Container";

import s from "./projectsBlock.module.scss";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const ProjectsBlock = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiService
      .getProjects()
      .then((res) => setProjects(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container className={s.container} noPaddingMobile>
      <div className={s.wrapper}>
        {loading
          ? [...Array(4)].map((el, index) => (
              <Skeleton
                className={s.skeleton}
                key={`projectSkeleton${index}`}
              />
            ))
          : projects.map((project) => (
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
