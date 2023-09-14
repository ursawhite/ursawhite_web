"use client";
import { useState, useRef } from "react";
import "../styles/services.css";
import Link from "next/link";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Footer from "../components/footer/footer";

function Services() {
  const ref = useRef(null);
  const data = [
    {
      id: 1,
      services: "Web Solution",
      desc: " Web Solution provide a custom roadmap and a team of experts that can build, modernize and integrate your applications.",
      subDesc:
        "  Our web solution are based on a global talent base, sophisticated tools, and proven methodology through which we can scale your needs. We can also manage your applications, ensuring that it increases your business flexibility and optimizes IT costs.",
      list: [
        "Web Development",
        "Web Modernization",
        "Web Management",
        "Web Testing",
        "Web Security",
        "Web Integration",
        "Web Maintenance",
        "Web Migration",
        "Web Support",
        "Web Consulting",
        "Web Outsourcing",
      ],
      link: "/services/web-solution",
    },
    {
      id: 2,
      services: "Dekstop Solution",
      desc: "Dekstop Solution provide a custom roadmap and a team of experts that can build, modernize and integrate your applications.",
      subDesc:
        "Our dekstop solution are based on a global talent base, sophisticated tools, and proven methodology through which we can scale your needs. We can also manage your applications, ensuring that it increases your business flexibility and optimizes IT costs.",
      list: [
        "Dekstop Development",
        "Dekstop Modernization",
        "Dekstop Management",
        "Dekstop Testing",
        "Dekstop Security",
        "Dekstop Integration",
        "Dekstop Maintenance",
        "Dekstop Migration",
        "Dekstop Support",
        "Dekstop Consulting",
        "Dekstop Outsourcing",
      ],
      link: "/services/dekstop-solution",
    },
    {
      id: 3,
      services: "Mobile Solution",
      desc: "Mobile Solution provide a custom roadmap and a team of experts that can build, modernize and integrate your applications.",
      subDesc:
        "Our mobile solution are based on a global talent base, sophisticated tools, and proven methodology through which we can scale your needs. We can also manage your applications, ensuring that it increases your business flexibility and optimizes IT costs.",
      list: [
        "Mobile Development",
        "Mobile Modernization",
        "Mobile Management",
        "Mobile Testing",
        "Mobile Security",
        "Mobile Integration",
        "Mobile Maintenance",
        "Mobile Migration",
        "Mobile Support",
        "Mobile Consulting",
        "Mobile Outsourcing",
      ],
      link: "/services/mobile-solution",
    },
    // {
    //   id: 4,
    //   services: "Digital Services",
    //   desc: "Digital Services provide a custom roadmap and a team of experts that can build, modernize and integrate your applications.",
    //   subDesc:
    //     "Our digital services are based on a global talent base, sophisticated tools, and proven methodology through which we can scale your needs. We can also manage your applications, ensuring that it increases your business flexibility and optimizes IT costs.",
    //   list: [
    //     "Digital Development",
    //     "Digital Modernization",
    //     "Digital Management",
    //     "Digital Testing",
    //     "Digital Security",
    //     "Digital Integration",
    //     "Digital Maintenance",
    //     "Digital Migration",
    //     "Digital Support",
    //     "Digital Consulting",
    //     "Digital Outsourcing",
    //     "Digital Security",
    //   ],
    //   link: "/services/digital-services",
    // },
    // {
    //   id: 5,
    //   services: "Infrastructure Services",
    //   desc: "Infrastructure Services provide a custom roadmap and a team of experts that can build, modernize and integrate your applications.",
    //   subDesc:
    //     "Our infrastructure services are based on a global talent base, sophisticated tools, and proven methodology through which we can scale your needs. We can also manage your applications, ensuring that it increases your business flexibility and optimizes IT costs.",
    //   list: [
    //     "Infrastructure Development",
    //     "Infrastructure Modernization",
    //     "Infrastructure Management",
    //     "Infrastructure Testing",
    //     "Infrastructure Security",
    //     "Infrastructure Integration",
    //     "Infrastructure Maintenance",
    //     "Infrastructure Migration",
    //     "Infrastructure Support",
    //     "Infrastructure Consulting",
    //     "Infrastructure Outsourcing",
    //     "Infrastructure Security",
    //   ],
    //   link: "/services/infrastructure-services",
    // },
    // {
    //   id: 6,
    //   services: "Security Services",
    //   desc: "Security Services provide a custom roadmap and a team of experts that can build, modernize and integrate your applications.",
    //   subDesc:
    //     "Our security services are based on a global talent base, sophisticated tools, and proven methodology through which we can scale your needs. We can also manage your applications, ensuring that it increases your business flexibility and optimizes IT costs.",
    //   list: [
    //     "Security Development",
    //     "Security Modernization",
    //     "Security Management",
    //     "Security Testing",
    //     "Security Security",
    //     "Security Integration",
    //     "Security Maintenance",
    //     "Security Migration",
    //     "Security Support",
    //     "Security Consulting",
    //     "Security Outsourcing",
    //     "Security Security",
    //   ],
    //   link: "/services/security-services",
    // },
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
    <Parallax ref={ref} className="parallax" pages={3}>
      <ParallaxLayer
        offset={0}
        speed={0}
        tabIndex="0"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(30,30,32,0.5)",
        }}
      >
        <div className="background_layer">
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <p
                  className="text-center fw-bold"
                  style={{ color: "rgba(169,80,210,255)" }}
                >
                  Everything you need
                </p>
                <h1 className="text-title fw-bold text-center text-white">
                  Our Services
                </h1>
                <p
                  className="text-left text-white"
                  style={{ marginLeft: "25%", marginRight: "25%" }}
                >
                  Our team is equipped with the knowledge and ability to deliver
                  a broad cross-section of services to meet your ever-evolving
                  business software needs.
                </p>
                <p
                  className="text-left text-white"
                  style={{ marginLeft: "25%", marginRight: "25%" }}
                >
                  Our team is equipped with the knowledge and ability to deliver
                  a broad cross-section of services to meet your ever-evolving
                  business software needs.
                </p>
              </div>
              {data.map((item, index) => (
                <div className="col-lg-4 my-3" key={index + 1}>
                  <div className="box p-3 ">
                    <div className="title">
                      <h5 className="text-white">{item.services}</h5>
                    </div>
                    <div className="desc">
                      <h6 className="text-white">{item.desc}</h6>
                    </div>
                    <Link
                      href={`${item.link}`}
                      className="text-decoration-none"
                    >
                      <button className="btn border-0 shadow-none d-flex align-items-center">
                        <p className="m-0 text-white">Read More</p>
                        <i
                          className="bi bi-md bi-arrow-right-square ms-3"
                          style={{ fontSize: "1.5rem", color: "white" }}
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>
      {/* <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          marginLeft: "50%",
          marginRight: "25%",
          zIndex: "-1",
        }}
      >
        <Image
          src="/images/img1.png"
          width={1000}
          height={1000}
          sizes="(min-width: 1024px) 60vw, 100vw"
          alt="services"
        />
      </ParallaxLayer> */}
      <ParallaxLayer
        offset={1}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(30,30,32,0.5)",
        }}
      >
        <div className="container">
          <p
            className="text-center fw-bold"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            Technologies Used
          </p>
          <h1 className="text-white text-center fw-bold mt-5">
            Technologies We Work With
          </h1>
          <div
            className="row d-flex justify-content-center"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            {tech.map((item, index) => (
              <div className="col-lg-auto mt-3 mb-0 " key={index}>
                <div
                  className="d-flex flex-column pt-2 ps-3 pe-3 justify-content-center align-items-center"
                  style={{ backgroundColor: "white" }}
                >
                  <h6 className="fw-bold">{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
        speed={0.8}
        style={{
          marginLeft: "35%",
          marginTop: "10%",
          zIndex: "-1",
        }}
      >
        <Image src="/images/logo/html.png" width={50} height={50} alt="html" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={1}
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
        offset={2}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(30,30,32,0.5)",
        }}
      >
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Services;
