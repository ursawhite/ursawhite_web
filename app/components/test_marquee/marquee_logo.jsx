import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeLogo() {
  const image = [
    {
      src: "/images/logo/bootstrap.png",
      alt: "bootstrap Logo",
    },
    {
      src: "/images/logo/css.png",
      alt: "css",
    },
    {
      src: "/images/logo/expressjs.png",
      alt: "expressjs",
    },
    {
      src: "/images/logo/firebase.png",
      alt: "firebase",
    },
    {
      src: "/images/logo/html.png",
      alt: "html",
    },
    {
      src: "/images/logo/js.png",
      alt: "js",
    },
    {
      src: "/images/logo/materialui.png",
      alt: "materialui",
    },
    {
      src: "/images/logo/mongodb.png",
      alt: "mongodb",
    },
    {
      src: "/images/logo/mysql.png",
      alt: "mysql",
    },
    {
      src: "/images/logo/nextjs.png",
      alt: "nextjs",
    },
    {
      src: "/images/logo/nodejs.png",
      alt: "nodejs",
    },
    {
      src: "/images/logo/postgresql.png",
      alt: "postgresql",
    },
    {
      src: "/images/logo/react.png",
      alt: "react",
    },
    {
      src: "/images/logo/tailwind.png",
      alt: "tailwind",
    },
    {
      src: "/images/logo/typescript.png",
      alt: "typescript",
    },
  ];
  return (
    <div className="container">
      <Marquee
        speed={100}
        autoFill={true}
        gradient={true}
        gradientColor="rgba(27, 27, 29)"
        gradientWidth="10vh"
        pauseOnHover={true}
      >
        {image.slice(0, 8).map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width={100}
            height={100}
            alt={item.alt}
            className="img-fluid m-3"
          />
        ))}
      </Marquee>
      <Marquee
        speed={100}
        autoFill={true}
        gradient={true}
        gradientColor="rgba(27, 27, 29)"
        gradientWidth="10vh"
        direction={"right"}
        pauseOnHover={true}
      >
        {image.slice(8, 15).map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width={100}
            height={100}
            alt={item.alt}
            className="img-fluid m-3"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeLogo;
