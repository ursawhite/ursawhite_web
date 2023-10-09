"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = (props) => {
  const router = useRouter();
  const list = props.searchParams.list;
  console.log(props.searchParams.list);
  return (
    <>
      <div
        className="container d-flex align-items-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row">
          <div className="col-lg-8 ">
            <h1 className="text-white">{props.searchParams.title}</h1>
            <h4 className="text-white">{props.searchParams.desc}</h4>
            {list.map((item, index) => (
              <div key={index}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
