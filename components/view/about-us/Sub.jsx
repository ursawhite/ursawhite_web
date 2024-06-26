import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "@/components/animation/animation";

const Section3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="container gx-5 mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="col-lg-5 col-md-6"
        >
          <h1 className="text-white fw-bold ">URSAWHITE </h1>
          <p className="text-white ">
            {`Specializes in crafting exceptional digital solutions
        tailored to your business needs. Our dedicated team prioritizes user
        experience, scalability, and effective user engagement strategies.
        Whether it's designing and developing cutting-edge web and mobile
        applications or devising innovative digital marketing campaigns, we've
        got you covered!`}
          </p>
        </motion.div>
        <div className="col-lg-4 col-md-5">
          <Image
            className="img-fluid object-fit-contain"
            src="/images/img2.png"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/images/img2.png"
            alt="Image by pikisuperstar on Freepik"
            sizes="100vw"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
