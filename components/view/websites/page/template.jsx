"use client";
import { useState, useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Bg from "../../../components/screen/bg";
import Banner from "../../../components/view/websites/banner/banner";
import Test_svg from "../../../components/svg/svg";
import Template from "../template/template";
import Footer from "../../../components/footer/footer";

const PageTemplate = ({ isLoading, data }) => {
  const ref = useRef(null);

  return (
    // <Parallax
    //   ref={ref}
    //   pages={4}
    //   style={{ backgroundColor: "rgba(27,27,29,255)" }}
    // >
    //   {/* <Bg /> */}

    //   <ParallaxLayer
    //     offset={0}
    //     speed={0}
    //     tabIndex="0"
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Banner />
    //   </ParallaxLayer>
    //   <ParallaxLayer
    //     offset={0}
    //     speed={0}
    //     style={{ marginTop: "20%", zIndex: -2 }}
    //   >
    //     <Test_svg item="Template" />
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={1}
    //     speed={0}
    //     factor={2.5}
    //     style={{
    //       position: "relative",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Template isLoading={isLoading} data={data} />
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={3}
    //     speed={0}
    //     className="d-flex align-items-center justify-content-center"
    //   >
    //     <Footer />
    //   </ParallaxLayer>
    // </Parallax>
    <>
      <Banner />
      {/* <Template isLoading={isLoading} data={data} /> */}
    </>
  );
};

export default PageTemplate;
