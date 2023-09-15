"use client";
import React from "react";
import Image from "next/image";
import "../../styles/ourclients.css";
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
      delay: 0.1 * index,
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
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <p className="text-white">A DIGITAL PRODUCT AGENCY LIKE NO OTHER</p>
          <h1 className="title text-white text-center mb-3 fw-bold mb-4">
            Skip the long meetings and email <br /> threads. We focus on getting
            things done.
          </h1>
          <p
            className="text-left text-white"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          {company.map((item, index) => (
            <motion.div
              className="col-lg-3 mt-3 mb-4"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="card">
                <Image
                  src={item.logo}
                  className="card-img-top p-1"
                  alt={item.name}
                  fill
                  sizes="{max-width: 100px} 25vw, 100px"
                  style={{ objectFit: "contain" }}
                  priority
                />
                <div className="card-body"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ourclients;
