"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./parallax.module.css";

import Banner from "../banner/banner";
import Ourclients from "../our_clients/ourclients";
import PortoPage from "../portofolio/porto_page";
import Footer from "../../components/footer/footer";
import Section6 from "../section6/section6";
import ImageLeft from "../../components/home_our_works/image_left";
import ImageRight from "../../components/home_our_works/image_right";
import ImageFont from "../../components/home_our_works/image_font";

import * as ButtonFunctions from "../../components/button/button";

export default function MultiLayerParallax(props) {
  const ref = useRef(null);
  const [referenceNode, setReferenceNode] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const maksPage = 13;
  const sectionList = [0, 1, 2, 3, 4, 5, 6];
  const data = props.items;

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
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          sticky={{ start: 0, end: 13 }}
          style={{
            inset: "50% 100% 0",
            top: "50%",
            transform: "translate(0%, -50%)",
            zIndex: "5",
            height: "50vh",
            width: "10%",
          }}
        >
          <div className="progress_bar position-absolute top-50 end-0 translate-middle-y">
            <motion.div
              whileHover={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`btn ${styles.button}`}
              onClick={() =>
                ButtonFunctions.handleClickButtonUp(
                  activeSection,
                  setActiveSection,
                  setReferenceNode,
                  ref,
                  maksPage
                )
              }
            >
              <i className={`bi bi-chevron-double-up ${styles.icon}`}></i>
            </motion.div>
            {sectionList.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                key={index + 1}
              >
                <div
                  className={`btn fw-bold border-0 shadow-0 me-3 ${
                    activeSection === item
                      ? " text-danger bg-dark border-end border-5 "
                      : " text-secondary bg-transparent border-end border-5 border-secondary"
                  }`}
                  onClick={() =>
                    ButtonFunctions.handleClickScroll(
                      item,
                      setActiveSection,
                      setReferenceNode,
                      ref,
                      maksPage
                    )
                  }
                  style={{
                    borderRadius: "0px",
                  }}
                >
                  {item}
                </div>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn "
              onClick={() =>
                ButtonFunctions.handleClickButtonDown(
                  activeSection,
                  setActiveSection,
                  setReferenceNode,
                  ref,
                  maksPage
                )
              }
            >
              <i className={`bi bi-chevron-double-down ${styles.icon}`}></i>
            </motion.div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          factor={1}
          id="section1"
          className={styles.parallaxLayer}
        >
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          id="section2"
          className={styles.parallaxLayer}
        >
          <Ourclients />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          factor={1}
          id="section3"
          className={styles.parallaxLayer}
          style={{
            zIndex: "100",
          }}
        >
          <PortoPage items={data[0]} f_color={"rgba(6,104,227,255)"} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0}
          factor={1}
          id="section4"
          className={styles.parallaxLayer}
          style={{
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
          className={styles.parallaxLayer}
          style={{
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
          className={styles.parallaxLayer}
        >
          <Section6 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={12}
          factor={1}
          id="section7"
          speed={0}
          className={styles.parallaxLayer}
        >
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.3}
          className={styles.parallaxLayer_end}
          style={{
            zIndex: "2",
          }}
        >
          <ImageRight src="/images/our-works/project1.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          className={styles.parallaxLayer}
          style={{
            zIndex: "1",
          }}
        >
          <ImageFont src="/images/img-back/nod.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.5}
          className={styles.parallaxLayer}
          style={{
            zIndex: "3",
          }}
        >
          <ImageLeft src="/images/img-back/Nod_credit.png" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0}
          className={styles.parallaxLayer}
          style={{
            zIndex: "1",
          }}
        >
          <ImageFont src="/images/img-back/feco.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0.3}
          className={styles.parallaxLayer_end}
          style={{
            zIndex: "2",
          }}
        >
          <ImageRight src="/images/our-works/project2.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0.5}
          className={styles.parallaxLayer}
          style={{
            zIndex: "3",
          }}
        >
          <ImageLeft src="/images/img-back/feco_playbook.png" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={0}
          className={styles.parallaxLayer}
          style={{
            zIndex: "1",
          }}
        >
          <ImageFont src="/images/img-back/hkgo.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0.3}
          className={styles.parallaxLayer_end}
          style={{
            zIndex: "2",
          }}
        >
          <ImageRight src="/images/our-works/project3.png" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0.5}
          className={styles.parallaxLayer}
          style={{
            zIndex: "3",
          }}
        >
          <ImageLeft src="/images/img-back/hkgo_back.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3} className={styles.layer_object1}>
          <Image
            src="/images/obj/1.png"
            width={350}
            height={350}
            alt="object1"
            className={styles.object}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3} className={styles.layer_object2}>
          <Image
            src="/images/obj/2.png"
            width={250}
            height={250}
            alt="object2"
            className={styles.object}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3} className={styles.layer_object3}>
          <Image
            src="/images/obj/3.png"
            width={300}
            height={300}
            alt="object3"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.3} className={styles.layer_object4}>
          <Image
            src="/images/obj/4.png"
            width={300}
            height={300}
            alt="object4"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.3} className={styles.layer_object5}>
          <Image
            src="/images/obj/5.png"
            width={300}
            height={300}
            alt="object5"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.3} className={styles.layer_object4}>
          <Image
            src="/images/obj/6.png"
            width={300}
            height={300}
            alt="object6"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.3} className={styles.layer_object5}>
          <Image
            src="/images/obj/7.png"
            width={300}
            height={300}
            alt="object7"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0.3} className={styles.layer_object4}>
          <Image
            src="/images/obj/8.png"
            width={300}
            height={300}
            alt="object8"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0.3} className={styles.layer_object5}>
          <Image
            src="/images/obj/9.png"
            width={300}
            height={300}
            alt="object9"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0.3} className={styles.layer_object4}>
          <Image
            src="/images/obj/10.png"
            width={300}
            height={300}
            alt="object10"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer offset={9} speed={0.3} className={styles.layer_object5}>
          <Image
            src="/images/obj/11.png"
            width={300}
            height={300}
            alt="object11"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={0.3} className={styles.layer_object4}>
          <Image
            src="/images/obj/12.png"
            width={300}
            height={300}
            alt="object12"
            className={styles.object2}
            priority
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
