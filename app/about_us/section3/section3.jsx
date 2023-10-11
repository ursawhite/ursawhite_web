import React from "react";
import Link from "next/link";
import styles from "./section3.module.scss";
import Image from "next/image";
import data from "../../../public/approach.json";

const Section3 = () => {
  return (
    <div className="container gx-5 mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6">
          <h1 className="text-white fw-bold ">URSAWHITE </h1>
          <h5 className="text-white fw-bold ">
            {`specializes in crafting exceptional digital solutions
        tailored to your business needs. Our dedicated team prioritizes user
        experience, scalability, and effective user engagement strategies.
        Whether it's designing and developing cutting-edge web and mobile
        applications or devising innovative digital marketing campaigns, we've
        got you covered!`}
          </h5>
        </div>
        <div className="col-lg-6 col-md-6">
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

      <div className="row d-flex justify-content-center">
        <div className="col-lg-12 d-flex">
          <div className="row">
            <h2 className="text-white text-center fw-bold ">Our Approach</h2>
            {data.map((item, index) => (
              <Link
                href={`/about_us/${item.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className={`col-lg-3 col-md-6 mt-5 shadow-lg ${styles.box}`}
                key={index}
              >
                <div className="p-4 ">
                  <h3
                    className="fw-bold mb-5 "
                    style={{ height: "10vh", width: "auto" }}
                  >
                    {item.title}
                  </h3>
                  {/* <h5 className="text-muted mb-5">{item.desc}</h5> */}
                  <ul className="list-unstyled mt-5">
                    {item.list.map((item, index) => (
                      <li key={index}>
                        <i className="bi bi-check2-square"></i>
                        <span className="ms-3">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div
                  className="btn p-2"
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                >
                  <span className="ms-2 h6">Show More!</span>
                </div> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
