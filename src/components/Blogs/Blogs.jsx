import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";

export default function Blogs() {
  return (
    <section className="pt-120 blogs">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title d-flex flex-column align-items-center mb-5">
              <span className="our-blog bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                Our Blog
              </span>
              <h2 className="tx-black fw-bold mb-5">Our Latest Articles</h2>
              <p className="tx-gray w-50 text-center">
                Through a combination of lectures, readings, discussions,
                students will gain a solid foundation in educational psychology.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="card mb-3 p-2 box-shadow align-items-stretch box-radius border-0">
              <div className="row g-4 align-items-center">
                <div className="col-md-4">
                  <Link to="/blog-details">
                    <img
                      src={images.pageOne.blogFour}
                      className="img-fluid rounded w-100"
                      alt="blog-img"
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <span className="pe-3 tx-gray">
                      <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                    </span>
                    <span className="tx-gray">
                      <i className="fa-regular fa-clock pe-2 tx-red"></i>June
                      23, 2023
                    </span>
                    <h5 className="card-title mt-2 mb-4">
                      <Link
                        className="text-decoration-none tx-black fw-bold"
                        to="/blog-details"
                      >
                        Nothing is Impossible to Learn If you are Passionate
                        About this Subject
                      </Link>
                    </h5>
                    <Link
                      to="/blog-details"
                      className="btn border border-1 px-3 py-2 mb-4"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-2 box-shadow align-items-stretch box-radius border-0">
              <div className="row g-4 align-items-center">
                <div className="col-md-4">
                  <Link to="/blog-details">
                    <img
                      src={images.pageOne.blogFive}
                      className="img-fluid rounded w-100"
                      alt="blog-img"
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <span className="pe-3 tx-gray">
                      <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                    </span>
                    <span className="tx-gray">
                      <i className="fa-regular fa-clock pe-2 tx-red"></i>June
                      23, 2023
                    </span>
                    <h5 className="card-title mt-2 mb-4">
                      <Link
                        className="text-decoration-none tx-black fw-bold"
                        to="/blog-details"
                      >
                        Nothing is Impossible to Learn If you are Passionate
                        About this Subject
                      </Link>
                    </h5>
                    <Link
                      to="/blog-details"
                      className="btn border border-1 px-3 py-2 mb-4"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100 box-radius box-shadow border-0">
              <Link to="/blog-details">
                <img
                  src={images.pageOne.blogSix}
                  className="card-img-top"
                  alt="blog-img"
                />
              </Link>
              <div className="card-body p-4">
                <span className="pe-3 tx-gray">
                  <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                </span>
                <span className="tx-gray">
                  <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                  2023
                </span>
                <h5 className="card-title mt-2 mb-3">
                  <Link
                    className="text-decoration-none tx-black fw-bold"
                    to="/blog-details"
                  >
                    Education Week News and Views on Education Policy and
                    Practice.
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn border border-1 px-3 py-2"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
