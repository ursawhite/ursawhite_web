import React from "react";
import data from "../../../../public/template.json";
import Link from "next/link";

import Card from "react-bootstrap/Card";

const Template = () => {
  return (
    <div>
      <div className="row m-auto d-flex justify-content-center">
        {data.map((item) => (
          <Card
            style={{ width: "20rem" }}
            key={item.id}
            className="bg-transparent"
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
  );
};

export default Template;
