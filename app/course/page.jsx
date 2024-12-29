import "./style.css";
import "../shared/hero/style.css";
import Head from "next/head";
import Hero from "../shared/hero/Hero";
import Search from "../shared/Search/Search";
import FeaturedCourses from "../_components/FeaturedCourses/FeaturedCourses";
import Pagination from "../shared/Pagination/Pagination";

export default function Course() {
  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>

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
