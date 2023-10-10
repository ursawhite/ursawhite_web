import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ffBottom } from "../../components/animation/animation";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Front-end Development",
      description: ` We provide front-end development services to help you build
          your website. We also provide front-end development services
          to help you build your web application.`,
      img: "/images/frontend.png",
    },
    {
      id: 2,
      title: "Back-end Development",
      description: ` We provide back-end development services to help you build
          your website. We also provide back-end development services
          to help you build your web application.`,
      img: "/images/backend.png",
    },
    {
      id: 3,
      title: "CMS Implementation",
      description: ` We provide CMS implementation services to help you build
          your website. We also provide CMS implementation services
          to help you build your web application.`,
      img: "/images/cms.png",
    },
    {
      id: 4,
      title: "DevOps & Maintenance",
      description: ` We provide DevOps & Maintenance services to help you build
          your website. We also provide DevOps & Maintenance services
          to help you build your web application.`,
      img: "/images/devops.png",
    },
  ];
  return (
    <div className="container">
      {services.map((item, index) => (
        <div
          className={`row d-flex justify-content-center mb-2 align-items-center ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
          key={item.id}
        >
          <motion.div
            className="col-lg-6 col-md-6 order-lg-1 order-2 d-flex flex-column"
            variants={ffBottom}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-white fw-bold ms-3 mb-3">{item.title}</h2>
            <h5 className="text-white ms-3 ">{item.description}</h5>
          </motion.div>
          <motion.div
            className="col-lg-6 col-md-6  order-lg-2 "
            variants={ffBottom}
            initial="initial"
            whileInView="animate"
            animate="once"
            viewport={{ once: true }}
          >
            <div className="service d-flex justify-content-center">
              <Image
                className="img-fluid ms-5 object-fit-contain"
                src={item.img}
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                alt="services"
                priority
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Service;
