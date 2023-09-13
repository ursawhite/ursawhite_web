"use client";
import { useState, useRef } from "react";
import "../styles/services.css";
import Link from "next/link";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Marquee from "./components/marquee";

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
    <Parallax ref={ref} className="parallax" pages={2}>
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
                <h1 className="fw-bold text-center text-white">Our Services</h1>
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
                  <div
                    className="box p-3"
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    <div className="title">
                      <h5>{item.services}</h5>
                    </div>
                    <div className="desc">
                      <h6>{item.desc}</h6>
                    </div>
                    <Link
                      href={`${item.link}`}
                      className="text-decoration-none"
                    >
                      <button className="btn border-0 shadow-none d-flex align-items-center">
                        <p className="m-0">Read More</p>
                        <i
                          className="bi bi-md bi-arrow-right-square ms-3"
                          style={{ fontSize: "1.5rem" }}
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
      <ParallaxLayer
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
          alt="services"
        />
      </ParallaxLayer>
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
          <div className="row d-flex justify-content-center">
            {tech.map((item, index) => (
              <div className="col-lg-auto mt-3 mb-0 " key={index}>
                <div
                  className="d-flex flex-column pt-2 ps-3 pe-3 justify-content-center align-items-center"
                  style={{ background: "rgba(255,255,255,0.5" }}
                >
                  <h6 className="fw-bold">{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Services;
