import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "./bg.module.css";

const Bg = () => {
  return (
    <>
      <ParallaxLayer offset={0} speed={0.3} className={styles.layer_object1}>
        <Image
          src="/images/obj/1.png"
          width={350}
          height={350}
          alt="object1"
          className={styles.object}
          priority
          style={{ transform: "blur(100px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} className={styles.layer_object2}>
        <Image
          src="/images/obj/2.png"
          width={250}
          height={250}
          alt="object2"
          className={styles.object}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} className={styles.layer_object3}>
        <Image
          src="/images/obj/3.png"
          width={300}
          height={300}
          alt="object3"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.3} className={styles.layer_object4}>
        <Image
          src="/images/obj/4.png"
          width={300}
          height={300}
          alt="object4"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.3} className={styles.layer_object5}>
        <Image
          src="/images/obj/5.png"
          width={300}
          height={300}
          alt="object5"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.3} className={styles.layer_object4}>
        <Image
          src="/images/obj/6.png"
          width={300}
          height={300}
          alt="object6"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.3} className={styles.layer_object5}>
        <Image
          src="/images/obj/7.png"
          width={300}
          height={300}
          alt="object7"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={6} speed={0.3} className={styles.layer_object4}>
        <Image
          src="/images/obj/8.png"
          width={300}
          height={300}
          alt="object8"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={7} speed={0.3} className={styles.layer_object5}>
        <Image
          src="/images/obj/9.png"
          width={300}
          height={300}
          alt="object9"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={8} speed={0.3} className={styles.layer_object4}>
        <Image
          src="/images/obj/10.png"
          width={300}
          height={300}
          alt="object10"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={9} speed={0.3} className={styles.layer_object5}>
        <Image
          src="/images/obj/11.png"
          width={300}
          height={300}
          alt="object11"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
      <ParallaxLayer offset={10} speed={0.3} className={styles.layer_object4}>
        <Image
          src="/images/obj/12.png"
          width={300}
          height={300}
          alt="object12"
          className={styles.object2}
          priority
        />
      </ParallaxLayer>
    </>
  );
};

export default Bg;
