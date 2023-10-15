import React from "react";
import Image from "next/image";
import Link from "next/link";

const Crew = () => {
  const crew = [
    {
      id: 1,
      name: "Surya Permana",
      position: "CEO",
      profile_pic: "/images/ava/SuryaPermana.jpg",
    },
    {
      id: 2,
      name: "Indra Santosa",
      position: "CTO",
      profile_pic: "/images/ava/Indra_Santosa.jpg",
    },
    {
      id: 3,
      name: "Adli Ihsan H",
      position: "Senior Backend",
      profile_pic: "/images/ava/Adli_IhsanH.jpg",
    },
    {
      id: 4,
      name: "Naufal Luthfi S",
      position: "Fullstack Developer",
      profile_pic: "/images/ava/N_Luthfi.jpg",
    },
  ];

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <p className="text-title text-center fw-bold mt-5">
          Meet Our Exceptional Team
        </p>

        <h2 className="text-center text-white fw-bold mb-5">
          The Driving Force Behind Our Success
        </h2>
        <div className="row d-flex justify-content-center mb-5">
          {crew.map((item) => (
            <div
              className="col-lg-2 col-md-3 col-sm-6 col-6 mt-2 text-center mb-5"
              key={item.id}
            >
              <Image
                className="img-fluid rounded-circle"
                src={item.profile_pic}
                alt={item.name}
                width={200}
                height={200}
                sizes={
                  "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                }
                style={{ objectFit: "cover", resizeMode: "cover" }}
                priority
              />
              <h5 className="text-white mt-4 mb-0">{item.name}</h5>
              <h6 className="text-secondary mt-2">{item.position}</h6>
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
