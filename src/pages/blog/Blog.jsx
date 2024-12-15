import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blogs</title>
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
    </>
  );
};

export default Blog;
