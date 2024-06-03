import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Bg from "@/components/screen/bg";
import SvgText from "@/components/svg/svg";
import Banner from "./Banner";
import Porto from "./porto";
import OurStrengths from "./Our-Strengths";
import Wordpress from "./Wordpress";
import Footer from "@/components/footer/footer";

function Our_Works({ items, wpData, isLoading }) {
  const parallaxLayer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Parallax
        pages={7}
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
          <SvgText item="Project" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} style={parallaxLayer}>
          <OurStrengths />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} factor={2} style={parallaxLayer}>
          <Porto items={items} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0} factor={2} style={parallaxLayer}>
          <Wordpress wpData={wpData} isLoading={isLoading} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
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
