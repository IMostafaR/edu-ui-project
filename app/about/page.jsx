import "./style.css";
import "../shared/hero/style.css";
import AboutTeachers from "../_components/AboutTeachers/AboutTeachers";
import Head from "next/head";
import Blogs from "../_components/Blogs/Blogs";
import Learning from "../shared/Learning/Learning";
import Hero from "../shared/hero/Hero";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"About Us"} breadcrumb={"About"} />

      {/* <!-- Learning --> */}
      <Learning />

      {/* <!-- Teachers --> */}
      <AboutTeachers />

      {/* <!-- Blogs --> */}
      <Blogs />
    </>
  );
}
