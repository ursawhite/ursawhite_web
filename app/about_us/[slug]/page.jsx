"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/approach.json";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import MaskText from "../../components/mask/mask";
import { motion } from "framer-motion";

const Page = ({ params }) => {
  const ref = useRef(null);
  const router = useRouter();
  // console.log(params.slug.replace(/-/g, " "));
  const dataNow = data.filter((item) => {
    if (item.title) {
      return item.title.toLowerCase() === params.slug.replace(/_/g, " ");
    }
    return false;
  });
  let phrases = [];
  phrases.push(dataNow[0].title);

  return (
    <>
      <div
        className="container d-flex align-items-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-5 order-lg-2">
            <Image
              className="img-fluid object-fit-contain"
              src={dataNow[0].image}
              width={500}
              height={500}
              alt={dataNow[0].alt}
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="col-lg-6 col-md-6 order-lg-1  d-flex flex-column justify-content-center">
            <div className="display-3 fw-bold text-white ">
              <MaskText text={phrases} />
            </div>
            <motion.h4
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {dataNow[0].description}
            </motion.h4>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row gx-2">
          {Object.entries(dataNow[0].list[0]).map(([key, value], index) => (
            <div
              className={`col-lg-4 d-flex col-md-6 mb-2 d-flex `}
              key={index}
            >
              <div
                className="text-white p-5"
                style={{
                  background:
                    "radial-gradient(at center, rgba(155, 89, 182, 0.3), rgba(53, 57, 59, 0.3))",
                }}
              >
                <h5 className="fw-bold">{key}</h5>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex align-items-end">
        <Footer />
      </div>
    </>
  );
};

export default Page;
