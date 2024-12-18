import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import FeaturedCourses from "../../shared/FeaturedCourses/FeaturedCourses.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Search from "../../components/Search/Search.jsx";

export default function Course() {
  return (
    <>
      <Helmet>
        <title>Courses</title>
      </Helmet>

      {/* <!-- Header Banner --> */}
      <Hero pageName={"Course Archive"} breadcrumb={"Courses"} />

      {/* <!-- Featured Courses --> */}
      <section className="pt-120">
        <div className="container">
          <Search />

          <FeaturedCourses className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5" />

          <Pagination />
        </div>
      </section>
    </>
  );
}
