import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FirstPage from "./pages/pages1";
import SecondPage from "./pages/pages2";
import ThirdPage from "./pages/pages3";
import { useAdaptiveTriggers } from "../../hooks/adaptiveTriggers";

const ParallaxComponent = () => {
  const width = useAdaptiveTriggers({});
  const parallax = useRef(null);

  return (
    <Parallax ref={parallax} pages={ParallaxConfig[width].pages} key={width}>
      <ParallaxLayer
        offset={ParallaxConfig[width][Pages.firstPage].offset}
        speed={ParallaxConfig[width][Pages.firstPage].speed}
      >
        <FirstPage />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[width][Pages.secondPage].offset}
        speed={ParallaxConfig[width][Pages.secondPage].speed}
      >
        <SecondPage />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[width][Pages.thirdPage].offset}
        speed={ParallaxConfig[width][Pages.thirdPage].speed}
      >
        <ThirdPage />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxComponent;
