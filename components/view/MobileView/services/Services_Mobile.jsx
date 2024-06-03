import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Marquee from "@/components/marquee/marquee_logo";
import Footer from "../../../footer/footer";
import Section5 from "@/components/view/services/Section5";
import data from "@/public/data/services.json";

function Services_Mobile() {
  const Router = useRouter();
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div className="display-3 text-title text-left text-white fw-bold mt-5 mb-5">
              Dedicated to transforming your concepts into tangible results
              through exceptional ease of use and excellence.
            </div>

            <p className=" text-white ">
              Ursa White is a team who Create comprehensive and impactful
              sofware solutions spanning user experience and technical
              funtionality.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="display-4 text-title fw-bold text-center mt-5">
          Services
        </div>
        {data.map((item, index) => (
          <div className="row " key={item.id}>
            <div className="col-lg-6 ">
              <div className="service d-flex justify-content-center">
                <Image
                  className="img-fluid"
                  src={item.image}
                  width={400}
                  height={400}
                  sizes={
                    "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                  }
                  style={{ objectFit: "contain" }}
                  alt={item.title}
                  placeholder="blur"
                  blurDataURL={item.image}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column ">
                <h4 className="text-white text-start fw-bold ">{item.title}</h4>
                <p className="text-white text-start ">{item.description}</p>
              </div>
              <button
                className="button btn shadow-lg border-1 border-light"
                onClick={() =>
                  Router.push(
                    `/services/${item.title.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <div>
                  <span className="">Read More</span>
                </div>
                <div>
                  <i className="bi bi-arrow-right me-2 ms-2 fw-bold"> </i>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="technologies mt-5">
          <h5 className="fw-bold text-title">Technologies Used</h5>
          <h1 className="text-white fw-bold">Technologies We Work With</h1>
          <p className="text-white ">
            As a premiere software development company, Innover helps to deliver
            scalable, complex, and future-ready solutions by utilising its
            unique frameworks & accelerators, broad range of programming
            languages, libraries and tools. Through Innover labs, we research,
            collaborate and co-innovate with our customers and technology
            partners to deliver path-breaking solutions with speed and
            precision.
          </p>
          <Marquee />
        </div>
      </div>
      <Section5 />

      <Footer />
    </>
  );
}

export default Services_Mobile;
