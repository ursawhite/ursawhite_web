import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import data from "../../../public/data.json";
import Footer from "../../components/footer/footer";

function ProjectMobile({ title }) {
  const router = useRouter();
  const project = data.find(
    (item) => item.title.toLowerCase() === title.replace(/-/g, " ")
  );

  return (
    <>
      <div
        className="row"
        style={{
          backgroundColor: `${project.main_color}`,
          width: "100%",
          height: "100vh",
          margin: "0px",
          padding: "0px",
        }}
      >
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <div className="display-1 text-white fw-bold">{project.title}</div>
          <Image
            src={project.image_mobile}
            alt={project.title}
            width={300}
            height={300}
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            placeholder="blur"
            blurDataURL={project.image_mobile}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="container ">
        <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div className="col">
            <h1 className="text-white fw-bold">{project.title}</h1>
            <h4 className="text-white fw-bold">{project.subject}</h4>
            <p className="text-white">{project.desc}</p>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <div className="col-xs-6">
              <h6 className="text-left text-secondary fw-bold mt-4">Client</h6>
              <h6 className="text-left text-white fw-bold mt-4">
                {project.client}
              </h6>
              <h6 className="text-left text-secondary fw-bold mt-4">
                Location
              </h6>
              <h6 className="text-left text-white fw-bold mt-4">
                {project.location}
              </h6>
            </div>
            <div className="col-xs-6">
              <h6 className="text-left text-secondary fw-bold mt-4">Year</h6>
              <h6 className="text-left text-white fw-bold mt-4">
                {project.year}
              </h6>
              <h6 className="text-left text-secondary fw-bold mt-4">
                Services
              </h6>
              <h6 className="text-left text-white fw-bold mt-4">
                {project.type}
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row" style={{ marginTop: "20%", marginBottom: "20%" }}>
          <div className="col-lg-12">
            <h3 className="text-white text-center mb-5">Technologies</h3>
            {project.tech.map((item, index) => (
              <div
                className="d-flex align-items-center border border-3 border-start-0 border-end-0 border-bottom-0"
                key={index + 1}
              >
                <i
                  className="bi bi-hash mt-3 mb-3"
                  style={{ color: "white" }}
                ></i>
                <span
                  className="h5 text-white text-center mt-3 mb-3 ms-3"
                  style={{ textTransform: "capitalize" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          {project.img_details.map((item, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-6 mt-5 mb-5 d-flex justify-content-center"
              key={index + 1}
            >
              <Image
                className="img-fluid"
                src={item}
                alt={project.title}
                width={500}
                height={500}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
                sizes={
                  "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                }
                placeholder="blur"
                blurDataURL={item}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectMobile;
