import { useEffect, useState } from "react";
import apiService from "services/apiService";
import useHtmlDecode from "shared/hooks/useHtmlDecode";
import Acordion from "UI/Acordion/Acordion";
import s from "./antiCorruption.module.scss";

const AntiCorruption = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiService.getMore().then((res) => setPosts(res));
  }, []);

  return (
    <div className={s.main}>
      {posts.map((post) => (
        <Acordion
          title={useHtmlDecode(post.title)}
          content={useHtmlDecode(post.content, true)}
          detailsTitle={false}
        />
      ))}
    </div>
  );
};

export default AntiCorruption;
