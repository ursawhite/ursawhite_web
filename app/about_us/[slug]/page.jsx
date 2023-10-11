"use client";
import React from "react";
import { useRouter } from "next/navigation";
import data from "../../../public/about.json";

const Page = ({ params }) => {
  const router = useRouter();

  // const titleNow = title.replace(/%20/g, " ");

  console.log(params);
  return (
    <>
      {/* <div
        className="container d-flex align-items-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row">
          <div className="col-lg-8 ">
            <h1 className="text-white">{searchParams.title}</h1>
            <h4 className="text-white">{searchParams.description}</h4>

            {Object.keys(searchParams.list[0]).map((key, index) => (
              <div key={index}>
                <h5 className="text-white">
                  {key}: {searchParams.list[0][key]}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Page;
