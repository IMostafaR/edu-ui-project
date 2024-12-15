import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses</title>
      </Helmet>

      {/* <!-- Header Banner --> */}
      <section className="header-banner d-flex flex-column justify-content-center align-items-center position-relative">
        <h1 className="fw-bold">Course Archive</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fw-bold">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none tx-black">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item tx-blue">Course</li>
          </ol>
        </nav>
        <img
          className="position-absolute"
          src={images.pageTwo.star}
          alt="star symbol"
        />
      </section>

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

          <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
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
};

export default Courses;
