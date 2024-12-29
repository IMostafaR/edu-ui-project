import "./style.css";
import "../shared/hero/style.css";
import CourseInfo from "../_components/CourseInfo/CourseInfo";
import Hero from "../shared/hero/Hero";
import Head from "next/head";

export default function CourseDetails() {
  return (
    <>
      <Head>
        <title>Course Details</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero
        pageName={"Introduction to User Experience Design"}
        breadcrumb={"Course Details"}
      />

      {/* <!-- Course-details --> */}
      <CourseInfo />
    </>
  );
}
