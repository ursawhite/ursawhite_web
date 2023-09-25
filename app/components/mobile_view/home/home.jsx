import React from "react";
import Navbar from "../../header/navbar";
import BannerMobile from "./banner/Banner_Mobile";
import OurclientsMobile from "./our_clients/OurClient_Mobile";
import PortofolioMobile from "./portofolio/Portofolio_Mobile";
import FooterMobile from "../footer/Footer_Mobile";

function Home(props) {
  const data = props.items;
  return (
    <div
      style={{
        backgroundColor: "rgba(30,30,32,0.9)",
      }}
    >
      <Navbar />
      <BannerMobile />
      <OurclientsMobile />
      <PortofolioMobile items={data} />
      <FooterMobile />
      <div className="row " style={{ width: "100%", height: "100vh" }}>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <p className="text-white ">Go To Next Section</p>
          <button className="btn bg-none shadow-0 ">
            <span className="text-white fw-bold h4"> Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
