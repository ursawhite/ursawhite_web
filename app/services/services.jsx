"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Test_SVG from "../components/test_svg/test_svg";
import Marquee_Logo from "../components/test_marquee/marquee_logo";
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
      <Parallax
        ref={ref}
        className="parallax"
        pages={6}
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
            <div className="row">
              <h1
                className="text-center text-white fw-bold m-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Services
              </h1>
              <div className="col-lg-6 col-md-6 border border-5 border-end-0 border-bottom-0">
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
              <div className="col-lg-6 col-md-6 border border-5 border-start-0 border-top-0 ">
                <h3
                  className="display-6 text-right fw-bold me-5 mt-5 ms-5"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
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
            {services.map((item, index) => (
              <div
                className={`row d-flex justify-content-center align-items-center ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
                key={item.id}
              >
                <motion.div
                  className="col-lg-6 col-md-6 order-lg-1 order-2"
                  variants={ffBottom}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="d-flex flex-column ">
                    <h2 className="text-white fw-bold ms-3 mb-3">
                      {item.title}
                    </h2>
                    <h5 className="text-white ms-3 ">{item.description}</h5>
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-6 col-md-6  order-lg-2 "
                  variants={ffBottom}
                  initial="initial"
                  whileInView="animate"
                  animate="once"
                  viewport={{ once: true }}
                >
                  <div className="service d-flex justify-content-center">
                    <Image
                      className="img-fluid ms-5"
                      src={item.img}
                      width={400}
                      height={400}
                      style={{ objectFit: "contain" }}
                      alt="services"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
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
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
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

                  <p className="text-white text-center">
                    As a premiere software development company, Innover helps to
                    deliver scalable, complex, and future-ready solutions by
                    utilising its unique frameworks & accelerators, broad range
                    of programming languages, libraries and tools. Through
                    Innover labs, we research, collaborate and co-innovate with
                    our customers and technology partners to deliver
                    path-breaking solutions with speed and precision.
                  </p>
                  <Marquee_Logo />
                </div>
              </div>
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
          offset={4}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <div className="row ">
              <div className="col border border-2 bg-transparent ">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h1
                    className="text-white text-center fw-bold mt-5"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >{`Can't find what you're looking for?`}</h1>
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
          offset={5}
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
    </>
  );
}

export default Services;
