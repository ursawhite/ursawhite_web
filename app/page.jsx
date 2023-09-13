import "/app/styles/section.css";
// import SmoothScroll from "./components/smoothscroll/page";
// import Banner from "./components/home/banner";
// import Ourclients from "./components/home/ourclients";
// import Services from "./components/home/services";
// import Portofolio from "./components/home/portofolio/portofolio";
// import Porto1 from "./components/home/portofolio/porto1";
// import Porto2 from "./components/home/portofolio/porto2";
// import Porto3 from "./components/home/portofolio/porto3";
import Para from "./components/home/parallaxlayer";

function Section() {
  return (
    <>
      <Para />
    </>
    // <div className="overflow-hidden">
    //   <div
    //     className="smooth"
    //     style={{
    //       // background: "black",
    //       background: "rgb(65,7,96)",
    //       background:
    //         "radial-gradient(circle, rgba(65,7,96,1) 0%, rgba(5,12,55,1) 100%)",
    //     }}
    //   >
    //     <section
    //       id="home"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(30,30,32,0.8)",
    //       }}
    //     >
    //       <Banner />
    //     </section>
    //     <section
    //       id="about"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(30,30,32,0.8)",
    //       }}
    //     >
    //       <Ourclients />
    //     </section>
    //     {/* <section id="portfolio">
    //       <Portofolio />
    //     </section> */}
    //     <section
    //       id="portfolio"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(30,30,32,0.8)",
    //       }}
    //     >
    //       <Porto1 />
    //     </section>
    //     <section
    //       id="portfolio"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(30,30,32,0.8)",
    //       }}
    //     >
    //       <Porto2 />
    //     </section>
    //     <section
    //       id="portfolio"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(30,30,32,0.8)",
    //       }}
    //     >
    //       <Porto3 />
    //     </section>
    //     <section
    //       id="contact"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(30,30,32,0.8)",
    //       }}
    //     >
    //       <Services />
    //     </section>
    //   </div>
    // </div>
  );
}

export default Section;
