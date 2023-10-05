import React from "react";

const Section3 = () => {
  return (
    <div className="container">
      <h3 className="text-center text-white fw-bold">
        {`We're a team of strategists, designers, developers, storytellers,
  workshoppers and Mario Kart racers.`}
      </h3>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-md-6 mt-5 text-center">
          <h5 className="text-white">WORKSHOPS</h5>
          <p className="text-white"> Design Sprints </p>
          <p className="text-white"> Lightning Decision Jams</p>
          <p className="text-white"> Brand Sprints </p>
        </div>
        <div className="col-lg-4 col-md-6 mt-5 text-center">
          <h5 className="text-white">PRODUCT DESIGN</h5>
          <p className="text-white"> User Experience </p>
          <p className="text-white"> User Interface </p>
          <p className="text-white"> Illustration </p>
          <p className="text-white"> Motion Graphics </p>
          <p className="text-white"> Branding </p>
        </div>
        <div className="col-lg-4 col-md-6 mt-5 text-center">
          <h5 className="text-white">DEVELOPMENT</h5>
          <p className="text-white"> Frontend Development</p>
          <p className="text-white"> Backend Development </p>
          <p className="text-white"> Mobile Development </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
