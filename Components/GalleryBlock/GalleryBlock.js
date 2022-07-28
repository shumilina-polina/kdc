import { Skeleton } from "@mui/material";
import GalleryCard from "Components/GalleryCard/GalleryCard";
import { useEffect, useState } from "react";
import apiService from "services/apiService";
import { GALLERIES_PER_PAGE } from "services/config";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "./galleryBlock.module.scss";

const GalleryBlock = () => {
  const POSTS_PER_PAGE = GALLERIES_PER_PAGE;

  const [loading, setLoading] = useState(true);
  const [galleries, setGalleries] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    apiService
      .getGalleries(offset, POSTS_PER_PAGE)
      .then((res) => setGalleries(res.data))
      .finally(() => setLoading(false));
  }, [loading]);

  return (
    <>
      <Wrapper space borderBottom />
      <Wrapper>
        <div className={s.wrapper}>
          {loading ? (
            <Skeleton sx={{ height: "200px" }} />
          ) : (
            galleries.map((gallery) => (
              <GalleryCard
                key={`galleryCard_${gallery.id}`}
                gallery={gallery}
              />
            ))
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default GalleryBlock;
