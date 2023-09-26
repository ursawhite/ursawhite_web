import React from "react";
import Image from "next/image";
import Footer from "../../components/footer/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Test_SVG from "../../components/test_svg/test_svg";
import Link from "next/link";

function Our_Works(props) {
  const data = props.items;

  return (
    <>
      <Parallax pages={5} offset={0} style={{ backgroundColor: "black" }}>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{ marginLeft: "90%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/1.png"
            width={350}
            height={350}
            alt="logo"
            style={{ objectFit: "contain" }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ marginLeft: "-5%", marginTop: "-10%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/2.png"
            width={250}
            height={250}
            alt="logo"
            style={{ objectFit: "contain" }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ marginLeft: "90%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/3.png"
            width={300}
            height={300}
            alt="logo"
            style={{ objectFit: "contain", transform: "rotate(350deg)" }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/4.png"
            width={300}
            height={300}
            alt="logo"
            style={{ objectFit: "contain", transform: "rotate(350deg)" }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.3}
          style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
        >
          <Image
            src="/images/obj/5.png"
            width={300}
            height={300}
            alt="logo"
            style={{ objectFit: "contain", transform: "rotate(350deg)" }}
            priority
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div className="row">
              <h1
                className="text-center text-white fw-bold m-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Works
              </h1>
              <div className="col-lg-6 col-md-6 border border-5 border-end-0 border-bottom-0">
                <p
                  className="text-left fw-bolder ms-5 mt-5"
                  style={{ color: "rgba(169,80,210,255)" }}
                >
                  Our clients varied from small startup to medium sized
                  corporate
                </p>
                <h1 className="text-left display-4 text-white fw-bold ms-5">
                  We are a digital design agency
                </h1>
              </div>
              <div className="col-lg-6 col-md-6 border border-5 border-start-0 border-top-0 ">
                <h3
                  className="display-6 text-right fw-bold me-5 mt-5 ms-5"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(182, 117, 214, 1) 0%, rgba(79, 66, 152, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Our clients varied from small startup to medium sized
                  corporate
                </h3>
                <h6 className="text-right text-white me-5 mb-5 ms-5 mt-5">
                  As a Software House that designs and develops web apps, mobile
                  apps, and PWAs since 2013, we have been trusted by our clients
                  from America, Europe, Australia, and Asia.
                </h6>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ marginTop: "20%", zIndex: -2 }}
        >
          <Test_SVG item="Project" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div className="row ">
              {data.slice(0, 2).map((item, index) => (
                <div
                  className="col-lg-6 col-md-6  d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <Link
                    className="text-decoration-none"
                    href={{
                      pathname: `/ourworks/project`,
                      query: { items: JSON.stringify(item) },
                    }}
                  >
                    <div className="col-lg-6 col-md-6 ">
                      <Image
                        className="img-fluid "
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        style={{
                          objectFit: "contain",
                          marginRight: "50%",
                          marginLeft: "50%",
                        }}
                      />
                    </div>

                    <h1 className="text-white text-center mt-5">
                      {item.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container">
            <div className="row ">
              {data.slice(2, 4).map((item, index) => (
                <div
                  className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <Link
                    className="text-decoration-none"
                    href={{
                      pathname: `/ourworks/project`,
                      query: { items: JSON.stringify(item) },
                    }}
                  >
                    <div className="col-lg-6 col-md-6 ">
                      <Image
                        className="img-fluid "
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        style={{
                          objectFit: "contain",
                          marginRight: "50%",
                          marginLeft: "50%",
                        }}
                      />
                    </div>
                    <h1 className="text-white text-center mt-5">
                      {item.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <div className="container" style={{}}>
            <div className="row ">
              {data.slice(4, 6).map((item, index) => (
                <div
                  className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <Link
                    className="text-decoration-none"
                    href={{
                      pathname: `/ourworks/project`,
                      query: { items: JSON.stringify(item) },
                    }}
                  >
                    <div className="col-lg-6 col-md-6 ">
                      <Image
                        className="img-fluid "
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        style={{
                          objectFit: "contain",
                          marginRight: "50%",
                          marginLeft: "50%",
                        }}
                      />
                    </div>
                    <h1 className="text-white text-center mt-5">
                      {item.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(30,30,32,0.9 )",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Our_Works;
