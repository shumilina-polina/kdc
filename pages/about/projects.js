import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import ProjectsBlock from "Components/ProjectsBlock/ProjectsBlock";
import Head from "next/head";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>КДЦ Московский - Проекты</title>
      </Head>

      <Header />
      <ProjectsBlock />
      <Footer />
    </>
  );
};

export default ProjectPage;
