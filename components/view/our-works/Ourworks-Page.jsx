"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Our_Work from "@/components/view/our-works/Our-Works";
import OurWorksMobile from "@/components/view/MobileView/our-works/OurWorksMobile";
import jsonData from "@/public/data/data.json";

const OurWorksPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [wpData, setWpData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  useEffect(() => {
    setIsClient(true);
  }, []);
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
      {isDesktop && isClient && (
        <Our_Work items={jsonData} wpData={wpData} isLoading={isLoading} />
      )}
      {isTablet && isClient && (
        <Our_Work items={jsonData} wpData={wpData} isLoading={isLoading} />
      )}
      {isMobile && isClient && (
        <OurWorksMobile
          items={jsonData}
          wpData={wpData}
          isLoading={isLoading}
        />
      )}
      {isNotMobile && isClient && (
        <Our_Work items={jsonData} wpData={wpData} isLoading={isLoading} />
      )}
    </div>
  );
};

export default OurWorksPage;
