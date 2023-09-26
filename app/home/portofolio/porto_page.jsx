import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

function PortoPages({ items, f_color }) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="row d-flex ">
            <motion.div
              className="col-lg-6 col-md-6 p-5"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
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
                className="title display-5 text-white fw-bold mb-3"
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
              <div className="btn bg-none">
                <Link
                  className="text-decoration-none fw-bold"
                  href={{
                    pathname: `/ourworks/project`,
                    query: { items: JSON.stringify(items) },
                  }}
                >
                  Check Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortoPages;
