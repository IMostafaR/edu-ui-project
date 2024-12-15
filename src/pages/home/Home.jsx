import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";
import "./style.css";
import { Helmet } from "react-helmet";

const Home = () => {
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
      <section className="pt-120 f-courses bg-purple">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center">
                <span className="f-courses bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                  Featured Courses
                </span>
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

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseOne}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniOne}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      className="text-decoration-none tx-black"
                      to="/course-details"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseTwo}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniTwo}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">Yale University</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      className="text-decoration-none tx-black"
                      to="/course-details"
                    >
                      Online Courses Can Also Provide Access High-Quality
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseThree}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniThree}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      className="text-decoration-none tx-black"
                      to="/course-details"
                    >
                      Online Courses Can Also Provide Access High-Quality
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseFour}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniFour}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      to="/course-details"
                      className="text-decoration-none tx-black"
                    >
                      Learn how to start an amazon FBA store & analysis
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseFive}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniFive}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">Yonsei University</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      to="/course-details"
                      className="text-decoration-none tx-black"
                    >
                      Unity Medical Visualize Deployment and Usability
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseSix}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniSix}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      to="/course-details"
                      className="text-decoration-none tx-black"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseSeven}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniSeven}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      to="/course-details"
                      className="text-decoration-none tx-black"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <Link to="/course-details">
                  <img
                    src={images.pageOne.courses.courseEight}
                    className="card-img-top"
                    alt="course-img"
                  />
                </Link>
                <div className="card-body">
                  <div>
                    <img
                      src={images.pageOne.uniLogo.uniEight}
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <Link
                      to="/course-details"
                      className="text-decoration-none tx-black"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </Link>
                  </h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
                  <div className="tx-gray">
                    <i className="fa-solid fa-book pe-2"></i>
                    <span className="pe-3">23</span>
                    <i className="fa-regular fa-user"></i>
                    <span>50</span>
                  </div>
                  <div className="fw-bold tx-blue">
                    <span className="text-decoration-line-through tx-gray pe-2">
                      $130
                    </span>
                    $86
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Start learning Free --> */}
      <section className="pt-120 learning">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-6">
              <div>
                <img
                  className="img-fluid"
                  src={images.pageOne.learning}
                  alt="student-imgs"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-5">
                <span className="bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block free">
                  Download App
                </span>
                <h2 className="fw-bold tx-black fs-1">
                  Online Course can be Tailored to Need of learners
                </h2>
                <p className="tx-gray">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
                <ul>
                  <li className="fw-bold mb-2">
                    International course collection in 14 languages
                  </li>
                  <li className="fw-bold mb-2">
                    Top certifications in tech and business
                  </li>
                  <li className="fw-bold mb-5">
                    Access to 35,000+ top Eduan courses, anytime, anywhere
                  </li>
                </ul>
                <Link
                  className="btn bg-blue text-white fw-bold px-3 py-2 ms-3"
                  to="/courses"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Events --> */}
      <section className="pt-120 events f-courses bg-purple">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-between gap-2 align-content-center">
                <div>
                  <span className="events bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                    Conference on Education
                  </span>
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
            <div className="col">
              <div className="card h-100 box-radius box-shadow p-3">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogOne}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-solid fa-location-dot pe-2 tx-red"></i>
                    London, US
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>8.00 am -
                    6.00 pm
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      These are Designed to Provide Hands Training and
                      Skill-Building.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow p-3">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogTwo}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-solid fa-location-dot pe-2 tx-red"></i>
                    London, US
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>8.00 am -
                    6.00 pm
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Personalized Learning & Meeting The Needs of Every
                      Student.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow p-3">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogThree}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-solid fa-location-dot pe-2 tx-red"></i>
                    London, US
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>8.00 am -
                    6.00 pm
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      The Whole Child Fostering Social and Emotional
                      Development.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Reviews --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center mb-5">
                <span className="our-blog bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                  Student Reviews
                </span>
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

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card bg-gray border-0 box-radius p-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <div>
                        <img
                          className="rounded-circle"
                          src={images.pageOne.adminOne}
                          alt="admin"
                        />
                      </div>
                      <div>
                        <p className="m-0 fw-bold tx-black">Brian Cumin</p>
                        <p className="m-0 tx-gray">Indigo Violet</p>
                      </div>
                    </div>
                    <div>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                    </div>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolorArcu risus quis varius quam quisque id
                    diam. mauris consectetur adipiscing elit, sed do eiusm
                    commodo imperdiet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-gray border-0 box-radius p-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <div>
                        <img
                          className="rounded-circle"
                          src={images.pageOne.adminTwo}
                          alt="admin"
                        />
                      </div>
                      <div>
                        <p className="m-0 fw-bold tx-black">Penny Tool</p>
                        <p className="m-0 tx-gray">Web Designer</p>
                      </div>
                    </div>
                    <div>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                    </div>
                  </div>
                  <p className="card-text">
                    Nunc valuate nil urn, id fermentum sem portico non volitant
                    leafed lorem, quiz poseur ipsum aliquot a. Morbi urn unique
                    ac herderite volutpatorca, pelletise in felis elemental
                    fermentum lobotids effector mi. nula denim orca, so dales at
                    ante dales ornate rises..
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-gray border-0 box-radius p-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <div>
                        <img
                          className="rounded-circle"
                          src={images.pageOne.adminThree}
                          alt="admin"
                        />
                      </div>
                      <div>
                        <p className="m-0 fw-bold tx-black">Brian Cumin</p>
                        <p className="m-0 tx-gray">Indigo Violet</p>
                      </div>
                    </div>
                    <div>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                      <i className="fa-solid fa-star tx-yellow"></i>
                    </div>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolorArcu risus quis varius quam quisque id
                    diam. mauris consectetur adipiscing elit, sed do eiusm
                    commodo imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blogs --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center mb-5">
                <span className="our-blog bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                  Our Blog
                </span>
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
};

export default Home;
