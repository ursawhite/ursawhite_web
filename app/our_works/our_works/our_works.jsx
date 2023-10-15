import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bg from "../../components/screen/bg";
import Banner from "../banner/banner";
import Porto from "../porto/porto";
import Footer from "../../components/footer/footer";
import Test_SVG from "../../components/svg/svg";

function Our_Works(props) {
  const data = props.items;

  const parallaxLayer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Parallax
        pages={4}
        offset={0}
        style={{ backgroundColor: "rgba(27,27,29,255)" }}
      >
        <Bg />

        <ParallaxLayer offset={0} speed={0} style={parallaxLayer}>
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ marginTop: "20%", zIndex: -2 }}
        >
          <Test_SVG item="Project" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} factor={2.5} style={parallaxLayer}>
          <Porto items={data} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          className="d-flex align-items-center"
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Our_Works;
