import React from "react";
import Image from "next/image";
import Link from "next/link";

const Crew = () => {
  const crew = [
    {
      id: 1,
      name: "Ardian Kristya",
      position: "Member",
      profile_pic: "/images/ava/ArdianKristya.jpg",
    },
    {
      id: 2,
      name: "Sandi M.Rizatul",
      position: "Member",
      profile_pic: "/images/ava/SANDIMUHAMADRIZALUL.jpg",
    },
    {
      id: 3,
      name: "Subiyantoro S",
      position: "Member",
      profile_pic: "/images/ava/SubiyantoroS.jpg",
    },
    {
      id: 4,
      name: "Sulthan Qintara",
      position: "Member",
      profile_pic: "/images/ava/SulthanQintara.jpg",
    },
  ];
  const title = {
    color: "rgba(169, 80, 210, 255)",
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <p className="text-center fw-bold mt-5" style={title}>
          THE LEADERSHIP CREW
        </p>

        <h1 className="text-center text-white fw-bold">Meet The Shipmates</h1>
        <div className="col-lg-8 ">
          <h3 className=" text-white fw-bold m-4">Our Captain</h3>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 col-md-3 col-sm-4 col ">
            <Image
              className="img-fluid object-fit-contain rounded-circle"
              src="/images/ava/SuryaPermana.jpg"
              alt="lord"
              width={200}
              height={200}
              sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
              priority
            />
          </div>
          <div className="col-lg-6 col-md-8 col-sm-8 ">
            <h2 className="text-white fw-bold">Surya Permana</h2>
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
        <div className="row d-flex justify-content-lg-center">
          <div className="col-lg-8 ">
            <h3 className=" text-white fw-bold m-3">Crew Member</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-lg-center">
          {crew.map((item) => (
            <div
              className="col-lg-2 col-md-3 col-sm-4 mt-2 text-center"
              key={item.id}
            >
              <Image
                className="img-fluid object-fit-contain rounded-circle"
                src={item.profile_pic}
                alt={item.name}
                width={200}
                height={200}
                sizes={
                  "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                }
                priority
              />
              <p className="text-white mt-3 mb-0">{item.name}</p>
              <p className="text-white">{item.position}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="d-flex justify-content-center m-5">
        <Link className="btn btn-primary p-2 " href="/contact_us">
          <span className="ms-4 me-4">Join Us</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Crew;
