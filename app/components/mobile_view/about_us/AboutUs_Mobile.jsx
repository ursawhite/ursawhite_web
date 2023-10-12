import React from "react";
import Image from "next/image";
import Footer from "../../../components/footer/footer";
import Approach from "../../../about_us/approach/approach";
import Crew from "../../../about_us/crew/crew";

function AboutUs_Mobile() {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <h1 className="text-title text-left display-1 text-white fw-bold mt-5 mb-5">
              Transforming Ideas into Digital Realities.
            </h1>
            <div className="col-lg-6">
              <p className=" text-white ">
                {` Specializes in crafting exceptional digital solutions
        tailored to your business needs. Our dedicated team prioritizes user
        experience, scalability, and effective user engagement strategies.
        Whether it's designing and developing cutting-edge web and mobile
        applications or devising innovative digital marketing campaigns, we've
        got you covered!`}
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-7 col-8">
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
        </div>
      </div>
      <Approach />

      <div className="container">
        <div className="row gx-2 mb-2 mt-2">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <Image
              className="img-fluid object-fit-contain"
              src="/images/work.jpg"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="/images/img2.png"
              alt="ourteam1"
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <Image
              className="img-fluid object-fit-contain"
              src="/images/work3.png"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="/images/work3.png"
              alt="ourteam2"
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 ">
            <Image
              className="img-fluid object-fit-contain"
              src="/images/work2.png"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="/images/work2.png"
              alt="ourteam3"
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <Crew />

      <div className="continer">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs_Mobile;
