import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../components/animation/animation";

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
    <div className="container">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col-lg-8 col-md-12">
          <h4 className="text-title text-center fw-bold">Our Clients</h4>
          <h1 className="title text-white text-center mb-3 fw-bold mb-4">
            Discover the success stories <br />
            of our satisfied clients who have already harnessed the power of our
            services.
          </h1>
          <p className="text-white ms-3">
            Our commitment to excellence and dedication to delivering top-notch
            services have allowed us to build strong and enduring relationships
            with a diverse range of clients. <br />
            {`We take immense pride in the
            trust these organizations have placed in us, and we'd like to
            introduce you to some of our valued clients who have already
            experienced the benefits of our services.`}
          </p>
          <div className=" d-flex flex-wrap justify-content-center align-items-center ">
            {company.map((item, index) => (
              <div
                className="d-flex justify-content-center align-items-center me-lg-2 me-md-1 mb-lg-2 mb-lg-2"
                key={index}
              >
                <motion.div
                  className="bg-light "
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
                    className="logo img-fluid p-1"
                    alt={item.name}
                    width={150}
                    height={150}
                    sizes={
                      "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                    }
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourclients;
