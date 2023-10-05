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
            <div
              className="display-3 text-title text-center fw-bold "
              style={{
                background:
                  "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: "20%",
              }}
            >
              Our Works
            </div>
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
      <div className="container ">
        {data.map((ourWork) => (
          <div className="row " key={ourWork.id}>
            <Link
              className="text-decoration-none"
              href={{
                pathname: `/our_works/project`,
                query: { items: JSON.stringify(ourWork) },
              }}
            >
              <div className="col-lg-6 col-md-6 col-6 mt-5 mb-5">
                <Image
                  className="img-fluid mt-3 mb-3 "
                  src={ourWork.image}
                  width={300}
                  height={300}
                  loading="lazy"
                  alt={ourWork.title}
                  style={{
                    objectFit: "contain",
                    marginLeft: "50%",
                    marginRight: "50%",
                  }}
                />
              </div>
              <h1 className="text-white text-center mt-5">{ourWork.title}</h1>
            </Link>
          </div>
        ))}

        <Footer />
      </div>
    </>
  );
}

export default OurWorks;
