"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bg from "@/components/screen/bg";
import Banner from "../Hero-Services";
import Serv from "../Serv";

import Tech from "@/components/view/services/Tech";
import Section5 from "@/components/view/services/Section5";
import Footer from "@/components/footer/footer";
import Test_SVG from "@/components/svg/svg";

function Services() {
  const ref = useRef(null);

  return (
    <>
      <Parallax
        ref={ref}
        pages={5}
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
          factor={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Serv />
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
          <Tech />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
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
          offset={4}
          speed={0}
          className="d-flex align-items-center justify-content-center"
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Services;
