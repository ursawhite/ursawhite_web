import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bg from "../../screen/bg";
import Test_SVG from "../../svg/svg";
import Banner from "./Banner";
import Approach from "./Approach";
import Partnership from "./Pathnership";
import ImgSectionBack from "./Img-Section-Back";
import ImgSectionFront from "./Img-Section-Front";
import ImgSectionCenter from "./Img-Section-Center";
import ImgSectionBottom from "./Img-Section-Bottom";

import Section3 from "./Sub";
import Crew from "./Crew";
import Footer from "../../footer/footer";

function AboutUs() {
  const ref = useRef(null);
  return (
    <Parallax
      ref={ref}
      pages={8}
      style={{ backgroundColor: "rgba(27,27,29,255)" }}
    >
      <Bg />
      <ParallaxLayer
        offset={0}
        speed={0.3}
        style={{ marginTop: "20%", zIndex: -2 }}
      >
        <Test_SVG as="style" item="About" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0}
        className="d-flex justify-content-center align-items-center"
        style={{
          zIndex: 4,
        }}
      >
        <Banner />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0}
        className="d-flex justify-content-center align-items-center"
      >
        <Section3 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        className="d-flex justify-content-center align-items-center"
      >
        <Approach />
      </ParallaxLayer>
      <ParallaxLayer offset={3} factor={3} speed={0.2}>
        <ImgSectionBack />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.4} factor={1}>
        <ImgSectionFront />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.6} factor={1}>
        <ImgSectionCenter />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.8} factor={1}>
        <ImgSectionBottom />
      </ParallaxLayer>

      <ParallaxLayer
        offset={5}
        speed={0}
        className="d-flex justify-content-center align-items-center"
      >
        <Crew />
      </ParallaxLayer>

      <ParallaxLayer
        offset={6}
        speed={0}
        className="d-flex justify-content-center align-items-center"
      >
        <Partnership />
      </ParallaxLayer>

      <ParallaxLayer offset={7} speed={0} className="d-flex align-items-center">
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default AboutUs;
