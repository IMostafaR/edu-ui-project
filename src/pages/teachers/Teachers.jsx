import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const Teacher = () => {
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
            <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
              <div className="teacher-img box-radius position-relative">
                <img
                  className="w-100"
                  src={images.teachers.teacherSeven}
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
                  src={images.teachers.teacherEight}
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
                  src={images.teachers.teacherNine}
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
                  src={images.teachers.teacherTen}
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
    </>
  );
};

export default Teacher;
