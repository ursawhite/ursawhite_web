import React from "react";
import Image from "next/image";
import Footer from "../../../footer/footer";
import { useRouter } from "next/navigation";
import OurStrengths from "../../our-works/Our-Strengths";
import Wordpress from "../../our-works/Wordpress";

function OurWorks({ items, wpData, isLoading }) {
  const Router = useRouter();

  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <h1 className="text-title text-left display-1 text-white fw-bold mt-5 mb-5">
              Explore Our Portfolio Innovation and Success
            </h1>
            <p className="text-white  mt-5">
              {`At Ursawhite, we take immense pride in showcasing our journey of
              turning ideas into digital realities. Our 'Our Works' page is a
              testament to the diverse range of projects we've undertaken and
              successfully brought to life.`}
            </p>
          </div>
        </div>
      </div>
      <OurStrengths />
      <div className="container mb-5">
        <p className="text-title text-start fw-bold">Digital Excellence</p>
        <h2 className="text-white text-start pb-5">
          Web and Mobile <br className="d-none d-md-block" />
          App Solutions
        </h2>
        <div className="row">
          {items.map((ourWork) => (
            <div
              className="col-md-4 col-12 d-flex justify-content-center flex-column align-items-center text-decoration-none bg-transparent border-0 shadow-0 mb-4"
              key={ourWork.id}
            >
              <div className="m-2">
                <Image
                  src={ourWork.image}
                  width={720}
                  height={480}
                  loading="lazy"
                  sizes={
                    "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                  }
                  placeholder="blur"
                  blurDataURL={ourWork.image}
                  alt={ourWork.title}
                  style={{
                    objectFit: "contain",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </div>
              <h4 className="text-white text-center">{ourWork.title}</h4>
              <p className="text-white text-center text-ellipsis">
                {ourWork.desc}
              </p>
              <button
                className="button p-2 rounded "
                onClick={() =>
                  Router.push(
                    `/our-works/${ourWork.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`
                  )
                }
              >
                <span>Learn More</span>
                <div className="bi bi-chevron-double-right ms-2 me-2"></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Wordpress wpData={wpData} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default OurWorks;
