import React from "react";
import Navbar from "../../navbar/navbar";
import BannerMobile from "./banner/Banner_Mobile";
import OurclientsMobile from "./our_clients/OurClient_Mobile";
import PortofolioMobile from "./portofolio/Portofolio_Mobile";
import FooterMobile from "./footer/Footer_Mobile";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "rgba(30,30,32,0.9)",
      }}
    >
      <Navbar />
      <BannerMobile />
      <OurclientsMobile />
      <PortofolioMobile />
      <FooterMobile />
    </div>
  );
}

export default Home;
