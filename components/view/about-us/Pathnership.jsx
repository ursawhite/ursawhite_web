import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "../../animation/animation";

const Partner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="container mb-5">
      <div className="row d-flex justify-content-center ">
        <div className="col-lg-8 col-md-12 ">
          <p className="text-title fw-bold text-lg-center text-sm-center">
            Introducing Our Trusted Partners
          </p>
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="text-lg-center text-md-center text-sm-center text-white fw-bold capi"
          >
            We Are Proud To Work With
          </motion.h2>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="text-lg-center text-md-center text-sm-center text-white"
          >
            {` We believe in the power of collaboration to deliver outstanding
            digital solutions. We've established strong partnerships with
            companies that share our commitment to excellence and innovation.
            Together, we leverage our expertise to elevate your business to new
            heights.`}
          </motion.p>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-2 col-md-4 col-sm-4 col-5 d-flex flex-column align-items-center">
            <Image
              src="/images/partners/hingoray.webp"
              className="img-fluid p-1"
              alt="hingoray"
              width={150}
              height={150}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              priority
              style={{ objectFit: "contain" }}
            />
            <p className="text-center text-white mt-3">Hingoray</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-5 d-flex flex-column align-items-center">
            <Image
              src="/images/partners/studia_alva.png"
              className="img-fluid p-1"
              alt="studia_alva"
              width={150}
              height={150}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              priority
              style={{ objectFit: "contain" }}
            />
            <p className="text-center text-white mt-3">Studia Alva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
