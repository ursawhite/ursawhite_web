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

function Porto2() {
  const portfolio = [
    {
      name: "Feco Playbook",
      type: "Mobile App",
      subject:
        "HKGO is a location-based app (Google Maps) with flutter for a big insurance company in Hong Kong.",
      image: "/project2.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        " Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row align-items-center m-5">
          {portfolio.map((item, index) => (
            <div
              className={`item row d-flex justify-content-center m-5 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
              key={index}
            >
              <motion.div
                className="col-lg-6 order-lg-2"
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
              >
                <div>
                  <Image
                    className="logo-logo align-content-center m-5"
                    src={item.image}
                    width={500}
                    height={400}
                    alt="logo"
                    sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="col-lg-6 order-lg-1"
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
              >
                <div className="d-flex flex-row ">
                  <p className="title fw-bold text-white ms-5 me-5">
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Porto2;
