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
      delay: 0.1 * index,
    },
  }),
};

function OurClient() {
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
    <div className="container">
      <div className="row d-flex justify-content-left align-items-center ">
        <div className="col">
          <p className="fw-bold" style={{ color: "#c457d5" }}>
            A DIGITAL PRODUCT AGENCY LIKE NO OTHER
          </p>
          <h1 className="title text-white mb-3 fw-bold ">
            Skip the long meetings and email <br /> threads. We focus on getting
            things done.
          </h1>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
      </div>

      <div className="row d-flex ">
        {company.map((item, index) => (
          <motion.div
            className="col-4 mt-3 mb-4"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="">
              <Image
                src={item.logo}
                className="img-fluid bg-light rounded p-1"
                alt={item.name}
                width={100}
                height={100}
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
  );
}

export default OurClient;
