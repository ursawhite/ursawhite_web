import MaskText from "../../../components/mask/mask";

const Banner = () => {
  const phrases = [
    "Crafting unique web designs",
    "to bring your vision to life.",
  ];

  return (
    <div className="container text-white text-center fw-bold">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-12 col-md-12 ">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: "20vw",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <MaskText text={phrases} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
