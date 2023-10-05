import React, { useRef } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bg from "../../components/screen/bg";
import Test_SVG from "../../components/test_svg/test_svg";
import Banner from "../banner/banner";
import ImgSectionBack from "../img_section/back/img_section_back";
import ImgSectionFront from "../img_section/front/img_section_front";
import Section3 from "../section3/section3";
import Crew from "../crew/crew";
import Footer from "../../components/footer/footer";

function AboutUs() {
  const ref = useRef(null);
  return (
    <Parallax
      ref={ref}
      pages={5}
      style={{ backgroundColor: "rgba(27,27,29,255)" }}
    >
      <Bg />
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{ marginTop: "20%", zIndex: -2 }}
      >
        <Test_SVG item="About" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
        }}
      >
        <Banner />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImgSectionBack />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8}>
        <ImgSectionFront />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section3 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Crew />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default AboutUs;
