"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const fadeInText = {
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

function Ourclients() {
  const company = [
    {
      name: "Company 1",
      logo: "/logo-1.png",
    },
    {
      name: "Company 2",
      logo: "/logo-2.png",
    },
    {
      name: "Company 3",
      logo: "/logo-3.png",
    },
    {
      name: "Company 4",
      logo: "/logo-4.png",
    },
    {
      name: "Company 5",
      logo: "/logo-5.png",
    },
    {
      name: "Company 6",
      logo: "/logo-6.png",
    },
    {
      name: "Company 7",
      logo: "/logo-7.png",
    },
    {
      name: "Company 8",
      logo: "/logo-12.png",
    },
    {
      name: "Company 9",
      logo: "/logo-13.png",
    },
    {
      name: "Company 10",
      logo: "/logo-14.png",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col-lg-8">
            <motion.p
              variants={fadeInText}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="text-center fw-bold"
              style={{ color: "#c457d5" }}
            >
              A DIGITAL PRODUCT AGENCY LIKE NO OTHER
            </motion.p>
            <motion.h1
              variants={fadeInText}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="title text-white text-center mb-3 fw-bold mb-4"
            >
              Skip the long meetings and email <br /> threads. We focus on
              getting things done.
            </motion.h1>
            <motion.p
              variants={fadeInText}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="text-white"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </motion.p>
            <div className=" d-flex flex-wrap justify-content-center align-items-center ">
              {company.map((item, index) => (
                <motion.div
                  className="mb-2"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <div className="d-flex justify-content-center align-items-center me-lg-2 me-md-1">
                    <Image
                      src={item.logo}
                      className="img-fluid p-1 bg-light"
                      alt={item.name}
                      width={150}
                      height={150}
                      sizes="{max-width: 100px} 25vw, 100px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourclients;
