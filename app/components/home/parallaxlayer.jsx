/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import "../../styles/parallax.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useEffect, useState } from "react";
import Banner from "../home/banner";
import Ourclients from "../home/ourclients";
import PortoPage from "../home/portofolio/porto_page";
import Image from "next/image";
import Footer from "../footer/footer";
import Section6 from "./section6";

export default function MultiLayerParallax(props) {
  const ref = useRef(null);
  const [referenceNode, setReferenceNode] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const maksPage = 14;
  const scrollDelay = 500;
  const sectionList = [0, 1, 2, 3, 4, 5, 6];
  const data = props.items;

  const handleClickScroll = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item);
    }
  };

  useEffect(() => {
    const options = { passive: false };
    let isScrolling = false;

    const scroll = (event) => {
      const deltaY = event.deltaY;
      if (deltaY === 0) return;

      event.preventDefault();

      if (!isScrolling) {
        isScrolling = true;

        setTimeout(() => {
          if (deltaY > 0) {
            // Scrolling down
            if (referenceNode < maksPage - 2) {
              ref.current.scrollTo(referenceNode + 2);
              setReferenceNode(referenceNode + 2);
              setActiveSection(activeSection + 1);
              isScrolling = false;
            } else if (
              referenceNode === maksPage - 2 &&
              activeSection < sectionList.length - 1
            ) {
              // When you are on the second to last page, and scrolling down
              ref.current.scrollTo(maksPage);
              setReferenceNode(maksPage);
              setActiveSection(activeSection + 1);
              isScrolling = false;
            }
          } else {
            // Scrolling up
            if (referenceNode > 0) {
              ref.current.scrollTo(referenceNode - 2);
              setReferenceNode(referenceNode - 2);
              setActiveSection(activeSection - 1);
              isScrolling = false;
            } else if (referenceNode === 0 && activeSection > 0) {
              // When you are on the first page, and scrolling up
              ref.current.scrollTo(0);
              setReferenceNode(0);
              setActiveSection(activeSection - 1);
              isScrolling = false;
            }
          }

          isScrolling = false;
        }, scrollDelay);
      }
    };

    document.addEventListener("wheel", scroll, options);

    return () => {
      document.removeEventListener("wheel", scroll, options);
    };
  }, [referenceNode, activeSection, sectionList, maksPage, scrollDelay]);

  return (
    <>
      <div className="progress_bar text-white position-absolute top-50 end-0 translate-middle-y z-3">
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
      </div>
      <Parallax
        ref={ref}
        pages={maksPage}
        style={{
          overflowY: "hidden",
          backgroundColor: "black",
        }}
      >
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
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <Banner />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={7}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={9}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={11}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          id="section2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
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
            zIndex: "1",
            backgroundColor: "rgba(30,30,32,0.9)",
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
            backgroundColor: "rgba(30,30,32,0.9)",
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
            backgroundColor: "rgba(30,30,32,0.9)",
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
            backgroundColor: "rgba(30,30,32,0.9)",
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
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            marginLeft: "30%",
            marginTop: "6%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/our-works/project1.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1",
            marginLeft: "20%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/img-back/nod.png"
            width={400}
            height={400}
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "7",
            marginLeft: "15%",
            marginTop: "8%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/img-back/Nod_credit.png"
            width={500}
            height={500}
            alt="Image by upklyak"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1",
            marginLeft: "20%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/img-back/feco.png"
            width={400}
            height={400}
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            marginLeft: "30%",
            marginTop: "6%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/our-works/project2.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "7",
            marginLeft: "15%",
            marginTop: "8%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/img-back/feco_playbook.png"
            width={400}
            height={400}
            alt="Image by upklyak"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={0.8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1",
            marginLeft: "20%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/img-back/hkgo.png"
            width={400}
            height={400}
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            marginLeft: "30%",
            marginTop: "6%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/our-works/project3.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "7",
            marginLeft: "15%",
            marginTop: "8%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/img-back/hkgo_back.png"
            width={400}
            height={400}
            alt="Image by upklyak"
            style={{ objectFit: "contain" }}
          />
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
            style={{ objectFit: "contain" }}
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
            style={{ objectFit: "contain" }}
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
            style={{ objectFit: "contain", transform: "rotate(350deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(350deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(350deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
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
            style={{ objectFit: "contain", transform: "rotate(30deg)" }}
            priority
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
