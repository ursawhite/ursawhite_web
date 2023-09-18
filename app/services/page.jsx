"use client";
import { useState, useRef } from "react";
import "../styles/services.css";
import Link from "next/link";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Test_SVG from "../components/test_svg/test_svg";
import Marquee_Logo from "../test_marquee/marquee_logo";
import { motion } from "framer-motion";
const ffBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  }),
};
function Services() {
  const ref = useRef(null);
  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: ` We provide front-end development services to help you build
      your website. We also provide front-end development services
      to help you build your web application.`,
      img: "/images/frontend.png",
    },
    {
      id: 2,
      title: "Back-end Development",
      description: ` We provide back-end development services to help you build
      your website. We also provide back-end development services
      to help you build your web application.`,
      img: "/images/backend.png",
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: ` We provide CMS implementation services to help you build
      your website. We also provide CMS implementation services
      to help you build your web application.`,
      img: "/images/cms.png",
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: ` We provide DevOps & Maintenance services to help you build
      your website. We also provide DevOps & Maintenance services
      to help you build your web application.`,
      img: "/images/devops.png",
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
        pages={5}
        style={{ background: "black" }}
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
          <div className="container">
            <div
              className="row"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <h1 className="text-title text-center text-white fw-bold m-5">
                Our Services
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
          factor={10}
          style={{
            display: "flex",
            backgroundColor: "rgba(30,30,32,0.9)",
            height: "150%",
            width: "100%",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              {services.map((item) => (
                <motion.div
                  className="col-lg-12 border rounded mt-5"
                  key={item.id}
                  variants={ffBottom}
                  initial="initial"
                  whileInView="animate"
                >
                  <div className="inside m-3 d-flex align-items-center ">
                    <Image
                      src={item.img}
                      width={300}
                      height={200}
                      alt="services"
                    />
                    <div className="text m-5 ">
                      <h3 className="text-white mb-3">{item.title}</h3>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* {services.map((item) => (
                <>
                  <div className="col-lg-6" key={item.id}>
                    <div className="p-5 m-2 border border-3">
                      <h3 className=" text-white fw-bold ">{item.title}</h3>
                      <p className="text-white mt-5">{item.description}</p>
                    </div>
                  </div>
                </>
              ))} */}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            marginTop: "10%",
            // backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <div className="container">
            <div className="technologies mt-5">
              <p
                className="text-center fw-bold"
                style={{ color: "rgba(169,80,210,255)" }}
              >
                Technologies Used
              </p>
              <h1 className="text-white text-center fw-bold">
                Technologies We Work With
              </h1>

              <p
                className="text-white text-center"
                style={{ marginLeft: "10%", marginRight: "10%" }}
              >
                As a premiere software development company, Innover helps to
                deliver scalable, complex, and future-ready solutions by
                utilising its unique frameworks & accelerators, broad range of
                programming languages, libraries and tools. Through Innover
                labs, we research, collaborate and co-innovate with our
                customers and technology partners to deliver path-breaking
                solutions with speed and precision.
              </p>
              <Marquee_Logo />
              {/* <div
                className="row d-flex justify-content-center"
                style={{ marginLeft: "10%", marginRight: "10%" }}
              >
                {tech.map((item, index) => (
                  <div
                    className="col-lg-auto mt-5 ms-1 border"
                    key={`item${index + 1}`}
                  >
                    <div className="d-flex flex-column p-2 justify-content-center align-items-center">
                      <h6 className="fw-bold text-white">{item}</h6>
                    </div>
                  </div>
                ))}
              </div> */}
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
            // backgroundColor: "rgba(30,30,32,0.9)",
          }}
        >
          <div className="container">
            <div
              className="row "
              style={{ marginLeft: "10%", marginRight: "10%" }}
            >
              <div className="col border border-2 bg-transparent ">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-title text-white text-center fw-bold mt-5">{`Can't find what you're looking for?`}</h1>
                  <p className="text-white text-center ">
                    Our team will be happy to help you
                  </p>
                  <button className="btn btn-secondary mt-3 mb-5">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            // backgroundColor: "rgba(30,30,32,0.9)",
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

export default Services;
