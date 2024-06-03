import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { fadeInTop } from "@/components/animation/animation";

function PortoPages({ items }) {
  const Router = useRouter();

  return (
    <>
      <div className="container" style={{ zIndex: "10" }}>
        <div className="row d-flex justify-content-center align-items-center">
          <motion.div
            className="col-lg-6 col-md-7 p-lg-5"
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
                style={{ color: `${items.main_color}` }}
              >
                {items.title}
              </div>
              <div className="h6 text-white fw-bold ">{items.type}</div>
            </div>
            <div
              className="display-6 text-white fw-bold mb-3"
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

            <button
              className="bg-transparent shadow-0 border-0 fw-bold"
              onClick={() =>
                Router.push(
                  `/our-works/${items.title.replace(/\s+/g, "-").toLowerCase()}`
                )
              }
            >
              <span style={{ color: `${items.main_color}` }}>Check Now</span>
            </button>
          </motion.div>
          <div className="col-lg-4 col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default PortoPages;
