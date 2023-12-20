"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Bg from "../../../components/screen/bg";
import Banner from "../banner/banner";
import Test_svg from "../../../components/svg/svg";
import Template from "../template/template";
import Footer from "../../../components/footer/footer";

const PageTemplate = () => {
  const ref = useRef(null);
  return (
    <Parallax
      ref={ref}
      pages={4}
      style={{ backgroundColor: "rgba(27,27,29,255)" }}
    >
      <Bg />

      <ParallaxLayer
        offset={0}
        speed={0}
        tabIndex="0"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Banner />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{ marginTop: "20%", zIndex: -2 }}
      >
        <Test_svg item="Template" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Template />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0}
        className="d-flex align-items-center justify-content-center"
      >
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};

export default PageTemplate;
