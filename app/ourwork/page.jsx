"use client";
import React from "react";
import Image from "next/image";
import "../styles/ourworks.css";
// import Marquee from "../components/test_marquee/marquee";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Test_SVG from "../components/test_svg/test_svg";

function OurWork() {
  const ourWorks = [
    {
      id: 1,
      title: "Nod Credit",
      src: "/images/project1.png",
      alt: "NodCredit",
    },
    {
      id: 2,
      title: "Feco Play",
      src: "/images/project2.png",
      alt: "FecoPlay",
    },
    {
      id: 3,
      title: "HKGO",
      src: "/images/project3.png",
      alt: "HKGO",
    },
    {
      id: 4,
      title: "JPCC",
      src: "/images/project4.png",
      alt: "JPCC",
    },
    {
      id: 5,
      title: "Naked Press",
      src: "/images/project5.png",
      alt: "NakedPress",
    },
    {
      id: 6,
      title: "BNI Direct",
      src: "/images/project6.png",
      alt: "BNIDirect",
    },
  ];
  return (
    <>
      <Navbar />

      <Parallax pages={5} offset={0} style={{ backgroundColor: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <h1 className="text-title text-center text-white fw-bold m-5">
                Our Works
              </h1>
              <div
                className="col-lg-6 border border-5 border-end-0 border-bottom-0"
                style={{ height: "60vh" }}
              >
                <p
                  className="text-left fw-bolder ms-5 mt-5"
                  style={{ color: "rgba(169,80,210,255)" }}
                >
                  Our clients varied from small startup to medium sized
                  corporate
                </p>
                <h1 className="text-title text-left display-4 text-white fw-bold ms-5">
                  We are a digital design agency
                </h1>
              </div>
              <div className="col-lg-6 border border-5 border-start-0 border-top-0 ">
                <h3
                  className="text-title display-6 text-right fw-bold me-5 mt-5 ms-5"
                  id="text-right-title"
                >
                  Our clients varied from small startup to medium sized
                  corporate
                </h3>
                <h6 className="text-right text-white me-5 mb-5 ms-5 mt-5">
                  As a Software House that designs and develops web apps, mobile
                  apps, and PWAs since 2013, we have been trusted by our clients
                  from America, Europe, Australia, and Asia.
                </h6>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ marginTop: "20%", zIndex: -1 }}
        >
          <Test_SVG item="Project" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div className="row ">
              {ourWorks.slice(0, 2).map((item, index) => (
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                  />
                  <h1 className="text-white">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container" style={{}}>
            <div className="row ">
              {ourWorks.slice(2, 4).map((item, index) => (
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                  />
                  <h1 className="text-white">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container" style={{}}>
            <div className="row ">
              {ourWorks.slice(4, 6).map((item, index) => (
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                  />
                  <h1 className="text-white">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default OurWork;
