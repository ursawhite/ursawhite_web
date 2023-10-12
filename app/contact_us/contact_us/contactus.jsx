"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Bg from "../../components/screen/bg";
import Test_SVG from "../../components/svg/svg";
import MaskText from "../../components/mask/mask";
import Form from "../form/form";
import Footer from "../../components/footer/footer";

const ContactUs = () => {
  const ref = useRef(null);
  const phrases = ["Let's Build Great", "Products Together"];
  return (
    <>
      <Parallax
        ref={ref}
        pages={4}
        style={{ backgroundColor: "rgba(27,27,29,255)" }}
      >
        <Bg />
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{ marginTop: "20%", zIndex: -2 }}
        >
          <Test_SVG as="style" item="Contact" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          className="d-flex justify-content-center align-items-center"
          style={{
            zIndex: 4,
          }}
        >
          <div className="container text-white fw-bold">
            <div
              className="d-flex justify-content-center align-items-center text-center"
              style={{
                gap: "20vw",
                marginTop: "10%",
                marginBottom: "10%",
              }}
            >
              <MaskText text={phrases} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="container">
            <Form />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          factor={1}
          speed={0}
          className="d-flex align-items-center justify-content-center"
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default ContactUs;
