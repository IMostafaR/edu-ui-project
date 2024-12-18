import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import FeaturedCourses from "../../shared/FeaturedCourses/FeaturedCourses.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

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
          <div className="row">
            <div className="col">
              <div className="d-flex flex-wrap align-items-center justify-content-between mb-5">
                <p className="tx-gray fw-bold">Showing 1-8 of 24 results</p>
                <div>
                  <form className="d-flex" role="search">
                    <div className="input-group course-seearch me-2 mb-3 mb-xl-auto w-auto">
                      <input
                        type="search"
                        className="form-control bg-gray border-0 course-seearch"
                        placeholder="Search Item"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="bg-gray input-group-text border-0"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <FeaturedCourses className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5" />

          <Pagination />
        </div>
      </section>
    </>
  );
}
