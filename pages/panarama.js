import React, { useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";

import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { useRouter } from "next/router";

const Panarama = () => {
  const { query, isReady } = useRouter();

  const sphereElementRef = React.createRef();

  useEffect(() => {
    if (isReady) {
      const shperePlayerInstance = new Viewer({
        container: sphereElementRef.current,
        panorama: encodeURI(query?.url),
      });
      return () => {
        shperePlayerInstance.destroy();
      };
    }
  }, [isReady]);

  return (
    <div
      ref={sphereElementRef}
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: "999",
      }}
    />
  );
};

export default Panarama;
