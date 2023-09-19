"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Portofolio_Mobile() {
  const portfolio = [
    {
      name: "NodCredit",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      image: "/mockup1.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "payment API integration",
        "User dashboard",
        "settings",
        " referral link",
        "beautiful animation",
      ],
    },
    {
      name: "Feco Playbook",
      type: "Mobile App",
      subject: "P2P lending app, now live on Google Playstore.",
      image: "/mockup2.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "Flutter",
        "Google Maps API",
        "Directions API",
        " Firebase cloud messaging (FCM)",
        "Firebase Database",
        "Google Analytics",
        "QR/Bar code scanning",
      ],
    },
    {
      name: "HKGO",
      type: "Mobile App",
      subject:
        "HKGO is a location-based app (Google Maps) with flutter for a big insurance company in Hong Kong.",
      image: "/mockup3.png",
      desc: "Discover how we’ve helped David & Seb build Asia’s leading coffee chain – by designing the experience of tech-enabled innovations.",
      tech: [
        "payment API integration",
        "User dashboard",
        "Settings",
        "Referral link",
        "Beautiful animation",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row " style={{ marginLeft: "10%", marginRight: "10%" }}>
        <h1 className="text-white mt-5 mb-5">Our Works</h1>

        {portfolio.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mt-5 mb-5">
              <div>
                <Image
                  src={item.image}
                  width={300}
                  height={300}
                  layout="responsive"
                  alt="logo"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="title fw-bold text-white">{item.name}</h1>
              <h6 className="subtitle text-white">{item.subject}</h6>
              <p className="text-white ">{item.desc}</p>
              <ul className="list text-white">
                {item.tech.map((techItem, index) => (
                  <li key={index}>
                    <i className="item">{techItem}</i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <button className="btn btn-secondary mt-3 mb-3">Show More</button>
      </div>
    </div>
  );
}

export default Portofolio_Mobile;
