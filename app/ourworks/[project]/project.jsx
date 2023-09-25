import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function Project() {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const items = searchParams.get("items");
  const project = JSON.parse(items);
  return (
    <Parallax
      ref={ref}
      pages={4}
      style={{ backgroundColor: "rgba(27,27,29,255)" }}
    >
      <ParallaxLayer
        offset={0}
        speed={0.3}
        style={{
          backgroundColor: ` ${project.main_color}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="display-2 text-center text-white fw-bold">
          {project.title}
        </div>

        <Image
          src={project.img_back[0]}
          alt={project.title}
          width={500}
          height={500}
          style={{
            objectFit: "contain",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.7}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={300}
          style={{
            objectFit: "contain",

            marginTop: "15%",
          }}
        />
        <Image
          src={project.img_back[1]}
          alt={project.title}
          width={400}
          height={400}
          style={{
            objectFit: "contain",

            marginTop: "15%",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-6">
              <div className="display-2 text-left text-white fw-bold">
                {project.title}
              </div>
              <h5 className="text-white mt-4">{project.subject}</h5>
              <p className="text-white mt-4">{project.desc}</p>
            </div>
            <div className="col-lg-4">
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
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <div className="col-lg-12">
              <h3 className="text-white text-center mb-5">Technologies</h3>
              {project.tech.map((item, index) => (
                <div
                  className="d-flex align-items-center border border-3 border-start-0 border-end-0 "
                  key={index + 1}
                >
                  <i
                    className="bi bi-hash mt-3 mb-3"
                    style={{ color: "white" }}
                  ></i>
                  <span className="h5 text-white text-center mt-3 mb-3 ms-3">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/galery-hkgo-1.png"
          alt="NodCredit"
          width={500}
          height={500}
        />
        <Image
          src="/images/galery-hkgo-2.png"
          alt="NodCredit"
          width={500}
          height={500}
        />
        <Image
          src="/images/galery-hkgo-3.png"
          alt="NodCredit"
          width={500}
          height={500}
        />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Project;
