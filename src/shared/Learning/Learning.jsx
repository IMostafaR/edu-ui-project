import { Link } from "react-router-dom";
import "../../pages/about/style.css";
import { images } from "../../assets/imgs/index.js";
import Badge from "../../components/Badge/Badge.jsx";

export default function Learning() {
  return (
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
              <Badge className={"free"} text={"Download App"} />
              <h2 className="fw-bold tx-black fs-1">
                Online Course can be Tailored to Need of learners
              </h2>
              <p className="tx-gray">
                Through a combination of lectures, readings, discussions,
                students will gain a solid foundation in educational psychology.
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
  );
}
