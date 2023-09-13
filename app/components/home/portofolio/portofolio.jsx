"use client";
import React from "react";
import Image from "next/image";

function Portfolio() {
  const portfolio = [
    {
      name: "Portfolio 1",
      image: "/mockup1.png",
      desc: "P2P lending app, now live on Google Playstore.",
      tech: [
        "payment API integration",
        "User dashboard",
        "settings",
        " referral link",
        "beautiful animation",
      ],
    },
    {
      name: "Portfolio 2",
      image: "/mockup2.png",
      desc: "HKGO is a location-based app (Google Maps) with flutter for a big insurance company in Hong Kong.",
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
      name: "Portfolio 3",
      image: "/mockup3.png",
      desc: "P2P lending app, now live on Google Playstore.",
      tech: [
        "payment API integration",
        "User dashboard",
        "settings",
        " referral link",
        "beautiful animation",
      ],
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row align-items-center m-5">
          <div className="col">
            <h1 className="text-center text-white m-5">Portfolio</h1>
          </div>

          {portfolio.map((item, index) => (
            <div
              className={`item row d-flex justify-content-center m-5 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
              key={index}
            >
              <div className="col-lg-6 order-lg-2">
                <div>
                  <Image
                    className="logo-logo align-content-center"
                    src={item.image}
                    width={500}
                    height={400}
                    alt="logo"
                    sizes="(max-width: 500px) 85vw, (max-width: 1000px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <h1 className="title fw-bold m-5">{item.name}</h1>
                <h5 className="subtitle m-5">{item.desc}</h5>
                <ul className="list m-5">
                  {item.tech.map((techItem, index) => (
                    <li key={index}>
                      <i className="item">{techItem}</i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
