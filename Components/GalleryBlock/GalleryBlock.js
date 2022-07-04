import GalleryCard from "Components/GalleryCard/GalleryCard";
import Container from "UI/Container/Container";

import s from "./galleryBlock.module.scss";



const GalleryBlock = () => {
    return(
        <Container>
            <div className={s.wrapper}>
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>

            
        </Container>
    )
}

export default GalleryBlock