"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
  const maksPage = 14;
  const scrollDelay = 500;
  const sectionList = [0, 1, 2, 3, 4, 5, 6];
  const data = props.items;

  //Not working
  const handleClickScroll = (item) => {
    const element = document.getElementById(item);

    if (element) {
      window.scrollTo(element);
      setActiveSection(item);
    }
  };

  useEffect(() => {
    const options = { passive: false };
    let isScrolling = false;
    let isScrollProcessed = false;
    let accumulatedDeltaY = 0;

    const scroll = (event) => {
      const deltaY = event.deltaY;
      accumulatedDeltaY += deltaY;

      if (isScrolling || Math.abs(accumulatedDeltaY) < 1) return;

      event.preventDefault();
      isScrolling = true;

      if (!isScrollProcessed) {
        isScrollProcessed = true;

        setTimeout(() => {
          if (accumulatedDeltaY > 0) {
            // Scrolling down
            if (referenceNode < maksPage - 2) {
              ref.current.scrollTo(referenceNode + 2);
              setReferenceNode(referenceNode + 2);
              setActiveSection(activeSection + 1);
            } else if (
              referenceNode === maksPage - 2 &&
              activeSection < sectionList.length - 1
            ) {
              // When you are on the second to last page, and scrolling down
              ref.current.scrollTo(maksPage);
              setReferenceNode(maksPage);
              setActiveSection(activeSection + 1);
            }
          } else {
            // Scrolling up
            if (referenceNode > 0) {
              ref.current.scrollTo(referenceNode - 2);
              setReferenceNode(referenceNode - 2);
              setActiveSection(activeSection - 1);
            } else if (referenceNode === 0 && activeSection > 0) {
              // When you are on the first page, and scrolling up
              ref.current.scrollTo(0);
              setReferenceNode(0);
              setActiveSection(activeSection - 1);
            }
          }

          isScrollProcessed = false;
          accumulatedDeltaY = 0;
        }, scrollDelay);
      }

      isScrolling = false;
    };

    document.addEventListener("wheel", scroll, options);

    return () => {
      document.removeEventListener("wheel", scroll, options);
    };
  }, [referenceNode, activeSection, maksPage, scrollDelay]);

  return (
    <>
      {/* <div className="progress_bar text-white position-absolute top-50 end-0 translate-middle-y z-3">
        {sectionList.map((item, index) => (
          <div key={index + 1} className="">
            <button
              className={`btn shadow-0  border-0 p-3 ${
                activeSection === item
                  ? "fw-bold text-danger d-flex align-items-center justify-content-center "
                  : "text-white"
              }`}
              onClick={() => handleClickScroll(item)}
            >
              <span>{item}</span>
            </button>
          </div>
        ))}
      </div> */}
      <Parallax
        ref={ref}
        pages={maksPage}
        style={{
          overflowY: "hidden",
          backgroundColor: "rgba(27,27,29,255)",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          factor={1}
          id="0"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <Banner />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}></ParallaxLayer>
        <ParallaxLayer offset={5} speed={0}></ParallaxLayer>
        <ParallaxLayer offset={7} speed={0}></ParallaxLayer>
        <ParallaxLayer offset={9} speed={0}></ParallaxLayer>
        <ParallaxLayer offset={11} speed={0}></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          id="1"
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
          id="2"
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
          id="3"
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
          id="4"
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
          id="5"
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
          id="6"
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
          <ImageLeft src="/images/img-back/nod_credit.png" />
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
