import MaskText from "../../../components/mask/mask";
import Test_svg from "../../../components/svg/svg";

const Banner = () => {
  const phrases = [
    "Crafting unique web designs",
    "to bring your vision to life.",
  ];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100svh" }}>
      <div className="container text-white text-center fw-bold ">
        <div
          className="row d-flex align-items-center justify-content-center"
          style={{ minHeight: "100svh" }}
        >
          <div className="col-lg-12 col-md-12">
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
        <div
          className="d-none d-md-block"
          style={{
            position: "absolute",
            marginTop: "20%",
            width: "100%",
            objectFit: "contain",
            zIndex: "-2",
            padding: "0",
            maxWidth: "none",
            top: "0",
            left: "0",
          }}
        >
          <Test_svg item="Websites" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
