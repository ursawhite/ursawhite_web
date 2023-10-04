import React, { useRef } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Test_SVG from "../../components/test_svg/test_svg";
import Banner from "../banner/banner";
import Footer from "../../components/footer/footer";

function AboutUs() {
  const ref = useRef(null);
  return (
    <Parallax
      ref={ref}
      pages={5}
      style={{ backgroundColor: "rgba(27,27,29,255)" }}
    >
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
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{ marginTop: "20%", zIndex: -2 }}
      >
        <Test_SVG item="About" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
        }}
      >
        <Banner />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <Image
              className="img-fluid"
              src="/images/work.jpg"
              alt="work1"
              width={400}
              height={250}
              style={{
                objectFit: "cover",
                marginLeft: "40%",
                marginRight: "60%",
              }}
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <Image
              className="img-fluid"
              src="/images/work2.png"
              alt="work2"
              width={400}
              height={250}
              style={{
                objectFit: "cover",
                marginLeft: "75%",
                marginRight: "25%",
              }}
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8}>
        <div className="col-lg-6 col-md-6">
          <Image
            className="img-fluid"
            src="/images/work3.png"
            alt="work3"
            width={600}
            height={350}
            style={{
              objectFit: "cover",
              marginLeft: "60%",
              marginRight: "50%",
            }}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h3 className="text-center text-white">
              {`We're a team of strategists, designers, developers, storytellers,
          workshoppers and Mario Kart racers.`}
            </h3>
            <div className="col-lg-4 col-md-6 mt-5 text-center">
              <h5 className="text-white">WORKSHOPS</h5>
              <p className="text-white"> Design Sprints </p>
              <p className="text-white"> Lightning Decision Jams</p>
              <p className="text-white"> Brand Sprints </p>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 text-center">
              <h5 className="text-white">PRODUCT DESIGN</h5>
              <p className="text-white"> User Experience </p>
              <p className="text-white"> User Interface </p>
              <p className="text-white"> Illustration </p>
              <p className="text-white"> Motion Graphics </p>
              <p className="text-white"> Branding </p>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 text-center">
              <h5 className="text-white">DEVELOPMENT</h5>
              <p className="text-white"> Frontend Development</p>
              <p className="text-white"> Backend Development </p>
              <p className="text-white"> Mobile Development </p>
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
        }}
      >
        <div className="container">
          <div className="row ">
            <p
              className="text-center fw-bold"
              style={{ color: "rgba(169,80,210,255)" }}
            >
              THE LEADERSHIP CREW
            </p>
            <h1 className="text-center text-white fw-bold">
              Meet The Shipmates
            </h1>
            <div className="col-lg-3 col-md-6 mt-5 text-center">
              <Image
                src="/images/ava1.jpg"
                alt="ava1"
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
              />
              <p className="text-white mt-3 mb-0">CEO</p>
              <p className="text-white">User1</p>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 text-center">
              <Image
                src="/images/ava2.jpg"
                alt="ava2"
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
              />
              <p className="text-white mt-3 mb-0">COO</p>
              <p className="text-white">User2</p>
            </div>
            <div className="col-lg-3 col-md-6  mt-5 text-center">
              <Image
                src="/images/ava3.jpg"
                alt="ava3"
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
              />
              <p className="text-white mt-3 mb-0">CTO</p>
              <p className="text-white">User3</p>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 text-center">
              <Image
                src="/images/ava4.jpg"
                alt="ava4"
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
              />
              <p className="text-white mt-3 mb-0">CFO</p>
              <p className="text-white">User4</p>
            </div>
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
        }}
      >
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default AboutUs;
