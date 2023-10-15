import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bg from "../../components/screen/bg";
import Test_SVG from "../../components/svg/svg";
import Banner from "../banner/banner";
import Approach from "../approach/approach";
import ImgSectionBack from "../img_section/back/img_section_back";
import ImgSectionFront from "../img_section/front/img_section_front";
import ImgSectionCenter from "../img_section/center/center_image";
import ImgSectionBottom from "../img_section/bottom/bottom";

import Section3 from "../sub/sub";
import Crew from "../crew/crew";
import Footer from "../../components/footer/footer";

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

      <ParallaxLayer offset={7} speed={0} className="d-flex align-items-center">
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default AboutUs;
