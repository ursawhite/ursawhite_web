import React from "react";
import { useRouter } from "next/navigation";
import data from "../../../../../public/sprint.json";

const Sprint = () => {
  const Router = useRouter();
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center gx-2">
        {data.map((item) => (
          <div className="col-12 mt-5 mb-5 " key={item.id}>
            <h1 className="text-title fw-bold ">{item.title}</h1>
            <h4 className="text-white fw-bold ">{item.subtitle}</h4>
            <p className="text-white">{item.description}</p>
            <button
              className="button p-2 rounded ms-lg-5"
              onClick={() =>
                Router.push(
                  `/home/${item.title.replace(/\s+/g, "-").toLowerCase()}`
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
  );
};

export default Sprint;
