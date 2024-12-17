import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Card from "../../components/CoursesCard/Card.jsx";
export default function Course() {
  const courses = [
    {
      img: images.pageOne.courses.courseOne,
      img_logo: images.pageOne.uniLogo.uniOne,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseTwo,
      img_logo: images.pageOne.uniLogo.uniTwo,
      name: "Yale University",
      card_title: "Online Courses Can Also Provide Access High-Quality",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseThree,
      img_logo: images.pageOne.uniLogo.uniThree,
      name: "University of London",
      card_title: "Online Courses Can Also Provide Access High-Quality",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseFour,
      img_logo: images.pageOne.uniLogo.uniFour,
      name: "University of London",
      card_title: "Learn how to start an amazon FBA store & analysis",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseFive,
      img_logo: images.pageOne.uniLogo.uniFive,
      name: "Yonsei University",
      card_title: "Unity Medical Visualize Deployment and Usability",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseSix,
      img_logo: images.pageOne.uniLogo.uniSix,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseSeven,
      img_logo: images.pageOne.uniLogo.uniSeven,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseEight,
      img_logo: images.pageOne.uniLogo.uniEight,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
  ];
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
            {courses.map((course, index) => (
              <Card
                key={index}
                img={course.img}
                imgLogo={course.img_logo}
                universityName={course.name}
                title={course.card_title}
                booksCount={course.book}
                usersCount={course.user}
                discountPrice={course.discount}
                price={course.price}
              />
            ))}
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
}
