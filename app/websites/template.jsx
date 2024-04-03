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
    setIsLoading(true);
    try {
      fetch(apiUrl, {
        headers: {
          "Cache-Control": "no-store",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
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
      <div style={{ minHeight: "100svh", width: "100%", overflow: "hidden" }}>
        <Banner />
        <Template isLoading={isLoading} data={data} />

        {/* <div
        style={{
          backgroundColor: "rgba(27,27,29,255)",
          overflowY: "auto",
        }}
      >
        {isDesktop && isClient && (
          <Template isLoading={isLoading} data={data} />
        )}
        {isTablet && isClient && <Template isLoading={isLoading} data={data} />}
        {isMobile && isClient && (
          <TemplateMobile isLoading={isLoading} data={data} />
        )}
        {isNotMobile && isClient && (
          <Template isLoading={isLoading} data={data} />
        )}
      </div> */}
      </div>
      <div
        style={{
          minHeight: "100svh",
          width: "100%",
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
