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

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const [referenceNode, setReferenceNode] = useState(0);
  const maksPage = 5;

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
    <section>
      <p className="text-white position-absolute" style={{ marginTop: "50%" }}>
        test
      </p>
      <Parallax
        ref={ref}
        pages={maksPage}
        style={{
          overflowY: "hidden",
          background: "rgb(65,7,96)",
          background:
            "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
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
            backgroundColor: "rgba(30,30,32,0.5)",
          }}
        >
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.5)",
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
            backgroundColor: "rgba(30,30,32,0.5)",
          }}
        >
          <Porto1Para />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.5)",
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
            backgroundColor: "rgba(30,30,32,0.5)",
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
            className="logo-logo align-content-center m-5"
            src="/project1.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="box rounded-circle"
            style={{
              width: "35vh",
              height: "35vh",
              marginLeft: "40%",
              marginTop: "5%",
              background:
                "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="box rounded-circle"
            style={{
              width: "20vh",
              height: "20vh",
              zIndex: "2",
              marginLeft: "60%",
              marginTop: "-15%",
              background:
                "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
            }}
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
            className="logo-logo align-content-center m-5"
            src="/project2.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="box "
            style={{
              width: "40vh",
              height: "40vh",
              borderRadius: "10%",
              marginLeft: "45%",
              marginTop: "-8%",
              background:
                "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="box"
            style={{
              width: "20vh",
              height: "20vh",
              zIndex: "2",
              borderRadius: "10%",
              marginLeft: "65%",
              marginTop: "-30%",
              background:
                "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="box"
            style={{
              width: "20vh",
              height: "20vh",
              zIndex: "-2",
              borderRadius: "10%",
              marginLeft: "65%",
              marginTop: "10%",
              background:
                "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
            }}
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
            className="logo-logo align-content-center m-5"
            src="/project3.png"
            width={500}
            height={400}
            alt="logo"
            sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}
