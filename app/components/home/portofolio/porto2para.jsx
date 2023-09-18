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

function Porto2Para() {
  const portfolio = [
    {
      name: "Feco Playbook",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
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
      <div
        className="container"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="row align-items-left">
          {portfolio.map((item, index) => (
            <div className="row d-flex justify-content-left" key={index}>
              <div className="col-lg-2"></div>
              <motion.div
                className="col-lg-6 order-lg-1"
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
              >
                <div className="d-flex flex-row ">
                  <p className="title fw-bold text-warning me-4">{item.name}</p>
                  <p className="title fw-bold text-white ">{item.type}</p>
                </div>
                <h1 className="title text-white mb-3">{item.subject}</h1>
                <h5 className="subtitle text-white mt-5">{item.desc}</h5>
                <ul className="list text-white ">
                  {item.tech.map((techItem, index) => (
                    <li key={index}>
                      <i className="item">{techItem}</i>
                    </li>
                  ))}
                </ul>
                <div className="btn bg-none">
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

export default Porto2Para;
