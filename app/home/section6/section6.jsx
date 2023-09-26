import React from "react";

function Section6() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 ">
          <p className="text-white "> FOR STARTUPS AND CORPORATION</p>
          <h1 className="text-white display-3 fw-bold ">
            Design Sprint Your Product Idea
          </h1>
          <p className="text-white ">
            {` Your Minimum Viable Product (Design) in 6 weeks. You can take
                  it to investors to drum up capital, take to another
                  development agency or decide to do in-house, think of the
                  outcome as a complete house design from an architect,
                  plumbing, electrical, and everything else design and planning.
                  No construction included yet, that's for another package!`}
          </p>
          <button className="btn btn-secondary ">{`Let's Explore`}</button>
        </div>
        <div className="col-lg-6 col-md-6">
          <p className="text-white "> FOR STARTUPS AND CORPORATION</p>
          <h1 className="text-white display-3 fw-bold ">Development Sprint</h1>
          <p className="text-white ">
            You can go fast or slow, you can let us develop your own designs or
            develop our own design from our “Design Sprint Package”
          </p>
          <button className="btn btn-secondary ">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Section6;
