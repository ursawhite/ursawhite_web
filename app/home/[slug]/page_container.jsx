"use client";
import React from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/sprint.json";
import MaskText from "../../components/mask/mask";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import styles from "./page.module.scss";
import { motion } from "framer-motion";

const Sprint = ({ title }) => {
  const router = useRouter();
  const sprint = data.find(
    (sprint) =>
      sprint.title.toLowerCase() === title.replace(/-/g, " ").toLowerCase()
  );

  const icon = sprint.icon;

  const phrases = sprint.title.split(" ");
  const result = [];

  for (let i = 0; i < phrases.length - 1; i++) {
    const twoWordPhrase = phrases[i] + " " + phrases[i + 1];

    if (phrases[i + 1].split(" ").length === 1) {
      i++;
    }

    if (twoWordPhrase.split(" ").length === 2) {
      result.push(twoWordPhrase);
    }
  }
  if (phrases[phrases.length - 1].split(" ").length === 1) {
    result.push(phrases[phrases.length - 1]);
  }
  console.log(result);

  return (
    <>
      <div
        className="container d-flex align-items-center mt-5 mb-5"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-6">
            <div className="display-1 fw-bold text-white">
              <MaskText text={result} />
            </div>
            <motion.h4
              className="text-title fw-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {sprint.subtitle}
            </motion.h4>
            <motion.p
              className="text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {sprint.description}
            </motion.p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-7 col-10 d-flex align-items-center ">
            <Image
              className="img-fluid object-fit-contain"
              src={sprint.image}
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={sprint.image}
              alt={sprint.alt}
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <div className="container " style={{ width: "auto", height: "100vh" }}>
        <div className="row d-flex justify-content-center">
          {Object.entries(sprint.list[0]).map(([key, value], index) => (
            <div
              className="col-lg-3 col-md-6 p-1 d-flex justify-content-center"
              key={key}
            >
              <div
                className={`box p-4 d-flex justify-content-center flex-column align-items-center ${styles.box_sprint}`}
              >
                <i
                  className={`h2 ${icon[index]} text-danger p-2 me-2 rounded`}
                  key={index}
                ></i>

                <h4 className="text-white"> {key}</h4>
                <p className="text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={` d-flex align-items-center justify-content-center ${styles.banner_sprint}`}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className={`col-lg-8 col-md-10 col-sm-10 col-12 p-5 `}>
            <h5 className=" fw-bold text-white text-center">
              {sprint.closing}
            </h5>
          </div>
        </div>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ height: "100vh", width: "auto" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Sprint;
