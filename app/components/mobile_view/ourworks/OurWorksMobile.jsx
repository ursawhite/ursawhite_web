import React from "react";
import Image from "next/image";
import Footer from "../footer/Footer_Mobile";

function OurWorks() {
  const ourWorks = [
    {
      id: 1,
      title: "Nod Credit",
      src: "/images/project1.png",
      alt: "NodCredit",
      linkTo: "/ourworks/nod_credit",
    },
    {
      id: 2,
      title: "Feco Play",
      src: "/images/project2.png",
      alt: "FecoPlay",
      linkTo: "/ourworks/feco_play",
    },
    {
      id: 3,
      title: "HKGO",
      src: "/images/project3.png",
      alt: "HKGO",
      linkTo: "/ourworks/hkgo",
    },
    {
      id: 4,
      title: "JPCC",
      src: "/images/project4.png",
      alt: "JPCC",
      linkTo: "/ourworks/jpcc",
    },
    {
      id: 5,
      title: "Naked Press",
      src: "/images/project5.png",
      alt: "NakedPress",
      linkTo: "/ourworks/naked_press",
    },
    {
      id: 6,
      title: "BNI Direct",
      src: "/images/project6.png",
      alt: "BNIDirect",
      linkTo: "/ourworks/bni_direct",
    },
  ];
  return (
    <div className="container">
      <div
        className="row d-flex align-items-center"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="col " style={{ marginLeft: "10%", marginRight: "10%" }}>
          <h1
            className="text-title text-center text-white fw-bold "
            style={{ marginTop: "10%" }}
          >
            Our Works
          </h1>
          <h1 className="text-title text-left display-1 text-white fw-bold mt-5">
            We are a digital design agency
          </h1>
          <h6
            className="text-white display-6 text-right fw-bold "
            id="text-right-title"
          >
            Our clients varied from small startup to medium sized corporate
          </h6>
          <p className="text-right text-white ">
            As a Software House that designs and develops web apps, mobile apps,
            and PWAs since 2013, we have been trusted by our clients from
            America, Europe, Australia, and Asia.
          </p>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col">
          {ourWorks.map((ourWork) => (
            <div className="row" key={ourWork.id}>
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
                <Image
                  className="img-fluid"
                  src={ourWork.src}
                  width={300}
                  height={300}
                  alt={ourWork.title}
                  style={{
                    objectFit: "contain",
                    marginLeft: "10%",
                    marginRight: "10%",
                  }}
                />
                <h1 className="text-white text-center mt-5">{ourWork.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <div className="row " style={{ width: "100%", height: "100vh" }}>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <p className="text-white ">Go To Next Section</p>
          <button className="btn bg-none shadow-0 ">
            <span className="text-white fw-bold h4"> Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
