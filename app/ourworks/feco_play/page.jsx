"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../../components/navbar/navbar";
import Test_svg from "../../components/test_svg/test_svg";
import Image from "next/image";

function FecoPlay() {
  const ref = useRef(null);
  const Technologies = [
    "Flutter",
    "Google Maps API",
    "Directions API",
    " Firebase cloud messaging (FCM)",
    "Firebase Database",
    "Google Analytics",
    "QR/Bar code scanning",
  ];

  return (
    <>
      <Navbar />
      <Parallax ref={ref} pages={4} style={{ backgroundColor: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            marginTop: "20%",
          }}
        >
          <Test_svg item="Feco Play" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="d-flex flex-column">
            <div className="display-2 text-center text-white fw-bold">
              Feco Play
            </div>
            <Image
              src="/images/project2.png"
              alt="FecoPlay"
              width={500}
              height={500}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-6">
                <div className="display-2 text-left text-white fw-bold">
                  Nod Credit
                </div>
                <h5 className="text-white text-left mt-4">
                  HKGO is a location-based app (Google Maps) with flutter for a
                  big insurance company in Hong Kong. you can preview the result
                  in my profile. The app is for drivers to search parking and
                  petrol station, using 3rd party parking API and google search
                  for petrol stations.
                </h5>
              </div>
              <div className="col-lg-4">
                <h6 className="text-left text-secondary fw-bold mt-4">
                  Client
                </h6>
                <h6 className="text-left text-white fw-bold mt-4">
                  Zurich Hong Kong
                </h6>
                <h6 className="text-left text-secondary fw-bold mt-4">
                  Location
                </h6>
                <h6 className="text-left text-white fw-bold mt-4">Hong Kong</h6>
                <h6 className="text-left text-secondary fw-bold mt-4">Year</h6>
                <h6 className="text-left text-white fw-bold mt-4">2020</h6>
                <h6 className="text-left text-secondary fw-bold mt-4">
                  Services
                </h6>
                <h6 className="text-left text-white fw-bold mt-4">
                  Mobile App
                </h6>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="col-lg-12">
                <h3 className="text-white text-center mb-5">Technologies</h3>
                {Technologies.map((item, index) => (
                  <div
                    className="d-flex align-items-center border border-3 border-start-0 border-end-0 "
                    key={index + 1}
                  >
                    <i
                      className="bi bi-hash mt-3 mb-3"
                      style={{ color: "white" }}
                    ></i>
                    <span className="h5 text-white text-center mt-3 mb-3 ms-3">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <Image
            src="/images/galery-hkgo-1.png"
            alt="NodCredit"
            width={500}
            height={500}
          />
          <Image
            src="/images/galery-hkgo-2.png"
            alt="NodCredit"
            width={500}
            height={500}
          />
          <Image
            src="/images/galery-hkgo-3.png"
            alt="NodCredit"
            width={500}
            height={500}
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default FecoPlay;
