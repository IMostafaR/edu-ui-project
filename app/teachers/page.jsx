import "./style.css";
import "../shared/hero/style.css";
import AllTeachers from "../_components/AllTeachers/AllTeachers";
import Hero from "../shared/hero/Hero";
import Head from "next/head";

export default function Teachers() {
  return (
    <>
      <Head>
        <title>Teachers</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Our Professor"} breadcrumb={"Our Professor"} />

      {/* <!-- Teachers --> */}
      <AllTeachers />
    </>
  );
}
