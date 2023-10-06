import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../components/animation/animation";
import styles from "./clients.module.scss";

function Ourclients() {
  const company = [
    {
      name: "Company 1",
      logo: "/images/clients/logo-1.png",
    },
    {
      name: "Company 2",
      logo: "/images/clients/logo-2.png",
    },
    {
      name: "Company 3",
      logo: "/images/clients/logo-3.png",
    },
    {
      name: "Company 4",
      logo: "/images/clients/logo-4.png",
    },
    {
      name: "Company 5",
      logo: "/images/clients/logo-5.png",
    },
    {
      name: "Company 6",
      logo: "/images/clients/logo-6.png",
    },
    {
      name: "Company 7",
      logo: "/images/clients/logo-7.png",
    },
    {
      name: "Company 8",
      logo: "/images/clients/logo-12.png",
    },
    {
      name: "Company 9",
      logo: "/images/clients/logo-13.png",
    },
    {
      name: "Company 10",
      logo: "/images/clients/logo-14.png",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col-lg-8">
            <p className="text-center fw-bold" style={{ color: "#c457d5" }}>
              A DIGITAL PRODUCT AGENCY LIKE NO OTHER
            </p>
            <h1 className="title text-white text-center mb-3 fw-bold mb-4">
              Skip the long meetings and email <br /> threads. We focus on
              getting things done.
            </h1>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className=" d-flex flex-wrap justify-content-center align-items-center ">
              {company.map((item, index) => (
                <div className={`mb-2 me-2  ${styles.back_logo}`} key={index}>
                  <motion.div
                    className="d-flex justify-content-center bg-light  align-items-center me-lg-2 me-md-1"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    <Image
                      src={item.logo}
                      className={`img-fluid p-1 ${styles.logo}`}
                      alt={item.name}
                      width={150}
                      height={150}
                      sizes="{max-width: 100px} 25vw, 100px"
                      style={{ objectFit: "contain" }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourclients;
