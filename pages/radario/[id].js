import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const RadarioPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  return (
    <Script
      src="https://radario.ru/frontend/src/api/openapi/openapi.js"
      onLoad={() => {
        radario.Widgets.Event({
          params: {},
          standalone: true,
          createButton: false,
          eventId: isReady ? id : 1681893,
        });
      }}
    ></Script>
  );
};

export default RadarioPage;
