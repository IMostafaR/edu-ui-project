import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import AllTeachers from "../../components/AllTeachers/AllTeachers.jsx";

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Teachers</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Our Professor"} breadcrumb={"Our Professor"} />

      {/* <!-- Teachers --> */}
      <AllTeachers />
    </>
  );
}
