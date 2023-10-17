"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center "
      style={{ width: "auto", height: "100vh" }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
          <h1 className="text-white">Something went wrong!</h1>

          <Link className="btn btn-danger ms-1" href={"/"}>
            Back Home
          </Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex align-items-center">
          <Image
            className="img-fluid"
            src="/images/head_logo.png"
            alt="Picture of the author"
            width={500}
            height={500}
            sizes={"(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"}
            placeholder="blur"
            blurDataURL={"/images/head_logo.png"}
            style={{ width: "auto", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
