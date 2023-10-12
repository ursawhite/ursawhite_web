import React from "react";
import BannerMobile from "./banner/Banner_Mobile";
import OurclientsMobile from "./our_clients/OurClient_Mobile";
import PortofolioMobile from "./portofolio/Portofolio_Mobile";
import FooterMobile from "../footer/Footer_Mobile";
import Section6Mobile from "./section6/section6_mobile";

function Home(props) {
  const data = props.items;
  return (
    <div
      style={{
        backgroundColor: "rgba(30,30,32,0.9)",
      }}
    >
      <BannerMobile />
      <OurclientsMobile />
      <PortofolioMobile items={data} />
      <Section6Mobile />
      <FooterMobile />
    </div>
  );
}

export default Home;
