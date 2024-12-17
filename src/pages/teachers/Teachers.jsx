import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import TeacherCard from "../../components/TeacherCard/TeacherCard.jsx";
import Hero from "../../shared/hero/Hero.jsx";

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Teachers</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Our Professor"} breadcrumb={"Our Professor"} />

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
            <TeacherCard showAll={true} />
          </div>
        </div>
      </section>
    </>
  );
}
