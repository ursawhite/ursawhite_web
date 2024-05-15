"use client";
import React, { useState, useEffect } from "react";
import Banner from "./components/banner/banner";
import Template from "./components/template/template";
import Footer from "../components/footer/footer";

const ServicePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/fetchGSheets";
    try {
      fetch(apiUrl, {
        headers: {
          "Cache-Control": "no-store",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.filter((item) => item.id !== null));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      <div style={{ minHeight: "100svh", overflow: "hidden" }}>
        <Banner />
        <Template isLoading={isLoading} data={data} />
      </div>
      <div
        style={{
          minHeight: "100svh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default ServicePage;
