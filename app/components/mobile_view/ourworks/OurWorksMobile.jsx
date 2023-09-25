import React from "react";
import Image from "next/image";
import Footer from "../footer/Footer_Mobile";
import Link from "next/link";

function OurWorks(props) {
  const data = props.items;
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <h1
              className="text-title text-center text-white fw-bold "
              style={{ marginTop: "20%" }}
            >
              Our Works
            </h1>
            <h1 className="text-title text-left display-1 text-white fw-bold mt-5 mb-5">
              We are a digital design agency
            </h1>
            <h6
              className="text-white display-6 text-right fw-bold "
              id="text-right-title"
            >
              We are a digital design agency
            </h6>
            <p className="text-right text-white ">
              As a Software House that designs and develops web apps, mobile
              apps, and PWAs since 2013, we have been trusted by our clients
              from America, Europe, Australia, and Asia.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {data.map((ourWork) => (
          <div className="row" key={ourWork.id}>
            <Link
              className="text-decoration-none"
              href={{
                pathname: `/ourworks/project`,
                query: { items: JSON.stringify(ourWork) },
              }}
            >
              <div className="col-lg-6 col-md-6 col-sm-4 col-xs-4 d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
                <Image
                  className="mt-3 mb-3"
                  src={ourWork.image}
                  width={300}
                  height={300}
                  loading="lazy"
                  alt={ourWork.title}
                  style={{
                    objectFit: "contain",
                    // width: "100%",
                    // height: "auto",
                  }}
                />
                <h1 className="text-white text-center mt-5">{ourWork.title}</h1>
              </div>
            </Link>
          </div>
        ))}

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
    </>
  );
}

export default OurWorks;
