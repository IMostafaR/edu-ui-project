import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import BlogCard from "../../shared/EventAndBlogCard/EventAndBlogCard.jsx";
import TeacherCard from "../../shared/TeacherCard/TeacherCard.jsx";
import Learning from "../../shared/Learning/learning.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import Teachers from "../../components/Teachers/Teachers.jsx";
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
      <Teachers/>

      {/* <!-- Blogs --> */}
      <Blogs/>
    </>
  );
}
