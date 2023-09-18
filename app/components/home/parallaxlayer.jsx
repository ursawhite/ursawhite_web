/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import "../../styles/parallax.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useEffect, useState } from "react";
import Banner from "../home/banner";
import Ourclients from "../home/ourclients";
// import Porto1 from "./portofolio/porto1";
import Porto1Para from "./portofolio/porto1para";
// import Porto2 from "./portofolio/porto2";
import Porto2Para from "./portofolio/porto2para";
// import Porto3 from "./portofolio/porto3";
import Porto3Para from "./portofolio/porto3para";
import Image from "next/image";
import Footer from "../footer/footer";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const [referenceNode, setReferenceNode] = useState(0);
  const maksPage = 7;

  useEffect(() => {
    const options = { passive: false };

    const scroll = (event) => {
      // console.log(event);
      const deltaY = event.deltaY;
      if (event.deltaY == 0) return;
      event.preventDefault();
      // console.log(deltaY);
      if (deltaY > 0 && referenceNode < maksPage - 1) {
        ref.current.scrollTo(referenceNode + 1);
        setReferenceNode(referenceNode + 1);
      } else if (deltaY > 0 && referenceNode === maksPage - 1) {
        ref.current.scrollTo(maksPage - 1);
        setReferenceNode(maksPage - 1);
      } else if (deltaY < 0 && referenceNode > 0) {
        ref.current.scrollTo(referenceNode - 1);
        setReferenceNode(referenceNode - 1);
      } else if (deltaY < 0 && referenceNode === 0) {
        ref.current.scrollTo(0);
        setReferenceNode(0);
      }
    };

    document.addEventListener("wheel", scroll, options);
    return () => {
      document.removeEventListener("wheel", scroll, options);
    };
  }, [referenceNode]);

  return (
    <>
      <Parallax
        ref={ref}
        pages={maksPage}
        style={{
          overflowY: "hidden",
          // background: "rgb(65,7,96)",
          // background:
          //   "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
          backgroundColor: "black",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          factor={1}
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
          speed={0}
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
          offset={2}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <Porto1Para />
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
          offset={3}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <Porto2Para />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          id="section"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <Porto3Para />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            marginLeft: "25%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/project1.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
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
          offset={3}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            marginLeft: "25%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/project2.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            marginLeft: "25%",
          }}
        >
          <Image
            className="logo m-5"
            src="/images/project3.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="col-lg-6 ">
                <p className="text-white ms-5"> FOR STARTUPS AND CORPORATION</p>
                <h1 className="text-white display-3 fw-bold ms-5">
                  Design Sprint Your Product Idea
                </h1>
                <p className="text-white ms-5">
                  {` Your Minimum Viable Product (Design) in 6 weeks. You can take
                  it to investors to drum up capital, take to another
                  development agency or decide to do in-house, think of the
                  outcome as a complete house design from an architect,
                  plumbing, electrical, and everything else design and planning.
                  No construction included yet, that's for another package!`}
                </p>
                <button className="btn btn-secondary ms-5">{`Let's Explore`}</button>
              </div>
              <div className="col-lg-6">
                <p className="text-white ms-5"> FOR STARTUPS AND CORPORATION</p>
                <h1 className="text-white display-3 fw-bold ms-5">
                  Development Sprint
                </h1>
                <p className="text-white ms-5">
                  You can go fast or slow, you can let us develop your own
                  designs or develop our own design from our “Design Sprint
                  Package”
                </p>
                <button className="btn btn-secondary ms-5">Contact Us</button>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
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
      </Parallax>
    </>
  );
}
