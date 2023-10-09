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
      <div className="row d-flex justify-content-center align-items-center">
        <p className="text-center fw-bold" style={title}>
          THE LEADERSHIP CREW
        </p>

        <h1 className="text-center text-white fw-bold">Meet The Shipmates</h1>
        <div className="col-lg-8 ">
          <h3 className=" text-white fw-bold m-3">Our Captain</h3>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 col-md-3">
            <Image
              className="img-fluid object-fit-contain"
              src="/images/ava/ava1.jpg"
              alt="lord"
              width={200}
              height={200}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              priority
            />
          </div>
          <div className="col-lg-6 col-md-8">
            <h2 className="text-white fw-bold">The Lord</h2>
            <h4 className="text-white">Founder</h4>
            <h5 className="text-white">{`"Operating a business is just like a painting on a canvas. Appealing to an audience with the right strategy outlines and marketing it with the right colours to make it shine."`}</h5>
            <p className="text-white">
              Experienced in culturally and geographically diverse markets, Moon
              is an entrepreneur who has helped startups and established
              corporations with new business ventures and global expansion, all
              across EMEA, APAC, and North America. She specializes in digital
              consulting and software development. With her exceptional
              knowledge on technology solutions and digital commercialization,
              she will be able to meticulously analyse your company’s needs and
              efficiently execute your digital transformation with us.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-sm-around">
          <div className="col-lg-8 ">
            <h3 className=" text-white fw-bold m-3">Crew Member</h3>
          </div>
        </div>

        {crew.map((item) => {
          return (
            <div className="col-lg-2 col-md-3 mt-2 text-center" key={item.id}>
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
      <div className="d-flex justify-content-center m-5">
        <button className="btn btn-primary p-2 ">
          <span className="ms-4 me-4">Join Us</span>
        </button>
      </div>
    </div>
  );
};

export default Crew;
