import React from "react";
import Image from "next/image";

const Crew = () => {
  const crew = [
    {
      id: 1,
      name: "user1",
      position: "CEO",
      profile_pic: "/images/ava/ava1.jpg",
    },
    {
      id: 2,
      name: "user2",
      position: "COO",
      profile_pic: "/images/ava/ava2.jpg",
    },
    {
      id: 3,
      name: "user3",
      position: "CTO",
      profile_pic: "/images/ava/ava3.jpg",
    },
    {
      id: 4,
      name: "user4",
      position: "CFO",
      profile_pic: "/images/ava/ava4.jpg",
    },
  ];
  const title = {
    color: "rgba(169, 80, 210, 255)",
  };

  return (
    <div className="container">
      <div className="row">
        <p className="text-center fw-bold">THE LEADERSHIP CREW</p>

        <h1 className="text-center text-white fw-bold" style={title}>
          Meet The Shipmates
        </h1>
        {crew.map((item) => {
          return (
            <div className="col-lg-3 col-md-6 mt-5 text-center" key={item.id}>
              <Image
                className="img-fluid object-fit-contain"
                src={item.profile_pic}
                alt={item.name}
                width={200}
                height={200}
                sizes={
                  "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                }
                priority
              />
              <p className="text-white mt-3 mb-0">{item.position}</p>
              <p className="text-white">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
