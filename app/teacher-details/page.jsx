import "./style.css";
import "../shared/hero/style.css";
// import Hero from "../../shared/hero/Hero.jsx";
import Head from "next/head";
import TeacherInfo from "../_components/TeacherInfo/TeacherInfo";
import Hero from "../shared/hero/Hero";

export default function TeacherDetails() {
  return (
    <>
      <Head>
        <title>Teacher Details</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Our Professor"} breadcrumb={"Our Professor"} />

      {/* <!-- Teacher Details --> */}
      <TeacherInfo />
    </>
  );
}
