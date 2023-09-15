"use client";
import { useState, useRef } from "react";
import "../styles/services.css";
import Link from "next/link";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Test_SVG from "../components/test_svg/test_svg";

function Services() {
  const ref = useRef(null);
  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: ` We provide front-end development services to help you build
      your website. We also provide front-end development services
      to help you build your web application.`,
    },
    {
      id: 2,
      title: "Back-end Development",
      description: ` We provide back-end development services to help you build
      your website. We also provide back-end development services
      to help you build your web application.`,
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: ` We provide CMS implementation services to help you build
      your website. We also provide CMS implementation services
      to help you build your web application.`,
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: ` We provide DevOps & Maintenance services to help you build
      your website. We also provide DevOps & Maintenance services
      to help you build your web application.`,
    },
  ];
  const tech = [
    "Javascript",
    "React.js",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Frond End Development",
    "Back End Development",
    "Mobile Development",
    "Web Development",
    "Dekstop Development",
    "HTML",
    "CSS",
    "Typescript",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
  ];

  return (
    <>
      <Navbar />
      <Parallax
        ref={ref}
        className="parallax"
        pages={4}
        style={{ backgroundColor: "black" }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          tabIndex="0"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div
            className="container"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <div className="row">
              <h1 className="text-title text-center text-white fw-bold m-5">
                Our Services
              </h1>
              <div
                className="col-lg-6 border border-5 border-end-0 border-bottom-0"
                style={{ height: "50vh" }}
              >
                <p
                  className="text-left fw-bolder ms-5 mt-5"
                  style={{ color: "rgba(169,80,210,255)" }}
                >
                  YOUR DIGITAL DESIGN PARTNER
                </p>
                <h1 className="text-left text-white fw-bold ms-5">
                  We are a digital design agency
                </h1>
              </div>
              <div className="col-lg-6 border border-5 border-start-0 border-top-0 ">
                <h3
                  className="text-title display-6 text-right fw-bold me-5 mt-5 ms-5"
                  id="text-right-title"
                >
                  Web & Mobile Development
                </h3>
                <h6 className="text-right text-white me-5 mb-5 ms-5 mt-5">
                  Ursa White is a team who Create comprehensive and impactful
                  sofware solutions spanning user experience and technical
                  funtionality.
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
          <Test_SVG item="Services" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              {services.map((item) => (
                <>
                  <div className="col-lg-6" key={item.id}>
                    <div className="p-5 m-2 border border-3">
                      <h3 className="card-title text-white fw-bold ">
                        {item.title}
                      </h3>
                      <p className="card-body text-white mt-5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <div className="container">
            <p
              className="text-center fw-bold"
              style={{ color: "rgba(169,80,210,255)" }}
            >
              Technologies Used
            </p>
            <h1 className="text-white text-center fw-bold">
              Technologies We Work With
            </h1>
            <div
              className="row d-flex justify-content-center"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              {tech.map((item, index) => (
                <div
                  className="col-lg-auto mt-5 ms-1 border"
                  key={`item${index + 1}`}
                >
                  <div className="d-flex flex-column p-2 gap-5 justify-content-center align-items-center">
                    <h6 className="fw-bold text-white">{item}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            marginLeft: "30%",
            marginRight: "25%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/bootstrap.png"
            width={50}
            height={50}
            alt="bootstrap"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            marginLeft: "3%",
            marginTop: "13%",
            zIndex: "-1",
          }}
        >
          <Image src="/images/logo/css.png" width={50} height={50} alt="css" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            marginLeft: "10%",
            marginTop: "5%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/expressjs.png"
            width={50}
            height={50}
            alt="expressjs"
            style={{ backgroundColor: "white", padding: "1%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.8}
          style={{
            marginLeft: "50%",
            marginTop: "6%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/firebase.png"
            width={50}
            height={50}
            alt="firebase"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.8}
          style={{
            marginLeft: "35%",
            marginTop: "10%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/html.png"
            width={50}
            height={50}
            alt="html"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.8}
          style={{
            marginLeft: "25%",
            marginTop: "20%",
            zIndex: "-1",
          }}
        >
          <Image src="/images/logo/js.png" width={50} height={50} alt="js" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            marginLeft: "15%",
            marginTop: "15%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/materialui.png"
            width={50}
            height={50}
            alt="materialui"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            marginLeft: "60%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/mongodb.png"
            width={50}
            height={50}
            alt="mongodb"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.8}
          style={{
            marginLeft: "45%",
            marginTop: "18%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/mysql.png"
            width={50}
            height={50}
            alt="mysql"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.6}
          style={{
            marginLeft: "65%",
            marginTop: "15%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/nextjs.png"
            width={60}
            height={60}
            alt="nextjs"
            style={{ backgroundColor: "white", padding: "10" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            marginLeft: "80%",
            marginTop: "10%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/nodejs.png"
            width={50}
            height={50}
            alt="nodejs"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            marginLeft: "70%",
            marginTop: "10%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/postgresql.png"
            width={50}
            height={50}
            alt="postgresql"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{
            marginLeft: "85%",
            marginTop: "-2%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/react.png"
            width={50}
            height={50}
            alt="react"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            marginLeft: "85%",
            marginTop: "18%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/tailwind.png"
            width={50}
            height={50}
            alt="tailwind"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            marginLeft: "92.5%",
            marginTop: "10%",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/logo/typescript.png"
            width={50}
            height={50}
            alt="typescript"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          {/* <Footer /> */}
          <div className="container">
            <div
              className="row "
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="col">
                <div
                  className="box border border-2 bg-transparent d-flex flex-column justify-content-center align-items-center"
                  style={{ width: "100%", height: "50vh", borderRadius: "0" }}
                >
                  <h1 className="text-white text-center fw-bold">{`Can't find what you're looking for?`}</h1>
                  <p className="text-white text-center">
                    Our team will be happy to help you
                  </p>
                  <button className="btn btn-primary">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Services;
