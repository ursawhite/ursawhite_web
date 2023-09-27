import Image from "next/image";
import Link from "next/link";

function Portofolio_Mobile({ items }) {
  return (
    <div className="container">
      <div className="row ">
        <div
          className="display-4 fw-bold text-white text-center mt-5 mb-5"
          style={{
            background:
              "linear-gradient(90deg, rgb(230, 212, 239) 0%, rgb(92, 4, 133) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Works
        </div>

        {items.slice(0, 3).map((item, index) => (
          <div className="row " key={index}>
            <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center mt-5 mb-5">
              <div className="col d-flex justify-content-center align-items-center">
                <Image
                  className="img-fluid"
                  src={item.image_mobile}
                  width={300}
                  height={300}
                  alt="logo"
                  style={{
                    objectFit: "contain",
                    // width: "100%",
                    // height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="title fw-bold text-white">{item.name}</h1>
              <h6 className="subtitle text-white">{item.subject}</h6>
              <p className="text-white ">{item.desc}</p>
              <ul className="list text-white">
                {item.tech.map((techItem, index) => (
                  <li key={index}>
                    <i className="item">{techItem}</i>
                  </li>
                ))}
              </ul>
              <div className="btn ">
                <Link
                  className="text-decoration-none fw-bold"
                  href={{
                    pathname: "/ourworks/project",
                    query: { items: JSON.stringify(item) },
                  }}
                >
                  <span>Check Now</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 d-flex justify-content-center align-items-center">
          <button className="btn btn-secondary mt-3 mb-3">
            <Link className="text-decoration-none text-white" href="/ourworks">
              Show More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portofolio_Mobile;
