import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";
export default function Teachers() {
  const teacher = [
    {
      img: images.teachers.teacherOne,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherTwo,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherThree,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherFour,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherFive,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherSix,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherSeven,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherEight,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherNine,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherTen,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
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
            {teacher.map((teacher, index) => (
              <TeacherCard
                key={index}
                img={teacher.img}
                name={teacher.name}
                jobTitle={teacher.jobTitle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
