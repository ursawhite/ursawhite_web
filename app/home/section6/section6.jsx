import React from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/sprint.json";

function Section6() {
  const Router = useRouter();
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center gx-2">
        {data.map((item) => (
          <div className="col-lg-5 col-md-6 " key={item.id}>
            <div className="p-lg-5 p-lg-4">
              <h1 className="text-white fw-bold ">{item.title}</h1>
              <h4 className="text-white fw-bold ">{item.subtitle}</h4>
              <p className="text-white">{item.description}</p>
              <button
                className="button btn"
                onClick={() =>
                  Router.push(
                    `/home/${item.title.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <span>Learn More</span>
                <div className="bi bi-chevron-double-right ms-lg-1 me-lg-2"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6;
