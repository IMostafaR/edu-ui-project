import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import TeacherCard from "../../shared/TeacherCard/TeacherCard.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import TeachersComponent from "../../components/TeachersComponent/TeachersComponent.jsx";

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Teachers</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Our Professor"} breadcrumb={"Our Professor"} />

      {/* <!-- Teachers --> */}
      <TeachersComponent/>
      
    </>
  );
}
