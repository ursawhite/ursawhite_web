import React from "react";
import { Card } from "react-bootstrap";
export default function Project({ index, setModal, item }) {
  return (
    <div className="col-12 col-md-6 col-sm-6 col-lg-4" key={index}>
      <Card
        key={item.id}
        style={{ backgroundColor: "rgba(27,27,29,255)", border: "none" }}
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
            className="object-fit-contain"
          />
          <Card.Body>
            <Card.Title className="h3 text-white text-center">
              {item.name}
            </Card.Title>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
