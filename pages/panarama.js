import React, { useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";

import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { useRouter } from "next/router";

const Panarama = () => {
  const { query } = useRouter()

  const sphereElementRef = React.createRef();

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama: "https://pandia.ru/text/80/655/images/img5_51.jpg",
    });

    return () => {
      shperePlayerInstance.destroy();
    };
  }, []);
  return <div ref={sphereElementRef} style={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: "999",
  }} />;
};

export default Panarama