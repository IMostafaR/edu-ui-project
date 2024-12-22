import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Hero from "../../shared/hero/Hero.jsx";
import TeacherDetailsComponent from "../../components/TeacherDetailsComponent/TeacherDetailsComponent.jsx";

export default function TeacherDetails() {
  return (
    <>
      <Helmet>
        <title>Teacher Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Our Professor"} breadcrumb={"Our Professor"} />

      {/* <!-- Teacher Details --> */}
      <TeacherDetailsComponent/>
    </>
  );
}
