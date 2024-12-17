import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import line_img from "../../assets/imgs/page-5/line.png";
import EventCard from "../../components/EventCard/EventCard.jsx";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";
import Learning from "../../components/learning/learning.jsx";

export default function About() {
  const event = [
    {
      img: images.pageOne.blogOne,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        "Education Week News and Views on Education Policy and Practice.",
    },
    {
      img: images.pageOne.blogTwo,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        " The Learning Network Teaching and Learning With The New York Times.",
    },
    {
      img: images.pageOne.blogThree,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        "Nothing is Impossible to Learn If you are Passionate About this Subject",
    },
  ];
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
      {/* <!-- Learning --> */}
      <Learning />
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
                      src={line_img}
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
            {event.map((event, index) => (
              <EventCard
                key={index}
                img={event.img}
                location={event.location}
                time={event.time}
                card_title={event.card_title}
                button_title="Read More"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
