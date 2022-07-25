import GalleryCard from "Components/GalleryCard/GalleryCard";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "./galleryBlock.module.scss";

const GalleryBlock = () => {
  return (
    <Wrapper>
      <div className={s.wrapper}>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </Wrapper>
  );
};

export default GalleryBlock;
