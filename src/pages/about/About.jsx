import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      ;{/* <!-- Header Banner --> */}
      <section className="header-banner d-flex flex-column justify-content-center align-items-center position-relative">
        <h1 className="fw-bold">About Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fw-bold">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none tx-black">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item tx-blue">About</li>
          </ol>
        </nav>
        <img
          className="position-absolute"
          src={images.pageTwo.star}
          alt="star symbol"
        />
      </section>
      {/* <!-- Learning --> */}
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
      {/* <!-- Teachers --> */}
      <section className="pt-120">
        <div className="container">
          <div className="row g-3 mb-5">
            <div className="col-xl-6 col-lg-8 col-md-12 align-items-stretch">
              <div className="instructor box-radius d-flex justify-content-center flex-column p-5">
                <h2 className="fw-bold fs-1 mb-5 line tx-black">
                  Our Most <br />
                  Experience
                  <span className="position-relative">
                    Professor
                    <img
                      className="position-absolute"
                      src={images.underline}
                      alt="line"
                    />
                  </span>
                </h2>

                <div>
                  <button className="btn bg-blue px-3 py-2">
                    <Link
                      className="text-white fw-bold text-decoration-none"
                      to="/signup"
                    >
                      Become An Instructor
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherOne}
                  alt="teacher profile img"
                />
                <Link to="/teacher-details" className="d-block">
                  <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                    <h3 className="mt-5 pt-5">marvin mckinney</h3>
                    <p>web designer</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherTwo}
                  alt="teacher profile img"
                />
                <Link to="/teacher-details" className="d-block">
                  <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                    <h3 className="mt-5 pt-5">marvin mckinney</h3>
                    <p>web designer</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherThree}
                  alt="teacher profile img"
                />
                <Link to="/teacher-details" className="d-block">
                  <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                    <h3 className="mt-5 pt-5">marvin mckinney</h3>
                    <p>web designer</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherFour}
                  alt="teacher profile img"
                />
                <Link to="/teacher-details" className="d-block">
                  <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                    <h3 className="mt-5 pt-5">marvin mckinney</h3>
                    <p>web designer</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherFive}
                  alt="teacher profile img"
                />
                <Link to="/teacher-details" className="d-block">
                  <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                    <h3 className="mt-5 pt-5">marvin mckinney</h3>
                    <p>web designer</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherSix}
                  alt="teacher profile img"
                />
                <Link to="/teacher-details" className="d-block">
                  <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                    <h3 className="mt-5 pt-5">marvin mckinney</h3>
                    <p>web designer</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blogs --> */}
      <section className="pt-5 blogs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center mb-5">
                <h2 className="tx-black fw-bold mb-5">
                  Our Latest
                  <span className="position-relative">
                    Articles
                    <img
                      className="position-absolute"
                      src="assets/images/page-5/line.png"
                      alt="line"
                    />
                  </span>
                </h2>
                <p className="tx-gray w-50 text-center">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogOne}
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
                  <h5 className="card-title mt-2 mb-4">
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
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogTwo}
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
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      The Learning Network Teaching and Learning With The New
                      York Times.
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
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogThree}
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
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Nothing is Impossible to Learn If you are Passionate About
                      this Subject
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
      </section>
    </>
  );
};

export default About;
