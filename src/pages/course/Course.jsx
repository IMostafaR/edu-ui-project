import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import FeaturedCourses from "../../shared/FeaturedCourses/FeaturedCourses.jsx";
import Hero from "../../shared/hero/Hero.jsx";

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

          <div className="row">
            <div className="col">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
