"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, config } from "@react-spring/core";
import React, { useRef, useEffect, useState } from "react";
import Banner from "../banner/banner";
import Ourclients from "../our_clients/ourclients";
import PortoPage from "../portofolio/porto_page";
import Image from "next/image";
import Link from "next/link";
import Items from "../../../public/data.json";

import Footer from "../../components/footer/footer";
import Section6 from "../section6/section6";
import ImageLeft from "../../components/home_our_works/image_left";
import ImageRight from "../../components/home_our_works/image_right";
import ImageFont from "../../components/home_our_works/image_font";

export default function MultiLayerParallax(props) {
  const ref = useRef(null);
  const [referenceNode, setReferenceNode] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  console.log("active", activeSection);
  console.log("reference", referenceNode);

  const maksPage = 13;
  const scrollDelay = 300;
  const sectionList = [0, 1, 2, 3, 4, 5, 6];
  const data = props.items;

  const handleClickScroll = (item) => {
    const offset = item * 2;
    if (offset >= 0 && offset <= maksPage) {
      ref.current.scrollTo(offset);
      setActiveSection(item);
      setReferenceNode(offset);
    }
  };

  const handleClickButtonDown = () => {
    const offset = (activeSection + 1) * 2;
    if (offset >= 0 && offset <= maksPage) {
      ref.current.scrollTo(offset);
      setActiveSection((prevSection) => prevSection + 1);
      setReferenceNode(offset);
    }
  };

  const handleClickButtonUp = () => {
    const offset = (activeSection - 1) * 2;
    if (offset >= 0 && offset <= maksPage) {
      ref.current.scrollTo(offset);
      setActiveSection((prevSection) => prevSection - 1);
      setReferenceNode(offset);
    }
  };

  // useEffect(() => {
  //   const options = { passive: false };
  //   let isScrolling = false;
  //   let isScrollProcessed = false;
  //   let accumulatedDeltaY = 0;
  //   let scrollCount = 0;
  //   let scrollTimeout = null;

  //   const scroll = (event) => {
  //     const deltaY = event.deltaY;

  //     const newAccumulatedDeltaY = accumulatedDeltaY + deltaY;
  //     accumulatedDeltaY = Math.max(Math.min(newAccumulatedDeltaY, 125), -125);

  //     if (isScrolling || (accumulatedDeltaY === 0 && deltaY === 0)) return;

  //     event.preventDefault();
  //     isScrolling = true;

  //     if (!isScrollProcessed) {
  //       isScrollProcessed = true;

  //       setTimeout(() => {
  //         let targetOffset;

  //         if (accumulatedDeltaY > 0) {
  //           if (referenceNode === maksPage && accumulatedDeltaY > 0) {
  //             targetOffset = Math.max(referenceNode - 2, 0);
  //           } else {
  //             targetOffset = Math.min(referenceNode + 2, maksPage);
  //           }
  //         } else if (accumulatedDeltaY < 0) {
  //           if (referenceNode === 0 && accumulatedDeltaY < -0) {
  //             targetOffset = referenceNode;
  //           } else {
  //             targetOffset = Math.max(referenceNode - 2, 0);
  //           }
  //         } else {
  //           targetOffset = referenceNode;
  //         }

  //         if (targetOffset === referenceNode) {
  //           isScrollProcessed = false;
  //         } else {
  //           if (targetOffset === maksPage && accumulatedDeltaY > 0) {
  //             scrollCount = 0;
  //           }

  //           if (
  //             targetOffset % 2 === 1 &&
  //             targetOffset !== maksPage &&
  //             scrollCount < 2
  //           ) {
  //             targetOffset += 1;
  //             scrollCount++;
  //           }

  //           scrollTimeout = setTimeout(() => {
  //             ref.current.scrollTo(targetOffset);
  //             setReferenceNode(targetOffset);
  //             setActiveSection(Math.floor(targetOffset / 2));

  //             isScrollProcessed = true;
  //           }, 300);

  //           accumulatedDeltaY = 0;
  //         }
  //       }, scrollDelay);
  //     }
  //     isScrollProcessed = false;
  //     isScrolling = false;
  //   };

  //   document.addEventListener("wheel", scroll, options);

  //   return () => {
  //     document.removeEventListener("wheel", scroll, options);

  //     if (scrollTimeout) {
  //       clearTimeout(scrollTimeout);
  //     }
  //   };
  // }, [referenceNode, activeSection, scrollDelay]);

  useEffect(() => {
    const option = { passive: false };
    let scrollTimeout;

    const scroll = (event) => {
      event.preventDefault();

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const deltaY = event.deltaY;

        if (deltaY > 0 && activeSection < (maksPage - 1) / 2) {
          setActiveSection((prevSection) => prevSection + 1);
          scrollToSection(activeSection + 1);
        } else if (deltaY < 0 && activeSection > 0) {
          setActiveSection((prevSection) => prevSection - 1);
          scrollToSection(activeSection - 1);
        }
      }, 500);
    };

    const scrollToSection = (section) => {
      const targetSection = section * 2;
      ref.current.scrollTo(targetSection);
      setReferenceNode(targetSection);
    };

    document.addEventListener("wheel", scroll, option);

    return () => {
      document.removeEventListener("wheel", scroll, option);
    };
  }, [activeSection, maksPage, ref, setReferenceNode]);

  return (
    <>
      <Parallax
        ref={ref}
        pages={maksPage}
        style={{
          overflowY: "hidden",
          backgroundColor: "rgba(27,27,29,255)",
        }}
      >
        <ParallaxLayer offset={1} speed={0} factor={0.5}></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0} factor={0.5}></ParallaxLayer>
        <ParallaxLayer offset={5} speed={0} factor={0.5}></ParallaxLayer>
        <ParallaxLayer offset={7} speed={0} factor={0.5}></ParallaxLayer>
        <ParallaxLayer offset={9} speed={0} factor={0.5}></ParallaxLayer>
        <ParallaxLayer offset={11} speed={0} factor={0.5}></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          factor={1}
          sticky={{ start: 0, end: 13 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="progress_bar position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: "10" }}
          >
            <div className="btn" onClick={handleClickButtonUp}>
              <i
                className="bi bi bi-chevron-double-up"
                style={{ color: "gray" }}
              ></i>
            </div>
            {sectionList.map((item, index) => (
              <div key={index + 1 + activeSection + new Date().getTime()}>
                <button
                  className={`btn fw-bold border-0 shadow-0 me-3 ${
                    activeSection === item
                      ? " text-danger bg-dark border-end border-5 "
                      : " text-secondary bg-transparent border-end border-5 border-secondary"
                  }`}
                  onClick={() => handleClickScroll(item)}
                  style={{
                    borderRadius: "0px",
                  }}
                >
                  {item}
                </button>
              </div>
            ))}
            <div className="btn " onClick={handleClickButtonDown}>
              <i
                className="bi bi-chevron-double-down"
                style={{ color: "gray" }}
              ></i>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          factor={1}
          id="section1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          id="section2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ourclients />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          factor={1}
          id="section3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "4",
            // backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <PortoPage items={data[0]} f_color={"rgba(6,104,227,255)"} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0}
          factor={1}
          id="section4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "4",
          }}
        >
          <PortoPage items={data[1]} f_color={"rgba(86,133,65,255)"} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0}
          factor={1}
          id="section5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "4",
          }}
        >
          <PortoPage items={data[2]} f_color={"rgba(34,97,170,255)"} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={10}
          factor={1}
          id="section6"
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Section6 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={12}
          factor={1}
          id="section7"
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.3}
          style={{
            zIndex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <ImageRight src="/images/our-works/project1.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageFont src="/images/img-back/nod.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            zIndex: "3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageLeft src="/images/img-back/Nod_credit.png" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0}
          style={{
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageFont src="/images/img-back/feco.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0.3}
          style={{
            zIndex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <ImageRight src="/images/our-works/project2.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0.5}
          style={{
            zIndex: "3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageLeft src="/images/img-back/feco_playbook.png" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={0}
          style={{
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageFont src="/images/img-back/hkgo.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0.3}
          style={{
            zIndex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <ImageRight src="/images/our-works/project3.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0.5}
          style={{
            zIndex: "3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageLeft src="/images/img-back/hkgo_back.png" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{ marginLeft: "90%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/1.png"
            width={350}
            height={350}
            alt="logo"
            style={{
              objectFit: "contain",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ marginLeft: "-5%", marginTop: "-10%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/2.png"
            width={250}
            height={250}
            alt="logo"
            style={{
              objectFit: "contain",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ marginLeft: "90%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/3.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(350deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/4.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(350deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.3}
          style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/5.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(350deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.3}
          style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/6.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.3}
          style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/7.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.3}
          style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/8.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          speed={0.3}
          style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/9.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0.3}
          style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/10.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          speed={0.3}
          style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/11.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          speed={0.3}
          style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/12.png"
            width={300}
            height={300}
            alt="logo"
            style={{
              objectFit: "contain",
              transform: "rotate(30deg)",
              opacity: "0.3",
              filter: "blur(8px)",
            }}
            priority
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
