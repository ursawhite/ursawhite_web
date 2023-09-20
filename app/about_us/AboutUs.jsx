import React, { useRef } from "react";
import "../styles/about_us.css";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Test_SVG from "../components/test_svg/test_svg";
import Footer from "../components/footer/footer";

function AboutUs() {
  const ref = useRef(null);
  return (
    <>
      <Parallax ref={ref} pages={5} style={{ background: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
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
              <h1 className="text-title text-center text-white fw-bold m-5">
                About Us
              </h1>
              <div
                className="col-lg-6 border border-5 border-end-0 border-bottom-0"
                style={{ height: "60vh" }}
              >
                <p
                  className="text-left fw-bolder ms-5 mt-5"
                  style={{ color: "rgba(169,80,210,255)" }}
                >
                  YOUR DIGITAL DESIGN PARTNER
                </p>
                <h1 className="text-left display-4 text-white fw-bold ms-5">
                  We Help Startups And Companies Succeed
                </h1>
              </div>
              <div className="col-lg-6 border border-5 border-start-0 border-top-0 ">
                <h3 className="text-right fw-bold me-5" id="text-right-title">
                  Something big is happening in the world.
                </h3>
                <h6 className="text-right text-white me-5">
                  Companies digitally transforming their services, startups
                  disrupting traditional business models, and innovation brought
                  about by digital products - all are changing the way we live.
                </h6>
                <h6 className="text-right text-white me-5">
                  {`Why spend all your resources building something, and only
            realizing after 6 months of launching – nobody actually wants it?`}
                </h6>
                <h6 className="text-right text-white mb-5 me-5">
                  {` That's why we're here. To help you ideate, validate, and test
            ideas in the most time and cost-effective manner.`}
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
          <Test_SVG item="About Us" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Image
            src="/images/work.jpg"
            alt="work1"
            width={400}
            height={250}
            style={{ objectFit: "cover", marginLeft: "10%", marginTop: "5%" }}
          />
          <Image
            src="/images/work2.png"
            alt="work1"
            width={400}
            height={250}
            style={{ objectFit: "cover", marginLeft: "30%", marginTop: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <Image
            src="/images/work3.png"
            alt="work1"
            width={600}
            height={350}
            style={{ objectFit: "cover", marginLeft: "30%", marginTop: "20%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <div className="container">
            <div className="row ">
              <h3 className="text-center text-white">
                {`We're a team of strategists, designers, developers, storytellers,
          workshoppers and Mario Kart racers.`}
              </h3>
              <div className="col-lg-4 mt-5 text-center">
                <h5 className="text-white">WORKSHOPS</h5>
                <p className="text-white"> Design Sprints </p>
                <p className="text-white"> Lightning Decision Jams</p>
                <p className="text-white"> Brand Sprints </p>
              </div>
              <div className="col-lg-4 mt-5 text-center">
                <h5 className="text-white">PRODUCT DESIGN</h5>
                <p className="text-white"> User Experience </p>
                <p className="text-white"> User Interface </p>
                <p className="text-white"> Illustration </p>
                <p className="text-white"> Motion Graphics </p>
                <p className="text-white"> Branding </p>
              </div>
              <div className="col-lg-4 mt-5 text-center">
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
            backgroundColor: "rgba(30,30,32,0.9)",
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
              <div className="col-lg-3 mt-5 text-center">
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
              <div className="col-lg-3 mt-5 text-center">
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
              <div className="col-lg-3 mt-5 text-center">
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
              <div className="col-lg-3 mt-5 text-center">
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
            backgroundColor: "rgba(30,30,32,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default AboutUs;
