import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";
import "./style.css";
import { Helmet } from "react-helmet";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Events from "../../components/Events/Events.jsx";
import Learning from "../../components/learning/learning.jsx";
import FeaturedCourses from "../../components/featuredCourses/FeaturedCourses.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* home banner */}
      <section className="home-banner bg-light-blue rounded-5">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content mb-5 mb-lg-auto">
                <span className="bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                  Online Learning Platform
                </span>
                <h1 className="fw-bold tx-black">
                  Master The Skills Drive Your Career.
                </h1>
                <p className="tx-gray mb-5">
                  Through a combination of lectures, readings, and discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
                <Link
                  className="btn bg-blue text-white fw-bold px-4 py-3"
                  to="/courses"
                >
                  View All Course
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative banner-img">
                <img
                  className="img-fluid position-relative z-3"
                  src={images.pageOne.banner}
                  alt="female student"
                />
                <img
                  className="position-absolute img-fluid z-0 end-0"
                  src={images.pageOne.ring}
                  alt="ring"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Popular Categories --> */}
      <section className="pt-120 mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="tx-gray fw-bold text-center mb-5">
                340+ Leading Universities And Companies
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="companies d-flex justify-content-evenly align-content-center gap-5 flex-wrap border border-1 py-4">
                <img
                  className="opacity-25"
                  src={images.pageOne.dropbox}
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src={images.pageOne.clickUp}
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src={images.pageOne.shopify}
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src={images.pageOne.intu}
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src={images.pageOne.slack}
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src={images.pageOne.twilio}
                  alt="dropbox logo"
                />
              </div>
            </div>
          </div>

          <div className="categories row align-items-center pt-120">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <span className="bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                Browse Categories
              </span>
              <h1 className="fw-bold tx-black mb-4">Popular Categories</h1>
              <div className="d-flex justify-content-start gap-2">
                <i
                  className="fa-solid fa-arrow-left border rounded-circle shadow-lg tx-gray p-3"
                  role="button"
                ></i>
                <i
                  className="fa-solid fa-arrow-right border rounded-circle shadow-lg tx-gray p-3"
                  role="button"
                ></i>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <Link to="/courses">
                      <img
                        src={images.pageOne.categoryOne}
                        className="card-img-top"
                        alt="category img"
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Digital Marketing</h5>
                      <Link
                        to="/courses"
                        className="card-text text-decoration-none tx-gray"
                      >
                        26 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <Link to="/courses">
                      <img
                        src={images.pageOne.categoryTwo}
                        className="card-img-top"
                        alt="category img"
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Graphic Design</h5>
                      <Link
                        to="/courses"
                        className="card-text text-decoration-none tx-gray"
                      >
                        78 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <Link to="/courses">
                      <img
                        src={images.pageOne.categoryThree}
                        className="card-img-top"
                        alt="category img"
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Web Design</h5>
                      <Link
                        to="/courses"
                        className="card-text text-decoration-none tx-gray"
                      >
                        15 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <Link to="/courses">
                      <img
                        src={images.pageOne.categoryFour}
                        className="card-img-top"
                        alt="category img"
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">IT & Software</h5>
                      <Link
                        to="/courses"
                        className="card-text text-decoration-none tx-gray"
                      >
                        26 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Featured Courses --> */}
      <FeaturedCourses />
      {/* <!-- Start learning Free --> */}
      <Learning />
      {/* <!-- Events --> */}
      <Events />
      {/* <!-- Reviews --> */}
      <Reviews />
      {/* <!-- Blogs --> */}
      <Blogs />
    </>
  );
}
