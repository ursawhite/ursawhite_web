"use client";
import React from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/services.json";
import styles from "./page.module.scss";
import MaskText from "../../components/mask/mask";
import Image from "next/image";
import { motion } from "framer-motion";
import Section5 from "../../services/section5/section5";
import Footer from "../../components/footer/footer";

const Services = ({ params }) => {
  const router = useRouter();
  const dataServices = data.filter(
    (item) =>
      item.title.replace(/-/g, " ").toLowerCase() ===
      params.slug.replace(/-/g, " ").toLowerCase()
  );
  const phrases = [];
  phrases.push(dataServices[0].title);

  return (
    <>
      <div
        className={`container d-flex justify-content-start align-items-center `}
        style={{ height: "100vh", width: "auto" }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 order-lg-2">
            <Image
              className="img-fluid object-fit-contain"
              src={dataServices[0].image}
              width={500}
              height={500}
              alt={dataServices[0].image}
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="col-lg-6 col-md-6 d-flex flex-column order-lg-1">
            <MaskText text={phrases} />
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {dataServices[0].description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="container text-white ">
        <div className="d-flex flex-column justify-content-center align-items-center gx-2">
          <h5
            className="text-center fw-bold"
            style={{ color: "rgba(169,80,210,255)" }}
          >
            Services
          </h5>
          <h1 className="text-white fw-bold text-center mb-5">Our Services</h1>
          <div className="col-lg-9 col-md-12 d-flex flex-wrap p-4">
            {dataServices[0].services.map((service, index) => (
              <div className="col-lg-6 col-md-6 d-flex p-2 " key={index}>
                <div className={`p-5 ${styles.box_section}`}>
                  <h2>{service.Service}</h2>
                  <p>{service.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "25vh", marginBottom: "25vh" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h5
              className="text-center fw-bold"
              style={{ color: "rgba(169,80,210,255)" }}
            >
              Technologies
            </h5>
            <h1 className="text-white fw-bold text-center">
              Technologies Used
            </h1>
            <h5 className="text-white text-center">
              Technological development is running exponentially. We ensure the
              technology we use is able to meet your business digitalization
              needs.
            </h5>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center gx-2">
          <div className="col-lg-8 col-md-12 d-flex flex-wrap justify-content-center ">
            {dataServices[0].tech_used.map((tech, index) => (
              <div
                className="col-lg-2 col-md-2 col-sm-3 col-4 d-flex p-3"
                key={index}
              >
                <div className={`${styles.box__tech}`}>
                  <Image
                    className="logo img-fluid object-fit-contain p-3"
                    src={tech.logo}
                    width={100}
                    height={500}
                    alt={tech.tech}
                    sizes="100vw"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="container "
        style={{ height: "100vh", width: "auto", marginTop: "25vh" }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 d-flex justify-content-center ">
            <div className="h1 bi bi-quote text-white"></div>
            <h4 className="text-white fw-bold text-center">
              {dataServices[0].closing}
            </h4>
            <div
              className="h1 bi bi-quote text-white"
              style={{ transform: "rotateY(180deg)" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "auto", marginTop: "25vh" }}
      >
        <Section5 />
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "auto", marginTop: "25vh" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Services;
