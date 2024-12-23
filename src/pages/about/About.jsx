import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Learning from "../../shared/Learning/learning.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import AboutTeachers from "../../components/AboutTeachers/AboutTeachers.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

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
