"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/approach.json";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import MaskText from "../../components/mask/mask";
import { motion } from "framer-motion";

const Page = ({ title }) => {
  const router = useRouter();
  const dataNow = data.filter((item) => {
    if (item.title) {
      return item.title.toLowerCase() === title.replace(/_/g, " ");
    }
    return false;
  });

  let phrases = [];
  phrases.push(dataNow[0]?.title);

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "auto" }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-6 col-sm-8 col-8 order-lg-2 order-md-2 ">
            <Image
              className="img-fluid object-fit-contain mb-5"
              src={dataNow[0]?.image}
              width={300}
              height={300}
              alt={dataNow[0]?.alt}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              placeholder="blur"
              blurDataURL={dataNow[0]?.image}
              priority
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="col-lg-6 col-md-6 d-flex flex-column">
            <MaskText text={phrases} />
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {dataNow[0]?.description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <p className="text-title text-center fw-bold">Approach</p>
          <h2 className="text-white fw-bold text-center mb-5">
            {dataNow[0]?.title}
          </h2>
          {Object.entries(dataNow[0]?.list[0]).map(([key, value], index) => (
            <div
              className="col-lg-4 col-md-6 p-2 d-flex justify-content-center"
              key={index}
            >
              <div className="box text-white p-5">
                <h5 className="fw-bold">{key}</h5>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "auto", marginTop: "50vh" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Page;
