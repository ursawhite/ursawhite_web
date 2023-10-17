"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import styles from "./parallax.module.scss";
import { fadeInTop } from "../../components/animation/animation";

import Bg from "../../components/screen/bg";
import Banner from "../banner/banner";
import Ourclients from "../our_clients/ourclients";
import PortoPage from "../portofolio/porto_page";
import Footer from "../../components/footer/footer";
import Section6 from "../section6/section6";
import ImageLeft from "../../components/home_our_works/left/image_left";
import ImageRight from "../../components/home_our_works/right/image_right";
import ImageFont from "../../components/home_our_works/img_font/image_font";

import * as ButtonFunctions from "../../components/button/button";

export default function MultiLayerParallax(props) {
  const ref = useRef(null);
  const [referenceNode, setReferenceNode] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const maksPage = 13;
  const sectionList = [0, 1, 2, 3, 4, 5, 6];
  const data = props.items;

  useEffect(() => {
    if (activeSection === 0) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }

    if (activeSection === (maksPage - 1) / 2) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  }, [activeSection]);

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
      }, 400);
    };

    const scrollToSection = (section) => {
      const targetSection = section * 2;
      ref.current.scrollTo(targetSection);
      setReferenceNode(targetSection);
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" && activeSection < (maksPage - 1) / 2) {
        setActiveSection((prevSection) => prevSection + 1);
        scrollToSection(activeSection + 1);
      } else if (event.key === "ArrowUp" && activeSection > 0) {
        setActiveSection((prevSection) => prevSection - 1);
        scrollToSection(activeSection - 1);
      }
    };

    document.addEventListener("wheel", scroll, option);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("wheel", scroll, option);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, setReferenceNode]);

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
        <Bg />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          sticky={{ start: 0, end: 13 }}
          style={{
            inset: "50% 87% 0",
            top: "50%",
            transform: "translate(0%, -50%)",
            zIndex: "6",
            height: "50vh",
            width: "10%",
          }}
        >
          <div className="progress_bar position-absolute top-50 end-0 translate-middle-y">
            {sectionList.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                key={index + 1}
              >
                <div
                  className={`btn fw-bold border-0 shadow-0 me-3 ${
                    activeSection === item
                      ? `${styles.btn_scroll_active} border-end border-5`
                      : `${styles.btn_scroll_passive} border-end border-5 border-secondary`
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
                  {"0" + item}
                </div>
              </motion.div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          sticky={{ start: 0, end: 13 }}
          style={{
            inset: "90% 90% 0",
            top: "90%",
            transform: "translate(0%, -50%)",

            height: "10vh",
            width: "13%",
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
          }}
        >
          <div
            className="btn"
            style={{
              display: isLast ? "none" : "",
            }}
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
            <div
              className={styles.scroll__down}
              style={{ transform: "rotate(90deg)" }}
            >
              <p className="">Scroll Down</p>
              <div className="bi bi-chevron-compact-right ms-3 me-3 "></div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          sticky={{ start: 0, end: 13 }}
          style={{
            inset: "10% 90% 0",
            top: "10%",
            zIndex: "5",
            height: "10vh",
            width: "15%",
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
          }}
        >
          <div
            className={`btn ${styles.button}`}
            style={{ display: isFirst ? "none" : "" }}
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
            <div
              className={styles.scroll__top}
              style={{ transform: "rotate(90deg)" }}
            >
              <div className="bi bi-chevron-compact-left ms-3 me-3 "></div>
              <p className="">&nbsp; Scroll Up &nbsp;</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          sticky={{ start: 0, end: 13 }}
          style={{
            inset: "50% 0% 0",
            top: "50%",
            transform: "translate(0%, -50%)",
            zIndex: "5",
            height: "50vh",
            width: "10%",
          }}
        >
          <div
            className={`social_bar position-absolute top-50 start-0 translate-middle-y p-lg-4 ${styles.social_bar}`}
          >
            <div className="row m-1">
              <div className="col-12 ">
                <a
                  className={`text-decoration-none ${styles.icon_container}`}
                  href="mailto:surya@ursawhite.com"
                >
                  <div
                    className={`h5 bi bi-envelope-at rounded p-2 ${styles.icon_social}`}
                  ></div>
                  <div className={`ms-2 ${styles.text_social}`}>Email</div>
                </a>
              </div>
            </div>
            <div className="row m-1">
              <div className="col-12">
                <a
                  href="https://wa.me/6287888927490"
                  className={`text-decoration-none ${styles.icon_container}`}
                >
                  <div
                    className={`h5 bi bi-phone-vibrate rounded p-2 ${styles.icon_social}`}
                  ></div>
                  <div className={`ms-2 ${styles.text_social}`}>Phone</div>
                </a>
              </div>
            </div>
            <div className="row m-1 ">
              <div className="col-12 ">
                <a
                  href="https://www.linkedin.com/company/ursawhite/"
                  className={`text-decoration-none ${styles.icon_container}`}
                >
                  <div
                    className={`h5 bi bi-linkedin rounded p-2 ${styles.icon_social}`}
                  ></div>
                  <div className={`ms-2 ${styles.text_social}`}> Linkedin </div>
                </a>
              </div>
            </div>
            <div className="row m-1">
              <div className="col-12">
                <a
                  href="https://maps.app.goo.gl/FAoP7ErqB2tMr2kz7"
                  className={`text-decoration-none ${styles.icon_container}`}
                >
                  <div
                    className={`h5 bi bi-geo-alt rounded p-2 ${styles.icon_social}`}
                  ></div>
                  <span className={`ms-2 ${styles.text_social}`}>Location</span>
                </a>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          factor={1}
          className={styles.parallaxLayer}
          style={{ position: "relative" }}
        >
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          className={styles.parallaxLayer}
        >
          <Ourclients />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          factor={1}
          className={styles.parallaxLayer}
          style={{
            zIndex: "100",
          }}
        >
          <PortoPage items={data[0]} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={0}
          factor={1}
          className={styles.parallaxLayer}
          style={{
            zIndex: "4",
          }}
        >
          <PortoPage items={data[1]} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          speed={0}
          factor={1}
          className={styles.parallaxLayer}
          style={{
            zIndex: "4",
          }}
        >
          <PortoPage items={data[2]} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={10}
          factor={1}
          speed={0}
          className={styles.parallaxLayer}
        >
          <Section6 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={12}
          factor={1}
          speed={0}
          className="d-flex align-items-center justify-content-center"
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
      </Parallax>
    </>
  );
}
