/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../styles/services.css";

function Services() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-white m-5">Services</h1>
        <ul className="cards">
          <li>
            <a href="#" className="card">
              <img
                decoding="async"
                src="/1.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <div className="card__header-text">
                    <h3 className="card__title">Web Solution</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="card">
              <img
                decoding="async"
                src="/2.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <div className="card__header-text">
                    <h3 className="card__title">Dekstop Solution</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="card">
              <img
                decoding="async"
                src="/3.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <div className="card__header-text">
                    <h3 className="card__title">Mobile Solution</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Services;
