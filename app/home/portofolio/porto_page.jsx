import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInTop = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
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

function PortoPages({ items, f_color }) {
  return (
    <>
      <div className="container" style={{ zIndex: "10" }}>
        <div className="row d-flex justify-content-center align-items-center">
          <motion.div
            className="col-lg-6 col-md-7 p-5"
            variants={fadeInTop}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="d-flex ">
              <div
                className="h6 title fw-bold me-4"
                style={{ color: `${f_color}` }}
              >
                {items.title}
              </div>
              <div className="h6 title fw-bold text-white">{items.type}</div>
            </div>
            <div
              className="title display-6 text-white fw-bold mb-3"
              style={{ textTransform: "capitalize" }}
            >
              {items.subject}
            </div>
            <h5 className="subtitle text-white mt-3">{items.desc}</h5>
            <ul className="list text-white mt-3">
              {items.tech.map((techItem, index) => (
                <li key={index}>
                  <i className="item" style={{ textTransform: "capitalize" }}>
                    {techItem}
                  </i>
                </li>
              ))}
            </ul>
            <div className="btn ">
              <Link
                className="text-decoration-none fw-bold"
                href={{
                  pathname: "/ourworks/project",
                  query: { items: JSON.stringify(items) },
                }}
              >
                <span style={{ color: `${f_color}` }}>Check Now</span>
              </Link>
            </div>
          </motion.div>
          <div className="col-lg-4 col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default PortoPages;
