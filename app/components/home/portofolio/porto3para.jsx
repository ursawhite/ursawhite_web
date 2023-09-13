import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInRight = {
  initial: {
    opacity: 0,
    x: 150,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  }),
};

const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  }),
};

function Porto3Para() {
  const portfolio = [
    {
      name: "HKGO",
      type: "Mobile App",
      subject:
        "HKGO is a location-based app (Google Maps) with flutter for a big insurance company in Hong Kong.",
      image: "/project3.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "payment API integration",
        "User dashboard",
        "Settings",
        "Referral link",
        "Beautiful animation",
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row align-items-left m-5">
          {portfolio.map((item, index) => (
            <div
              className={`item row d-flex justify-content-left m-5 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
              key={index}
            >
              <motion.div
                className="col-lg-6 order-lg-1"
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
              >
                <div className="d-flex flex-row ">
                  <p className="title fw-bold text-warning ms-5 me-5">
                    {item.name}
                  </p>
                  <p className="title fw-bold text-white ">{item.type}</p>
                </div>
                <h1 className="title text-white ms-5 mb-3">{item.subject}</h1>
                <h5 className="subtitle text-white m-5">{item.desc}</h5>
                <ul className="list text-white  m-5">
                  {item.tech.map((techItem, index) => (
                    <li key={index}>
                      <i className="item">{techItem}</i>
                    </li>
                  ))}
                </ul>
                <div className="btn ms-5 bg-none">
                  <p className="text-warning">Check Now</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Porto3Para;
