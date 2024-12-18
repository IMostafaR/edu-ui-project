import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";
import "./style.css";
import { Helmet } from "react-helmet";
import Learning from "../../shared/Learning/learning.jsx";
import FeaturedCourses from "../../shared/FeaturedCourses/FeaturedCourses.jsx";
import ReviewCard from "../../components/ReviewCard/ReviewCard.jsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import EventCard from "../../components/EventAndBlogCard/EventAndBlogCard.jsx";
import Badge from "../../components/Badge/Badge.jsx";

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
                <Badge text={"Online Learning Platform"} />
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
              <Badge text={"Browse Categories"} />
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
                <CategoryCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Featured Courses --> */}
      <section className="pt-120 f-courses bg-purple">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center">
                <Badge className={"f-courses"} text={"Featured Courses"} />
                <h1 className="tx-black fw-bold mb-5">
                  Explore Featured Courses
                </h1>
              </div>
              <div className="card text-center mb-5 w-50 m-auto rounded-5">
                <div className="">
                  <ul className="nav nav-tabs card-header-tabs p-2 d-flex justify-content-between">
                    <li className="nav-item">
                      <Link
                        className="text-decoration-none btn bg-blue text-white px-4 rounded-5 mb-2 ms-2"
                        to="#"
                      >
                        See All
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                        to="#"
                      >
                        Trending
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                        to="#"
                      >
                        Featured
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                        to="#"
                      >
                        Web Design
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2 me-2"
                        to="#"
                      >
                        Popular
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <FeaturedCourses className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" />
        </div>
      </section>
      {/* <!-- Start learning Free --> */}
      <Learning />
      {/* <!-- Events --> */}
      <section className="pt-120 events f-courses bg-purple">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-between gap-2 align-content-center">
                <div>
                  <Badge
                    className={"events"}
                    text={"Conference on Education"}
                  />
                  <h1 className="fw-bold tx-black mb-5">Upcoming Events</h1>
                </div>
                <div className="d-flex justify-content-start gap-2 align-items-center">
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
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-3 g-4">
            <EventCard blog={false} />
          </div>
        </div>
      </section>
      {/* <!-- Reviews --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center mb-5">
                <Badge className={"our-blog"} text={"Student Reviews"} />
                <h2 className="tx-black fw-bold mb-5">
                  What Our Students Saying
                </h2>
                <p className="tx-gray w-50 text-center">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <ReviewCard />
          </div>
        </div>
      </section>
      {/* <!-- Blogs --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center mb-5">
                <Badge className={"our-blog"} text={"Our Blog"} />
                <h2 className="tx-black fw-bold mb-5">Our Latest Articles</h2>
                <p className="tx-gray w-50 text-center">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="card mb-3 p-2 box-shadow align-items-stretch box-radius border-0">
                <div className="row g-4 align-items-center">
                  <div className="col-md-4">
                    <Link to="/blog-details">
                      <img
                        src={images.pageOne.blogFour}
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span className="pe-3 tx-gray">
                        <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                      </span>
                      <span className="tx-gray">
                        <i className="fa-regular fa-clock pe-2 tx-red"></i>June
                        23, 2023
                      </span>
                      <h5 className="card-title mt-2 mb-4">
                        <Link
                          className="text-decoration-none tx-black fw-bold"
                          to="/blog-details"
                        >
                          Nothing is Impossible to Learn If you are Passionate
                          About this Subject
                        </Link>
                      </h5>
                      <Link
                        to="/blog-details"
                        className="btn border border-1 px-3 py-2 mb-4"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-2 box-shadow align-items-stretch box-radius border-0">
                <div className="row g-4 align-items-center">
                  <div className="col-md-4">
                    <Link to="/blog-details">
                      <img
                        src={images.pageOne.blogFive}
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span className="pe-3 tx-gray">
                        <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                      </span>
                      <span className="tx-gray">
                        <i className="fa-regular fa-clock pe-2 tx-red"></i>June
                        23, 2023
                      </span>
                      <h5 className="card-title mt-2 mb-4">
                        <Link
                          className="text-decoration-none tx-black fw-bold"
                          to="/blog-details"
                        >
                          Nothing is Impossible to Learn If you are Passionate
                          About this Subject
                        </Link>
                      </h5>
                      <Link
                        to="/blog-details"
                        className="btn border border-1 px-3 py-2 mb-4"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 box-radius box-shadow border-0">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogSix}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-3">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Education Week News and Views on Education Policy and
                      Practice.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
