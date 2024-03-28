import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const Bg = () => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={0.3}
        style={{ marginLeft: "90%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/1.png"
          width={350}
          height={350}
          alt="object1"
          className="object-fit-contain"
          loading="lazy"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/1.png"}
          style={{ filter: "blur(8px)", opacity: 0.3 }}
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
          alt="object2"
          loading="lazy"
          className="object-fit-contain"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/2.png"}
          style={{ filter: "blur(8px)", opacity: "0.3" }}
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
          alt="object3"
          loading="lazy"
          className="object-fit-contain"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/3.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
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
          alt="object4"
          className="object-fit-contain"
          loading="lazy"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/4.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
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
          alt="object5"
          loading="lazy"
          className="object-fit-contain"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/5.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={0.3}
        style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/6.png"
          width={300}
          height={300}
          alt="object6"
          loading="lazy"
          className="object-fit-contain"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/6.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
        speed={0.3}
        style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/7.png"
          width={300}
          height={300}
          alt="object7"
          loading="lazy"
          className="object-fit-contain"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/7.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        speed={0.3}
        style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/8.png"
          width={300}
          height={300}
          alt="object8"
          loading="lazy"
          className="object-fit-contain"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/8.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={7}
        speed={0.3}
        style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/9.png"
          width={300}
          height={300}
          alt="object9"
          className="object-fit-contain"
          loading="lazy"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/9.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={8}
        speed={0.3}
        style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/10.png"
          width={300}
          height={300}
          alt="object10"
          className="object-fit-contain"
          loading="lazy"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/10.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={9}
        speed={0.3}
        style={{ marginLeft: "88%", marginTop: "20%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/11.png"
          width={300}
          height={300}
          alt="object11"
          className="object-fit-contain"
          loading="lazy"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/11.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={10}
        speed={0.3}
        style={{ marginLeft: "-8%", marginTop: "30%", zIndex: -1 }}
      >
        <Image
          src="/images/obj/12.png"
          width={300}
          height={300}
          alt="object12"
          className="object-fit-contain"
          loading="lazy"
          sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
          placeholder="blur"
          blurDataURL={"/images/obj/12.png"}
          style={{
            transform: "rotate(350deg)",
            opacity: "0.3",
            filter: "blur(8px)",
          }}
        />
      </ParallaxLayer>
    </>
  );
};

export default Bg;
