import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Hero from "../../shared/hero/Hero.jsx";

export default function BlogDetails() {
  return (
    <>
      <Helmet>
        <title>Blog Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Blog Details"} breadcrumb={"Blog Details"} />

      {/* <!-- blog-details --> */}
      <main className="course-details">
        <div className="container mt-5">
          <div className="course_Img position-relative">
            <img
              className="rounded-top"
              src={images.bigBannerCourse}
              alt="banner"
            />
          </div>
          <div className="row Course_contant">
            <div className="col-lg-8">
              <div className="course_Teacher main-white box-shadow box-radius px-5 py-4">
                <h3>Introduction to User Experience Design</h3>

                <div className="row p-0 m-0 justify-content-between mt-5">
                  <div className="row col-lg-10 px-0">
                    <div className="col-lg-4 d-flex">
                      <div className="author-img">
                        <img src="./assets/images/page-3/author.jpg" alt="" />
                      </div>
                      <div className="author-info ps-2">
                        <span>Teacher</span>
                        <h5>
                          <Link
                            to="/teacher-details"
                            className="text-decoration-none tx-black"
                          >
                            Dylan Meringue
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-4 course_category position-relative">
                      <span>Categories</span>
                      <h5>
                        <Link to="#" className="text-decoration-none tx-black">
                          Online Teaching
                        </Link>
                      </h5>
                    </div>
                    <div className="col-lg-4 course_rating position-relative">
                      <span>Review</span>
                      <ul className="p-0 d-flex">
                        <li className="list-group-item">
                          <i className="fa-solid fa-star tx-yellow"></i>
                        </li>
                        <li className="list-group-item">
                          <i className="fa-solid fa-star tx-yellow"></i>
                        </li>
                        <li className="list-group-item">
                          <i className="fa-solid fa-star tx-yellow"></i>
                        </li>
                        <li className="list-group-item">
                          <i className="fa-solid fa-star tx-yellow"></i>
                        </li>
                        <li className="list-group-item">
                          <i className="fa-solid fa-star tx-yellow"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 main-white text-end">
                    <Link className="btn btn-primary" to="/pricing">
                      Free
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--  --> */}
              <div className="my-5">
                <ul className="nav">
                  <li className="nav-item">
                    <button className="nav-link active box-radius p-0 d-flex justify-content-center align-items-center">
                      <i className="fa-regular fa-bookmark"></i>
                      <span>Overview</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link p-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-box"></i>
                      <span>Curriculum</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link p-0 d-flex justify-content-center align-items-center">
                      <i className="fa-regular fa-user"></i>
                      <span>Instructor</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link p-0 d-flex justify-content-center align-items-center">
                      <i className="fa-regular fa-comment-dots"></i>
                      <span>Reviews</span>
                    </button>
                  </li>
                </ul>
              </div>
              {/* <!-- -------------- --> */}
              <div className="Courses_Description">
                <div className="course_content">
                  <h4 className="course_content_title mb-4">
                    Courses Description
                  </h4>
                  <p className="text_gray_opacity">
                    Curabitur tempus tincidunt tellus ac placerat. Nullam non
                    libero nisi. Fusce congue est eget nisl tristique ornare.
                    Vestibulum id massa felis. Nullam vehicula bibendum nulla eu
                    vulputate. Aenean fringilla tortor ut laoreet congue magna,
                    a viverra turpis consectetur porta.
                  </p>
                  <p className="text_gray_opacity">
                    Curabitur tempus tincidunt tellus ac placerat. Nullam non
                    libero nisi. Fusce congue est eget nisl tristique ornare.
                    Vestibulum id massa felis. Nullam vehicula bibendum nulla eu
                    vulputate. Aenean fringilla tortor ut laoreet congue magna,
                    a viverra turpis consectetur porta.
                  </p>
                  <h4 className="course_content-title mt-5">
                    What you will learn in this course
                  </h4>
                  <div className="text_gray_opacity mt-4">
                    <ul className="list-style-disc ps-3">
                      <li>
                        Etyma protium et olio gravida cur abitur est dui
                        viverrid non mi egret
                      </li>
                      <li>
                        Dictum Bibendum sapiens internum malasada fames ac ante
                        ipsum primes
                      </li>
                      <li>
                        Fauci bus cur abitur pulvinar rut rum masa sed so dales
                        sapiens utricles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ------------------------------- --> */}
            <div className="col-lg-4">
              <div className="course_details main-white box-shadow box-radius">
                <div className="price">
                  <span className="text-decoration-line-through">$36.00</span>
                  <h3 className="tx-black">$28.00</h3>
                </div>
                <div className="courseUl">
                  <ul className="p-0">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-regular fa-clock me-3 tx-blue"></i>
                        Duration
                      </span>
                      <span>15 Weeks</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-regular fa-user me-3 tx-blue"></i>
                        Students
                      </span>
                      <span>354</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-regular fa-file me-3 tx-blue"></i>
                        Lessons
                      </span>
                      <span>42</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-solid fa-chart-line me-3 tx-blue"></i>
                        Skill Level
                      </span>
                      <span>Beginner</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-solid fa-language me-3 tx-blue"></i>
                        Language
                      </span>
                      <span>English</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-regular fa-user me-3 tx-blue"></i>
                        Instructor
                      </span>
                      <span>Dylan Meringue</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-solid fa-percent me-3 tx-blue"></i>
                        Pass Percentage
                      </span>
                      <span>84%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <i className="fa-regular fa-calendar me-3 tx-blue"></i>
                        Deadline
                      </span>
                      <span>24 March 2023</span>
                    </li>
                  </ul>
                </div>
                <div className="row p-0 m-0 justify-content-center">
                  <Link
                    className="btn btn-primary w-75 py-3 mt-4"
                    to="/pricing"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
