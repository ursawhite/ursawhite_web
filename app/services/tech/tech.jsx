import React from "react";
import Marquee_Logo from "../../components/marquee/marquee_logo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "../../components/animation/animation";
const Tech = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 col-md-12">
          <div className="technologies mt-5">
            <p className="text-title text-center fw-bold">Technologies Used</p>
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
              className="text-white text-center fw-bold"
            >
              Technologies We Work With
            </motion.h2>

            <motion.p
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
              className="text-white text-center"
            >
              As a premiere software development company, Innover helps to
              deliver scalable, complex, and future-ready solutions by utilising
              its unique frameworks & accelerators, broad range of programming
              languages, libraries and tools. Through Innover labs, we research,
              collaborate and co-innovate with our customers and technology
              partners to deliver path-breaking solutions with speed and
              precision.
            </motion.p>
            <Marquee_Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
