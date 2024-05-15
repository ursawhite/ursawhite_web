import React from "react";
// import data from "../../../../public/template.json";
import Card from "react-bootstrap/Card";
import Footer from "../../footer/footer";
import Link from "next/link";
const Template_Mobile = ({ isLoading, data }) => {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "auto", height: "100vh" }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-12 ">
            <div className="display-3 text-title text-left text-white fw-bold mt-5 mb-5">
              Crafting unique web designs to bring your vision to life.
            </div>

            <p className="text-white">
              Ursa White excels in creating unique web designs that embody your
              vision and engage users. Our designs are custom-made to align with
              your brand and business objectives, transforming your ideas into a
              digital reality.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-auto d-flex justify-content-center">
          {data.map((item) => (
            <Card
              style={{ width: "20rem" }}
              className="bg-transparent"
              key={item.id}
            >
              <Link href={item.link} className="text-decoration-none">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className=" object-fit-contain"
                />
                <Card.Body>
                  <Card.Title className="text-white text-center">
                    {item.name}
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Template_Mobile;
