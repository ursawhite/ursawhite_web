"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bg from "../../components/screen/bg";
import Banner from "../banner/banner";
import Serv from "../serv/serv";
import Tech from "../tech/tech";
import Section5 from "../section5/section5";
import Footer from "../../components/footer/footer";
import Test_SVG from "../../components/test_svg/test_svg";

function Services() {
  const ref = useRef(null);

  return (
    <>
      <Parallax
        ref={ref}
        pages={6}
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
          <Test_SVG item="Services" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={10}
          style={{
            display: "flex",
            height: "150%",
            width: "100%",
          }}
        >
          <Serv />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            marginTop: "10%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <Tech />
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
          <Section5 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
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
    </>
  );
}

export default Services;
