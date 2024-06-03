import React from "react";
import Image from "next/image";
import Footer from "../../../footer/footer";
import { useRouter } from "next/navigation";

function OurWorks(props) {
  const Router = useRouter();
  const data = props.items;
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
      <div className="container mb-5">
        <div className="row">
          {data.map((ourWork) => (
            <button
              className="col-md-4 col-6 text-decoration-none bg-transparent border-0 shadow-0"
              onClick={() =>
                Router.push(
                  `/our_works/${ourWork.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`
                )
              }
              key={ourWork.id}
            >
              <div className="m-2">
                <Image
                  className="img-fluid "
                  src={ourWork.image}
                  width={300}
                  height={300}
                  loading="lazy"
                  sizes={
                    "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                  }
                  placeholder="blur"
                  blurDataURL={ourWork.image}
                  alt={ourWork.title}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <h4 className="text-white text-center">{ourWork.title}</h4>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurWorks;
