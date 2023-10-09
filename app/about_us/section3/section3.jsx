import React from "react";
import Link from "next/link";

const Section3 = () => {
  const list = [
    {
      title: "User Engagement",
      desc: "Discover proven tactics and strategies to boost user engagement and satisfaction",
      list: [
        "Effective Onboarding",
        "Feedback and Personalization",
        "Community Building",
        "Communication",
        "Continuous Improvement",
      ],
      icon: "bi bi-people",
      iconColor: "rgb(250,74,174)",
      color: "rgb(248,216,236)",
    },
    {
      title: "Business Understanding",
      desc: "Discover proven tactics and strategies to boost user engagement and satisfaction",
      list: [
        "Market Research",
        "Customer Segmentation and Feedback",
        "Key Performance Indicators (KPIs)",
        "Strategic Planning and Innovation",
        "Continuous Monitoring and Improvement",
      ],
      icon: "bi bi-people",
      iconColor: "rgb(43,166,174)",
      color: "rgb(204,228,236)",
    },
    {
      title: "Expertise and Experience",
      desc: "Discover proven tactics and strategies to boost user engagement and satisfaction",
      list: [
        "Technical Proficiency",
        "Domain Knowledge",
        "Project Portfolio",
        "Mentorship and Collaboration",
        "Professional Networking",
      ],
      icon: "bi bi-people",
      iconColor: "rgb(45,121,213)",
      color: "rgb(224,236,252)",
    },
    {
      title: "Startup and Corporate Client",
      desc: "Discover proven tactics and strategies to boost user engagement and satisfaction",
      list: [
        "Customization vs. Scalability",
        "Budget Flexibility",
        "Speed vs. Stability",
        "Communication and Project Management",
        "Long-Term Relationship Building",
      ],
      icon: "bi bi-people",
      iconColor: "rgb(159,44,213)",
      color: "rgb(240,221,248)",
    },
  ];
  return (
    <div className="container gx-5 mt-5">
      <h3 className="text-center text-white fw-bold ">
        {`Ursawhite specializes in crafting exceptional digital solutions
        tailored to your business needs. Our dedicated team prioritizes user
        experience, scalability, and effective user engagement strategies.
        Whether it's designing and developing cutting-edge web and mobile
        applications or devising innovative digital marketing campaigns, we've
        got you covered!`}
      </h3>

      <div className="row g-2">
        {list.map((item, index) => (
          <div className="col-lg-3 col-md-6 mt-5 rounded shadow-lg" key={index}>
            <div className="p-4  bg-light ">
              <h3
                className="fw-bold mb-5 "
                style={{ height: "5vh", width: "auto" }}
              >
                {item.title}
              </h3>
              <h5 className="text-muted mb-5">{item.desc}</h5>
              {/* <ul className="list-unstyled mt-5">
                {item.list.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-check2-square"></i>
                    <span className="ms-3">{item}</span>
                  </li>
                ))}
              </ul> */}
              <Link
                href={{
                  pathname: `about_us/${item.title}`,
                  query: {
                    title: item.title,
                    desc: item.desc,
                    list: item.list,
                  },
                }}
                className="d-flex align-items-r text-decoration-none "
              >
                <div
                  className="btn p-2"
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                >
                  <span className="ms-2 h6">Show More!</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
