import React from "react";
import { Card } from "react-bootstrap";
export default function Project({ index, setModal, item }) {
  return (
    <div className="col-span-3 col-md-4 col-sm-6 col-12" key={index}>
      <Card
        key={item.id}
        style={{ backgroundColor: "rgba(27,27,29,255)" }}
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
      >
        <div
          onClick={() => window.open(item.link)}
          style={{ cursor: "pointer" }}
        >
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
        </div>
      </Card>
    </div>
  );
}
