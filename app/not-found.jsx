import Head from "next/head";
import { images } from "../public/index";
import Image from "next/image";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found!</title>
      </Head>

      <section className="d-flex flex-column my-5 pt-120">
        <h1 className="text-center text-main fw-bolder mb-3">
          OOPS! Page Not Found
        </h1>
        <Image
          src={images.error}
          className="w-50 m-auto"
          alt="page not found 404"
        />
      </section>
    </>
  );
}
