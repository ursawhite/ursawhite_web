import Image from "next/image";
import { useRouter } from "next/navigation";

function Portofolio_Mobile({ items }) {
  const Router = useRouter();
  return (
    <div className="container">
      <div className="row ">
        <div className="display-4 fw-bold text-title text-center mt-5 mb-5">
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
                  placeholder="blur"
                  blurDataURL={item.image_mobile}
                  sizes={
                    "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                  }
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="fw-bold" style={{ color: `${item.main_color}` }}>
                {item.title}
              </h1>
              <p className="text-secondary">{item.type}</p>
              <h5 className="subtitle text-white">{item.subject}</h5>
              <p className="text-white " style={{ fontSize: "12px" }}>
                {item.desc}
              </p>
              <ul className="list text-white">
                {item.tech.map((techItem, index) => (
                  <li key={index}>
                    <i className="item">{techItem}</i>
                  </li>
                ))}
              </ul>

              <button
                className="bg-transparent shadow-0 border-0 fw-bold"
                style={{ color: `${item.main_color}` }}
                onClick={() =>
                  Router.push(
                    `/our_works/${item.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`
                  )
                }
              >
                <span>Check Now</span>
              </button>
            </div>
          </div>
        ))}
        <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
          <button
            className="button mt-3 mb-3 p-2 rounded"
            onClick={() => Router.push("/our_works")}
          >
            <span>Show More</span>
            <div className="bi bi-chevron-double-right ms-1"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portofolio_Mobile;
