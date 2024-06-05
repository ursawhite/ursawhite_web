"use client";
import React, { useState, useEffect } from "react";
import Our_Work from "@/components/view/our-works/Our-Works";
import jsonData from "@/public/data/data.json";

const OurWorksPage = () => {
  const [wpData, setWpData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/fetchGSheets";
    try {
      fetch(apiUrl, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          setWpData(data.filter((item) => item.id !== null));
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
    <div
      style={{
        backgroundColor: "rgba(27,27,29,255)",
      }}
    >
      <Our_Work items={jsonData} wpData={wpData} isLoading={isLoading} />
    </div>
  );
};

export default OurWorksPage;
