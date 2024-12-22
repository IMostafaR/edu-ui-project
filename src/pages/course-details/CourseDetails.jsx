import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Hero from "../../shared/hero/Hero.jsx";
import CourseDetail from "../../components/CourseDetail/CourseDetail.jsx";

export default function CourseDetails() {
  return (
    <>
      <Helmet>
        <title>Course Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero
        pageName={"Introduction to User Experience Design"}
        breadcrumb={"Course Details"}
      />

      {/* <!-- Course-details --> */}
     <CourseDetail/>
     
    </>
  );
}
