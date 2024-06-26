import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../../../animation/animation";

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
          <p className="text-title fw-bold">Our Clients</p>
          <h2 className="title text-white mb-3 fw-bold ">
            Discover the success stories of our satisfied clients who have
            already harnessed the power of our services.
          </h2>
          <p className="text-white" style={{ fontSize: "12px" }}>
            Our commitment to excellence and dedication to delivering top-notch
            services have allowed us to build strong and enduring relationships
            with a diverse range of clients. <br />
            {`We take immense pride in the
            trust these organizations have placed in us, and we'd like to
            introduce you to some of our valued clients who have already
            experienced the benefits of our services.`}
          </p>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
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
            <Image
              src={item.logo}
              className="img-fluid bg-light object-fit-contain"
              alt={item.name}
              width={200}
              height={200}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurClient;
