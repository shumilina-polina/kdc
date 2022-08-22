import React, { useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";

import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

const Panarama = () => {
  const sphereElementRef = React.createRef();

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg",
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