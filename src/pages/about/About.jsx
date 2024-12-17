import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import BlogCard from "../../components/EventAndBlogCard/EventAndBlogCard.jsx";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";
import Learning from "../../shared/Learning/learning.jsx";
import Hero from "../../shared/hero/Hero.jsx";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      {/* <!-- Header Banner --> */}
      <Hero pageName={"About Us"} breadcrumb={"About"} />

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
                  <span className="position-relative ms-2">
                    Professor
                    <img
                      className="position-absolute"
                      src={images.underline}
                      alt="line"
                    />
                  </span>
                </h2>

                <div>
                  <Link
                    className="btn bg-blue px-3 py-2 text-white fw-bold text-decoration-none"
                    to="/signup"
                  >
                    Become An Instructor
                  </Link>
                </div>
              </div>
            </div>
            <TeacherCard />
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
                  <span className="position-relative ms-2">
                    Articles
                    <img
                      className="position-absolute"
                      src={images.underline}
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
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}
