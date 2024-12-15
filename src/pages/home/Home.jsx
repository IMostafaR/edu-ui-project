import "./style.css";
const Home = () => {
  return (
    <>
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
                <a
                  className="btn bg-blue text-white fw-bold px-4 py-3"
                  href="course.html"
                >
                  View All Course
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative banner-img">
                <img
                  className="img-fluid position-relative z-3"
                  src="assets/images/page-1/banner-img.png"
                  alt="female student"
                />
                <img
                  className="position-absolute img-fluid z-0 end-0"
                  src="assets/images/page-1/shape_1.png"
                  alt=""
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
                  src="assets/images/page-1/h_5.png"
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src="assets/images/page-1/h_6.png"
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src="assets/images/page-1/h_1.png"
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src="assets/images/page-1/h_2.png"
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src="assets/images/page-1/h_3.png"
                  alt="dropbox logo"
                />
                <img
                  className="opacity-25"
                  src="assets/images/page-1/h_4.png"
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
                    <a href="course.html">
                      <img
                        src="assets/images/page-1/1.jpg"
                        className="card-img-top"
                        alt="category img"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Digital Marketing</h5>
                      <a
                        href="course.html"
                        className="card-text text-decoration-none tx-gray"
                      >
                        26 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <a href="course.html">
                      <img
                        src="assets/images/page-1/2.jpg"
                        className="card-img-top"
                        alt="category img"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Graphic Design</h5>
                      <a
                        href="course.html"
                        className="card-text text-decoration-none tx-gray"
                      >
                        78 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <a href="course.html">
                      <img
                        src="assets/images/page-1/3.jpg"
                        className="card-img-top"
                        alt="category img"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Web Design</h5>
                      <a
                        href="course.html"
                        className="card-text text-decoration-none tx-gray"
                      >
                        15 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-md-6 col-12">
                  <div className="card h-100 box-radius shadow-lg border-0">
                    <a href="course.html">
                      <img
                        src="assets/images/page-1/4.jpg"
                        className="card-img-top"
                        alt="category img"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">IT & Software</h5>
                      <a
                        href="course.html"
                        className="card-text text-decoration-none tx-gray"
                      >
                        26 Items
                        <i className="fa-solid fa-arrow-right tx-gray ps-2"></i>
                      </a>
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
                      <a
                        className="text-decoration-none btn bg-blue text-white px-4 rounded-5 mb-2 ms-2"
                        href="#"
                      >
                        See All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                        href="#"
                      >
                        Trending
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                        href="#"
                      >
                        Featured
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                        href="#"
                      >
                        Web Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2 me-2"
                        href="#"
                      >
                        Popular
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-100 box-radius border-0 shadow-lg p-2">
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/1(4).jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v1.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      className="text-decoration-none tx-black"
                      href="course-details.html"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/2(2).jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v2.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">Yale University</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      className="text-decoration-none tx-black"
                      href="course-details.html"
                    >
                      Online Courses Can Also Provide Access High-Quality
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/3(2).jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v3.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      className="text-decoration-none tx-black"
                      href="course-details.html"
                    >
                      Online Courses Can Also Provide Access High-Quality
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/4(2).jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v4.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      href="course-details.html"
                      className="text-decoration-none tx-black"
                    >
                      Learn how to start an amazon FBA store & analysis
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/5.jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v5.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">Yonsei University</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      href="course-details.html"
                      className="text-decoration-none tx-black"
                    >
                      Unity Medical Visualize Deployment and Usability
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/6.jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v1.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      href="course-details.html"
                      className="text-decoration-none tx-black"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/7.jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v1.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      href="course-details.html"
                      className="text-decoration-none tx-black"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </a>
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
                <a href="course-details.html">
                  <img
                    src="assets/images/page-1/8.jpg"
                    className="card-img-top"
                    alt="course-img"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <img
                      src="assets/images/page-1/v1.png"
                      alt="University logo"
                    />
                    <span className="tx-gray ps-3">University of London</span>
                  </div>
                  <h5 className="card-title fw-bold my-3">
                    <a
                      href="course-details.html"
                      className="text-decoration-none tx-black"
                    >
                      The Complete JavaScript Course From Zero to Expert!
                    </a>
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
                  src="assets/images/page-4/1.png"
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
                <a
                  className="btn bg-blue text-white fw-bold px-3 py-2 ms-3"
                  href="course.html"
                >
                  More Details
                </a>
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
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100 box-radius box-shadow p-3">
                <a href="blog-details.html">
                  <img
                    src="assets/images/page-4/blog-1.jpg"
                    className="card-img-top"
                    alt="blog-img"
                  />
                </a>
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
                    <a
                      className="text-decoration-none tx-black fw-bold"
                      href="blog-details.html"
                    >
                      These are Designed to Provide Hands Training and
                      Skill-Building.
                    </a>
                  </h5>
                  <a
                    href="blog-details.html"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Get Ticket
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow p-3">
                <a href="blog-details.html">
                  <img
                    src="assets/images/page-4/blog-2.jpg"
                    className="card-img-top"
                    alt="blog-img"
                  />
                </a>
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
                    <a
                      className="text-decoration-none tx-black fw-bold"
                      href="blog-details.html"
                    >
                      Personalized Learning & Meeting The Needs of Every
                      Student.
                    </a>
                  </h5>
                  <a
                    href="blog-details.html"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Get Ticket
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow p-3">
                <a href="blog-details.html">
                  <img
                    src="assets/images/page-4/blog-3.jpg"
                    className="card-img-top"
                    alt="blog-img"
                  />
                </a>
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
                    <a
                      className="text-decoration-none tx-black fw-bold"
                      href="blog-details.html"
                    >
                      The Whole Child Fostering Social and Emotional
                      Development.
                    </a>
                  </h5>
                  <a
                    href="blog-details.html"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Get Ticket
                  </a>
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
                        <img src="assets/images/page-1/admin-1.jpg" alt="" />
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
                        <img src="assets/images/page-1/admin-4.jpg" alt="" />
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
                        <img src="assets/images/page-1/admin-6.jpg" alt="" />
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
                    <a href="blog-details.html">
                      <img
                        src="assets/images/page-1/blog-1.jpg"
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </a>
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
                        <a
                          className="text-decoration-none tx-black fw-bold"
                          href="blog-details.html"
                        >
                          Nothing is Impossible to Learn If you are Passionate
                          About this Subject
                        </a>
                      </h5>
                      <a
                        href="blog-details.html"
                        className="btn border border-1 px-3 py-2 mb-4"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-2 box-shadow align-items-stretch box-radius border-0">
                <div className="row g-4 align-items-center">
                  <div className="col-md-4">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/page-1/blog-2.jpg"
                        className="img-fluid rounded w-100"
                        alt="blog-img"
                      />
                    </a>
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
                        <a
                          className="text-decoration-none tx-black fw-bold"
                          href="blog-details.html"
                        >
                          Nothing is Impossible to Learn If you are Passionate
                          About this Subject
                        </a>
                      </h5>
                      <a
                        href="blog-details.html"
                        className="btn border border-1 px-3 py-2 mb-4"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 box-radius box-shadow border-0">
                <a href="blog-details.html">
                  <img
                    src="assets/images/page-1/blog-3.jpg"
                    className="card-img-top"
                    alt="blog-img"
                  />
                </a>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-3">
                    <a
                      className="text-decoration-none tx-black fw-bold"
                      href="blog-details.html"
                    >
                      Education Week News and Views on Education Policy and
                      Practice.
                    </a>
                  </h5>
                  <a
                    href="blog-details.html"
                    className="btn border border-1 px-3 py-2"
                  >
                    Read more
                  </a>
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
